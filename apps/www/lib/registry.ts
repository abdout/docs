import { promises as fs } from "fs"
import { tmpdir } from "os"
import path from "path"
import { Index } from "@/__registry__"
import { registryItemFileSchema, registryItemSchema } from "shadcn/registry"
import { Project, ScriptKind, SourceFile, SyntaxKind } from "ts-morph"
import { z } from "zod"

import { Style } from "@/registry/registry-styles"

export const DEFAULT_REGISTRY_STYLE = "new-york" satisfies Style["name"]

const memoizedIndex: typeof Index = Object.fromEntries(
  Object.entries(Index).map(([style, items]) => [style, { ...items }])
)

export function getRegistryComponent(
  name: string,
  style: Style["name"] = DEFAULT_REGISTRY_STYLE
) {
  return memoizedIndex[style][name]?.component
}

export async function getRegistryItem(
  name: string,
  style: Style["name"] = DEFAULT_REGISTRY_STYLE
) {
  console.log(`[DEBUG] getRegistryItem called for ${name}, style: ${style}`);
  const item = memoizedIndex[style][name]

  if (!item) {
    return null
  }

  // Convert all file paths to object.
  // TODO: remove when we migrate to new registry.
  console.log("[DEBUG] Original item files:", JSON.stringify(item.files, null, 2));
  item.files = item.files.map((file: unknown) => {
    const result = typeof file === "string" ? { path: file } : file;
    console.log(`[DEBUG] Converted file: ${typeof file === "string" ? file : JSON.stringify(file)} -> ${JSON.stringify(result)}`);
    return result;
  })
  console.log("[DEBUG] Converted item files:", JSON.stringify(item.files, null, 2));

  // Fail early before doing expensive file operations.
  const result = registryItemSchema.safeParse(item)
  if (!result.success) {
    console.log("[DEBUG] Schema validation failed:", result.error.message);
    return null
  }

  let files: typeof result.data.files = []
  for (const file of item.files) {
    console.log(`[DEBUG] Processing file: ${file.path}`);
    const content = await getFileContent(file)
    const relativePath = path.relative(process.cwd(), file.path)
    console.log(`[DEBUG] File content loaded, relative path: ${relativePath}`);

    files.push({
      ...file,
      path: relativePath,
      content,
    })
  }

  // Get meta.
  // Assume the first file is the main file.
  // const meta = await getFileMeta(files[0].path)

  // Fix file paths.
  console.log("[DEBUG] Before fixing file paths:", JSON.stringify(files.map((f: z.infer<typeof registryItemSchema>["files"][number]) => ({path: f.path, type: f.type})), null, 2));
  files = fixFilePaths(files)
  console.log("[DEBUG] After fixing file paths:", JSON.stringify(files.map((f: z.infer<typeof registryItemSchema>["files"][number]) => ({path: f.path, target: f.target})), null, 2));

  const parsed = registryItemSchema.safeParse({
    ...result.data,
    files,
    // meta,
  })

  if (!parsed.success) {
    console.error(parsed.error.message)
    return null
  }

  return parsed.data
}

async function getFileContent(file: z.infer<typeof registryItemFileSchema>) {
  const raw = await fs.readFile(file.path, "utf-8")

  const project = new Project({
    compilerOptions: {},
  })

  const tempFile = await createTempSourceFile(file.path)
  const sourceFile = project.createSourceFile(tempFile, raw, {
    scriptKind: ScriptKind.TSX,
  })

  // Remove meta variables.
  removeVariable(sourceFile, "iframeHeight")
  removeVariable(sourceFile, "containerClassName")
  removeVariable(sourceFile, "description")

  let code = sourceFile.getFullText()

  // Some registry items uses default export.
  // We want to use named export instead.
  // TODO: do we really need this? - @shadcn.
  if (file.type !== "registry:page") {
    code = code.replaceAll("export default", "export")
  }

  // Fix imports.
  code = fixImport(code)

  return code
}

async function getFileMeta(filePath: string) {
  const raw = await fs.readFile(filePath, "utf-8")

  const project = new Project({
    compilerOptions: {},
  })

  const tempFile = await createTempSourceFile(filePath)
  const sourceFile = project.createSourceFile(tempFile, raw, {
    scriptKind: ScriptKind.TSX,
  })

  const iframeHeight = extractVariable(sourceFile, "iframeHeight")
  const containerClassName = extractVariable(sourceFile, "containerClassName")
  const description = extractVariable(sourceFile, "description")

  return {
    iframeHeight,
    containerClassName,
    description,
  }
}

function getFileTarget(file: z.infer<typeof registryItemFileSchema>) {
  let target = file.target

  console.log("[DEBUG] getFileTarget called for file:", file.path);
  console.log("[DEBUG] Initial target:", target);
  
  if (!target || target === "") {
    // Normalize path - convert backslashes to forward slashes
    const normalizedPath = file.path.replace(/\\/g, '/');
    
    // Extract filename from path, handling both slash types
    const fileName = normalizedPath.split('/').pop();
    
    console.log(`[DEBUG] No target found, generating target for ${fileName}, type: ${file.type}`);
    
    if (
      file.type === "registry:template" ||
      file.type === "registry:component" ||
      file.type === "registry:example"
    ) {
      target = `components/${fileName}`
      console.log(`[DEBUG] Setting target for template/component/example: ${target}`);
    }

    if (file.type === "registry:ui") {
      target = `components/ui/${fileName}`
      console.log(`[DEBUG] Setting target for UI: ${target}`);
    }

    if (file.type === "registry:hook") {
      target = `hooks/${fileName}`
      console.log(`[DEBUG] Setting target for hook: ${target}`);
    }

    if (file.type === "registry:lib") {
      target = `lib/${fileName}`
      console.log(`[DEBUG] Setting target for lib: ${target}`);
    }
    
    // Special case for dashboard templates - if we have dashboard in the path
    if (normalizedPath.includes('/dashboard') || normalizedPath.includes('/components/')) {
      // If it's a subdirectory component of a template, create shorter path
      if (fileName) {
        // Extract last directory name (e.g. 'components')
        const dirName = normalizedPath.split('/').slice(-2, -1)[0];
        target = `${dirName}/${fileName}`;
        console.log(`[DEBUG] Setting target for dashboard/template component: ${target}`);
      }
    }
  }

  // Ensure target path uses forward slashes
  if (target) {
    target = target.replace(/\\/g, '/');
  }

  console.log(`[DEBUG] Final target: ${target ?? ""}`);
  return target ?? ""
}

async function createTempSourceFile(filename: string) {
  const dir = await fs.mkdtemp(path.join(tmpdir(), "shadcn-"))
  return path.join(dir, filename)
}

function removeVariable(sourceFile: SourceFile, name: string) {
  sourceFile.getVariableDeclaration(name)?.remove()
}

function extractVariable(sourceFile: SourceFile, name: string) {
  const variable = sourceFile.getVariableDeclaration(name)
  if (!variable) {
    return null
  }

  const value = variable
    .getInitializerIfKindOrThrow(SyntaxKind.StringLiteral)
    .getLiteralValue()

  variable.remove()

  return value
}

function fixFilePaths(files: z.infer<typeof registryItemSchema>["files"]) {
  if (!files) {
    return []
  }

  console.log("[DEBUG] fixFilePaths called with files:", JSON.stringify(files.map((f: z.infer<typeof registryItemSchema>["files"][number]) => ({path: f.path, type: f.type})), null, 2));

  // Resolve all paths relative to the first file's directory.
  const firstFilePath = files[0].path
  const firstFilePathDir = path.dirname(firstFilePath)
  console.log(`[DEBUG] First file path: ${firstFilePath}, dirname: ${firstFilePathDir}`);

  const result = files.map((file: z.infer<typeof registryItemSchema>["files"][number]) => {
    const originalPath = file.path;
    const relativePath = path.relative(firstFilePathDir, file.path);
    const fileTarget = getFileTarget(file);
    console.log(`[DEBUG] Processing file path:
      Original: ${originalPath}
      Relative to first dir: ${relativePath}
      Target: ${fileTarget}
      Type: ${file.type}`);
    
    return {
      ...file,
      path: relativePath,
      target: fileTarget,
    }
  });
  
  console.log("[DEBUG] fixFilePaths result:", JSON.stringify(result.map((f: z.infer<typeof registryItemSchema>["files"][number]) => ({path: f.path, target: f.target})), null, 2));
  return result;
}

export function fixImport(content: string) {
  const regex = /@\/(.+?)\/((?:.*?\/)?(?:components|ui|hooks|lib))\/([\w-]+)/g

  const replacement = (
    match: string,
    path: string,
    type: string,
    component: string
  ) => {
    if (type.endsWith("components")) {
      return `@/components/${component}`
    } else if (type.endsWith("ui")) {
      return `@/components/ui/${component}`
    } else if (type.endsWith("hooks")) {
      return `@/hooks/${component}`
    } else if (type.endsWith("lib")) {
      return `@/lib/${component}`
    }

    return match
  }

  return content.replace(regex, replacement)
}

export type FileTree = {
  name: string
  path?: string
  children?: FileTree[]
}

export function createFileTreeForRegistryItemFiles(
  files: Array<{ path: string; target?: string }>
) {
  const root: FileTree[] = []
  
  console.log("[DEBUG] Creating file tree for files:", JSON.stringify(files, null, 2));

  for (const file of files) {
    // Use target if available, otherwise use path
    let pathToUse = file.target ?? file.path;
    
    // Normalize path - convert backslashes to forward slashes
    pathToUse = pathToUse.replace(/\\/g, '/');
    
    console.log(`[DEBUG] Processing file - Path: ${file.path}, Target: ${file.target}, Using (normalized): ${pathToUse}`);
    
    const parts = pathToUse.split("/")
    console.log(`[DEBUG] Path parts:`, parts);
    let currentLevel = root

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      const isFile = i === parts.length - 1
      const existingNode = currentLevel.find((node) => node.name === part)

      if (existingNode) {
        if (isFile) {
          // Update existing file node with full path
          existingNode.path = pathToUse
          console.log(`[DEBUG] Updated existing file node: ${pathToUse}`);
        } else {
          // Move to next level in the tree
          currentLevel = existingNode.children!
          console.log(`[DEBUG] Moving to existing directory: ${part}`);
        }
      } else {
        const newNode: FileTree = isFile
          ? { name: part, path: pathToUse }
          : { name: part, children: [] }

        console.log(`[DEBUG] Created new ${isFile ? 'file' : 'directory'} node: ${part}`);
        currentLevel.push(newNode)

        if (!isFile) {
          currentLevel = newNode.children!
        }
      }
    }
  }

  console.log("[DEBUG] Generated file tree:", JSON.stringify(root, null, 2));
  return root
}
