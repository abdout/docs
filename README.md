# Shadcn/UI Docs Clone

This project is a clone of the [shadcn/ui docs](https://ui.shadcn.com/docs) website using the latest versions of Next.js and React.

## Overview

The goal of this project is to recreate the shadcn/ui documentation website with the latest versions of the underlying technologies. The original site is built using:

- Next.js 15.3.0
- React 19
- Tailwind CSS v4
- ContentLayer for MDX content management

## Getting Started

### Prerequisites

- Node.js (version 18+)
- npm or pnpm

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

The project follows the structure of the original shadcn/ui docs site:

- `/content/docs/` - Documentation content in MDX format
- `/src/app/` - Next.js App Router components
- `/src/components/` - Reusable React components
- `/src/lib/` - Utility functions and helpers
- `/src/styles/` - Global styles and MDX-specific styles

## Implementation Progress

See [compare.md](./compare.md) for a detailed comparison with the original shadcn/ui docs site and the implementation plan.

### Completed Features

- Basic Next.js app setup with ContentLayer
- MDX content processing with rehype plugins
- Core utility functions for styling and content
- Basic components for rendering MDX content
- Navigation structure for documentation
- Documentation layout and page structure
- Basic styling with Tailwind CSS

### In Progress

- Component examples and previews
- Theme support (dark/light mode)
- Additional component documentation

## Adding Content

### Creating Documentation Pages

Add new documentation pages in the `/content/docs/` directory using MDX format:

```mdx
---
title: Your Page Title
description: A brief description of the page.
---

## Your Content

Write your content here using Markdown syntax.
```

### Adding Component Documentation

Component documentation pages should be added to `/content/docs/components/` directory:

```mdx
---
title: Component Name
description: Description of the component.
component: true
---

<ComponentPreview name="component-demo" />

## Introduction

Brief introduction to the component.

## Usage

```tsx
import { Component } from "@/components/ui/component"
```

## Examples

Example usage of the component.
```

## Key Technologies

- [Next.js](https://nextjs.org/) - React framework
- [ContentLayer](https://contentlayer.dev/) - Content management for MDX
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Radix UI](https://www.radix-ui.com/) - Headless UI components
- [MDX](https://mdxjs.com/) - Markdown with JSX for documentation

## Credits

This project is a recreation of the shadcn/ui docs site. All credit for the original design and content goes to [shadcn](https://twitter.com/shadcn).

## License

MIT
