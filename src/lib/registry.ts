import { z } from "zod";

// Schema definitions (extracted from shadcn/registry)
export const registryItemFileSchema = z.object({
  name: z.string().optional(),
  content: z.string().optional(),
  path: z.string(),
  target: z.string().optional(),
});

export const registryItemSchema = z.object({
  name: z.string(),
  description: z.string(),
  files: z.array(registryItemFileSchema).optional(),
});

// File tree functionality
export type FileTree = {
  name: string;
  path?: string;
  children?: FileTree[];
};

export async function createFileTreeForRegistryItemFiles(
  files: Array<{ path: string; target?: string }>
): Promise<FileTree[]> {
  const tree: FileTree[] = [];
  
  for (const file of files) {
    const normalizedPath = file.path.replace(/\\/g, "/");
    const parts = normalizedPath.split("/");
    
    let currentLevel = tree;
    
    parts.forEach((part, index) => {
      const isFile = index === parts.length - 1;
      const existingPath = currentLevel.find((item) => item.name === part);
      
      if (existingPath) {
        if (!isFile) {
          currentLevel = existingPath.children || [];
        }
      } else {
        const newPart: FileTree = {
          name: part,
          path: isFile ? file.target || file.path : undefined,
          children: isFile ? undefined : [],
        };
        
        currentLevel.push(newPart);
        
        if (!isFile) {
          currentLevel = newPart.children || [];
        }
      }
    });
  }
  
  return tree;
}

export async function getRegistryItem(name: string) {
  // This function will need to be implemented based on how you store and retrieve registry items
  console.log("Getting registry item:", name);
  
  // Placeholder implementation
  return {
    name: name,
    description: `${name} component`,
    files: [],
  };
}