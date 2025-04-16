# Documentation Files Paths

This document lists all files related to the documentation system in the project.

## Core Documentation Structure

### App Pages

- `apps/www/app/(app)/docs/layout.tsx` - Layout for all documentation pages
- `apps/www/app/(app)/docs/[[...slug]]/page.tsx` - Dynamic route handler for all doc pages

### Content Files

- `apps/www/content/docs/**.mdx` - All documentation content files in MDX format
- `apps/www/content/docs/index.mdx` - Main documentation landing page
- `apps/www/content/docs/components/*.mdx` - Component documentation
- `apps/www/content/docs/installation/*.mdx` - Installation guides
- `apps/www/content/docs/dark-mode/*.mdx` - Dark mode documentation
- `apps/www/content/docs/registry/*.mdx` - Registry documentation

## Configuration

- `apps/www/config/docs.ts` - Configuration for documentation, including navigation structure
- `apps/www/config/site.ts` - Site configuration including metadata
- `apps/www/contentlayer.config.js` - Contentlayer configuration for processing MDX files

## Components

### Navigation Components

- `apps/www/components/docs-nav.tsx` - Documentation navigation sidebar
- `apps/www/components/pager.tsx` - Navigation between documentation pages
- `apps/www/components/mobile-nav.tsx` - Mobile navigation for docs
- `apps/www/components/main-nav.tsx` - Main navigation bar
- `apps/www/components/command-menu.tsx` - Command menu for navigation

### Content Display Components

- `apps/www/components/mdx-components.tsx` - React components for rendering MDX content
- `apps/www/components/toc.tsx` - Table of contents for documentation pages
- `apps/www/components/callout.tsx` - Callout component used in docs
- `apps/www/components/open-in-v0-cta.tsx` - CTA component for Vercel v0
- `apps/www/components/component-preview.tsx` - Component preview in docs
- `apps/www/components/component-example.tsx` - Component examples in docs
- `apps/www/components/component-source.tsx` - Component source code display
- `apps/www/components/code-block-wrapper.tsx` - Wrapper for code blocks
- `apps/www/components/code-block-command.tsx` - Code block for command examples
- `apps/www/components/code-tabs.tsx` - Tabs for code examples
- `apps/www/components/copy-button.tsx` - Copy button for code blocks
- `apps/www/components/style-wrapper.tsx` - Style wrapper for components

## Utilities

- `apps/www/lib/toc.ts` - Utility for generating table of contents from MDX content
- `apps/www/lib/utils.ts` - General utilities including the `cn` function used throughout the docs
- `apps/www/lib/rehype-component.ts` - Rehype plugin for MDX components
- `apps/www/lib/rehype-npm-command.ts` - Rehype plugin for npm commands
- `apps/www/lib/fonts.ts` - Font configuration for the docs site
- `apps/www/lib/events.ts` - Event handling for analytics
- `apps/www/lib/highlight-code.ts` - Code highlighting utilities

## Hooks

- `apps/www/hooks/use-mounted.ts` - Hook to check if component is mounted
- `apps/www/hooks/use-config.ts` - Hook for configuration
- `apps/www/hooks/use-copy-to-clipboard.ts` - Hook for copy functionality
- `apps/www/hooks/use-media-query.tsx` - Hook for responsive design
- `apps/www/hooks/use-meta-color.ts` - Hook for theme color metadata

## Style Files

- `apps/www/styles/mdx.css` - Styles specific to MDX content
- `apps/www/styles/globals.css` - Global styles for the docs site

## Layout Components

- `apps/www/app/layout.tsx` - Root layout for the entire site
- `apps/www/app/(app)/layout.tsx` - App layout with header and footer
- `apps/www/components/site-header.tsx` - Header component
- `apps/www/components/site-footer.tsx` - Footer component
- `apps/www/components/theme-provider.tsx` - Theme provider for dark/light mode
- `apps/www/components/theme-switcher.tsx` - Theme switch component
- `apps/www/components/mode-switcher.tsx` - Mode switch component (light/dark)

## Build and Package Configurations

### Main Package Scripts

- `package.json` - Contains the main scripts for building and running docs
  - `docs:build`: `pnpm --filter=www build:docs`
  - `www:dev`: `pnpm --filter=www dev`
  - `www:build`: `pnpm --filter=www build`

### Web App Package Scripts

- `apps/www/package.json` - Contains scripts for the docs web application
  - `dev`: `next dev -p 3333`
  - `build:docs`: `contentlayer2 build`
  - `build`: Build with contentlayer and Next.js

## Next.js Configuration

- `apps/www/next.config.mjs` - Next.js configuration including redirects for docs
- `apps/www/tsconfig.json` - TypeScript configuration for the docs site
- `apps/www/tailwind.config.cjs` - Tailwind CSS configuration
- `apps/www/postcss.config.cjs` - PostCSS configuration

## UI Components Used in Docs

- `apps/www/registry/*/ui/*.tsx` - UI components referenced in docs (like Button, Accordion)
- `apps/www/registry/*/examples/*.tsx` - Example components used in docs

## Documentation Guide

- `CONTRIBUTING.md` - Information on how to contribute to the docs
- `README.md` - Project overview including documentation information

## Related Libraries

The docs system uses the following key libraries:

1. **Contentlayer** - For processing MDX content
2. **Next.js** - For the web application
3. **Tailwind CSS** - For styling
4. **MDX** - For content with embedded components
5. **Rehype/Remark** - For Markdown processing

## Other Critical Files

- `apps/www/content/registry/**/*.mdx` - Registry content referenced in docs
- `apps/www/lib/highlighter-theme.json` - Theme for code highlighting
- `apps/www/public/` - Public assets used in docs

This comprehensive list includes all the files and components that make up the docs system. Any changes to the documentation should primarily involve these files. 