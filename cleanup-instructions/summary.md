# Docs Project Cleanup Summary

This document provides a summary of the cleanup process to transform the current project into a docs-only project.

## Overview of Changes

We have made the following changes to focus the project on documentation:

1. **Updated configuration files**:
   - Updated `CONTRIBUTING.md` to focus on docs
   - Updated `README.md` to describe the docs project
   - Updated package.json files to remove non-docs dependencies
   - Updated Next.js configuration to focus on docs routes

2. **Created reference documents**:
   - Created `docs-paths.md` with a comprehensive list of docs-related files
   - Created cleanup instructions for removing non-docs code

## Next Steps

To complete the transformation to a docs-only project, follow these steps in order:

### 1. Backup the Project

```bash
# Create a backup copy of the entire project
cp -r /path/to/your/project /path/to/backup/location
```

### 2. Remove Packages Directory

```bash
# Remove the CLI and other tools not needed for docs
rm -rf packages/
```

### 3. Handle the Registry Directory

Follow the approach in `cleanup-instructions/registry-handling.md`. The recommended approach is:

```bash
# Identify components used in docs
grep -r "from \"@/registry" apps/www/content/docs

# Create a minimized registry or move components as described in the guide
```

### 4. Remove Non-Docs Routes and Directories

```bash
# Remove view routes
rm -rf apps/www/app/(view)

# Remove internal routes
rm -rf apps/www/app/(internal)

# Remove examples
rm -rf apps/www/app/(app)/examples

# Remove non-docs page from app route
rm apps/www/app/(app)/page.tsx

# Remove build scripts
rm -rf apps/www/scripts/
```

### 5. Test the Documentation Site

```bash
# Install dependencies if needed
pnpm install

# Start the development server
pnpm --filter=www dev
```

Visit http://localhost:3333/docs and verify:
- All documentation pages load correctly
- Navigation works
- Component examples render properly
- Dark/light mode works

### 6. Final Cleanup

After confirming everything works:

```bash
# Remove any remaining non-docs code
rm -rf apps/www/registry-backup # If you created a backup

# Commit the changes
git add .
git commit -m "docs: transform to docs-only project"
```

## Reference Files

- `docs-paths.md` - List of all docs-related files
- `cleanup-instructions/removal-guide.md` - General guide for removing non-docs code
- `cleanup-instructions/registry-handling.md` - Specific guide for handling the registry

## Summary

By following these steps, you'll transform the project into a focused documentation system that's easier to maintain and extend. The cleanup process preserves all documentation functionality while removing unnecessary code and dependencies. 