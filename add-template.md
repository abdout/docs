# Comprehensive Guide: Adding Templates to the Registry

This guide provides step-by-step instructions for adding new templates to the registry system.

## Table of Contents

1. [Template Structure](#template-structure)
2. [Creating Template Files](#creating-template-files)
3. [Registering Your Template](#registering-your-template)
4. [Adding Categories](#adding-categories)
5. [Building the Registry](#building-the-registry)
6. [Testing Your Template](#testing-your-template)
7. [Featuring Your Template](#featuring-your-template)
8. [Troubleshooting](#troubleshooting)

## Template Structure

Each template follows a standard structure in the registry:

```
apps/www/registry/new-york/templates/your-template-name/
├── page.tsx                       # Main page component
├── components/                    # Component directory
    ├── component-1.tsx            # Individual components
    ├── component-2.tsx
    └── ...
```

## Creating Template Files

### 1. Create the Template Directory

Create a new directory for your template:

```
apps/www/registry/new-york/templates/your-template-name/
```

### 2. Create the Main Page Component

Create `page.tsx` in your template directory:

```tsx
// apps/www/registry/new-york/templates/your-template-name/page.tsx
import React from "react"

import { YourComponent } from "./components/your-component"

export default function YourTemplatePage() {
  return (
    <div className="container">
      <YourComponent />
    </div>
  )
}
```

Important notes:
- Use a descriptive name for your page component
- Always use default export for the page component
- Follow the naming convention: `YourNamePage`

### 3. Create Component Files

Create your component files in the `components` directory:

```tsx
// apps/www/registry/new-york/templates/your-template-name/components/your-component.tsx
import React from "react"

import { cn } from "@/registry/new-york/lib/utils"
import { Button } from "@/registry/new-york/ui/button"

/**
 * Main component for your template
 * @component
 */
export function YourComponent() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Your Template Title</h1>
      <p className="text-muted-foreground">
        Description of your template
      </p>
      <Button>Action Button</Button>
    </div>
  )
}
```

Important notes:
- Use relative imports whenever possible: `import { OtherComponent } from "./other-component"`
- For registry components, use `@/registry` paths: `import { Button } from "@/registry/new-york/ui/button"`
- Add JSDoc comments to describe your components
- Export components as named exports (not default exports)

## Registering Your Template

### 1. Add Your Template to the Registry

Add your template to `apps/www/registry/registry-templates.ts`:

```typescript
// apps/www/registry/registry-templates.ts
export const templates: Registry["items"] = [
  // Existing templates...
  
  {
    name: "your-template-name",
    description: "Description of your template that will appear in the UI.",
    type: "registry:template",
    
    // List npm dependencies if any
    dependencies: [
      "package-name", 
      // etc.
    ],
    
    // List registry UI components used
    registryDependencies: [
      "button",
      "card",
      // etc.
    ],
    
    // List all files in your template
    files: [
      {
        path: "templates/your-template-name/page.tsx",
        type: "registry:page",
        target: "app/your-target-path/page.tsx", // Where it should go when installed
      },
      {
        path: "templates/your-template-name/components/your-component.tsx",
        type: "registry:component",
        target: "app/your-target-path/components/your-component.tsx",
      },
      // Add all other component files
    ],
    
    // Categories for navigation/filtering
    categories: ["your-category"],
    
    // Optional metadata
    meta: {
      iframeHeight: "600px", // Control preview height
    },
  },
]
```

## Adding Categories

If you're adding a new category, update `apps/www/registry/registry-categories.ts`:

```typescript
// apps/www/registry/registry-categories.ts
export const registryCategories = [
  // Existing categories...
  
  {
    name: "Your Category", // Display name
    slug: "your-category", // URL slug (must match category in registry-templates.ts)
    hidden: false,         // Whether to show in navigation
  },
]
```

## Building the Registry

After adding your template, build the registry to generate the necessary files:

```bash
# From the root directory
pnpm --filter=www build:registry
```

This command generates the `apps/www/__registry__/index.tsx` file and any other necessary files.

## Testing Your Template

Start the development server to test your template:

```bash
# From the root directory
pnpm --filter=www dev
```

Visit these URLs to test your template:
- `http://localhost:3000/templates` - Main templates page
- `http://localhost:3000/templates/your-category` - Category page
- `http://localhost:3000/templates#your-template-name` - Direct link to your template

## Featuring Your Template

To feature your template on the main templates page, add it to `apps/www/app/(app)/templates/page.tsx`:

```tsx
// apps/www/app/(app)/templates/page.tsx
const FEATURED_templates = [
  // Existing featured templates...
  "your-template-name",
]
```

## Troubleshooting

### Common Issues

1. **Template not appearing in the UI**
   - Make sure you've built the registry with `pnpm --filter=www build:registry`
   - Check that your template is correctly registered in `registry-templates.ts`
   - Verify that the category exists in `registry-categories.ts`

2. **Import errors**
   - Use relative imports for your own components
   - Use `@/registry/new-york/ui/component-name` for registry components

3. **Preview issues**
   - Add proper metadata with `iframeHeight` to control preview size
   - Ensure responsive design works in the preview window

### File Paths Reference

```
apps/www/registry/new-york/templates/        # Templates directory
apps/www/registry/registry-templates.ts      # Template registry
apps/www/registry/registry-categories.ts     # Categories definition
apps/www/__registry__/index.tsx              # Generated registry (don't edit directly)
apps/www/app/(app)/templates/page.tsx        # Featured templates listing
```

For more details, refer to the full [CONTRIBUTING.md](./CONTRIBUTING.md) guide. 