# Registry Directory Handling Guide

The `registry` directory contains UI components that are often referenced in documentation examples. This guide provides strategies for handling the registry while focusing your project on docs.

## Understanding the Registry Dependencies

The registry directory (`apps/www/registry/`) contains:
- UI components (`default/ui`, `new-york/ui`)
- Example components (`default/example`, `new-york/example`)

These components are referenced in three main ways:
1. In documentation MDX files (for examples and demos)
2. In the MDX components renderer
3. In the component registry system

## Options for Handling the Registry

### Option 1: Keep Minimal Registry (Recommended)

This approach maintains docs functionality while removing unnecessary components:

1. Identify components used in docs:
```bash
# Search for imports from registry in MDX files
grep -r "from \"@/registry" apps/www/content/docs
```

2. Create a simplified registry structure:
```
apps/www/registry/
  ├── default/
  │   ├── ui/
  │   │   └── [keep only components used in docs]
  │   └── example/
  │       └── [keep only examples used in docs]
  └── new-york/
      ├── ui/
      │   └── [keep only components used in docs]
      └── example/
          └── [keep only examples used in docs]
```

3. Remove registry build scripts and related configuration

### Option 2: Move Required Components

This approach extracts components from the registry and places them in a dedicated docs-components directory:

1. Create a docs-components directory:
```bash
mkdir -p apps/www/components/docs-ui
```

2. Move essential components from registry to this new directory

3. Update imports in MDX files and components to point to the new location

4. Remove the entire registry directory

### Option 3: Keep Registry with Modifications

Keep the registry but remove the build and distribution aspects:

1. Remove registry build scripts
2. Keep the actual component files
3. Remove all registry-related scrips from package.json
4. Update the contentlayer configuration if needed

## Components Commonly Used in Docs

Based on analysis, these registry components are frequently used in documentation:

- Accordion
- Alert
- Button
- Card
- Code blocks
- Dialog
- Tabs
- Toast
- Typography

## Implementing the Changes

### Step 1: Backup Key Files

Before making changes, back up the registry directory:
```bash
cp -r apps/www/registry apps/www/registry-backup
```

### Step 2: Analyze Usage

Run a comprehensive analysis to find all registry usage:
```bash
# Find registry imports in MDX files
grep -r "from \"@/registry" apps/www/content/docs

# Find registry imports in component files
grep -r "from \"@/registry" apps/www/components
```

### Step 3: Testing

After implementing your chosen strategy:
1. Start the dev server: `pnpm --filter=www dev`
2. Navigate to various docs pages
3. Verify that component examples render correctly
4. Test interactive components to ensure they work

### Step 4: Cleanup

After confirming everything works:
1. Remove any backup files
2. Update package.json to remove registry-related scripts
3. Update any build configurations

## Resolving Common Issues

### Missing Components
If components are missing after changes:
- Check import paths in MDX files
- Ensure components are exported correctly
- Verify the MDX component provider includes all necessary components

### Styling Issues
If components render but look wrong:
- Check if tailwind styles are applied correctly
- Ensure theme providers are still working
- Verify CSS imports are correct

### Build Errors
If you encounter build errors:
- Check for remaining references to removed files
- Update tsconfig.json to reflect new structure
- Verify contentlayer configuration still works with your changes

By following this guide, you can safely handle the registry directory while maintaining a functioning documentation site. 