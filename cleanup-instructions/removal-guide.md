# Non-Docs Code Removal Guide

This guide provides instructions on how to safely remove non-docs-related code from the project while ensuring the documentation system continues to function properly.

## Files and Directories to Remove

You can safely remove the following files and directories as they're not needed for the docs functionality:

### Packages Directory
The entire packages directory can be removed as it contains the CLI tools not needed for docs:
```bash
rm -rf packages/
```

### Non-Docs App Routes
Remove non-docs routes from the Next.js app directory:
```bash
# Keep only the (app)/docs and (app)/og directories
rm -rf apps/www/app/(view)
rm -rf apps/www/app/(internal)
rm apps/www/app/(app)/page.tsx
```

### Registry Directory
The registry directory contains component code not needed for just the docs:
```bash
# Be careful not to delete this until you've verified docs work without it
# Some UI components in the registry might be referenced in the docs
# Consider a phased approach
rm -rf apps/www/registry/
```

### Scripts Directory
Build scripts for the registry:
```bash
rm -rf apps/www/scripts/
```

### Examples and Tasks Directories
```bash
rm -rf apps/www/app/(app)/examples/
```

## Files to Update

These files have already been updated to focus only on docs:
1. `package.json` - Root package file
2. `apps/www/package.json` - www package file
3. `CONTRIBUTING.md` - Contributing guide
4. `README.md` - Project readme
5. `apps/www/next.config.mjs` - Next.js configuration

## Approach for Removing Code

To ensure the docs continue to function, follow this phased approach:

1. **Make a backup of the entire project** before starting
2. Use the `docs-paths.md` file as your reference for what to keep
3. Start the docs development server: `pnpm --filter=www dev`
4. Remove non-critical directories first (packages, scripts)
5. Test that docs still works at `http://localhost:3333/docs`
6. Remove non-docs app routes
7. Test again
8. Carefully remove the registry directory in a controlled manner
9. Final testing to ensure all docs pages load properly

## Caution Areas

The following areas require special attention:

1. **UI Components**: The docs may reference UI components in the registry. You might need to preserve some of these components or create simplified versions.

2. **MDX Components**: Ensure all components referenced in MDX files are still available.

3. **Registry References**: Some utilities or hooks might depend on the registry. Check for these dependencies before removal.

## Verification After Cleanup

After removing non-docs code, verify the following:

1. All docs pages load without errors
2. Code examples display correctly
3. Navigation works properly
4. Dark/light mode switching works
5. Search functionality works

If you encounter issues, refer to the `docs-paths.md` file to ensure you haven't removed a required file or component.

## Additional Cleanup Steps (Optional)

After confirming everything works, you can:

1. Update TypeScript types to remove references to removed code
2. Clean up unused dependencies in package.json files
3. Update build configurations to focus only on docs

Following this guide will help you safely remove non-docs code while maintaining a fully functional documentation system. 