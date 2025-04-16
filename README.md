# Documentation Site

This project contains a documentation site built with Next.js, Contentlayer, and TailwindCSS.

## Features

- MDX-based documentation
- Full-text search
- Dark mode support
- Mobile-responsive design
- Code syntax highlighting

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9+

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/docs.git
cd docs
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm --filter=www dev
```

4. Open your browser and visit `http://localhost:3333/docs`.

## Project Structure

The project is structured as a monorepo using pnpm workspaces:

```
apps/
  www/           # Documentation website
    app/         # Next.js app directory
    components/  # React components
    content/     # Documentation content in MDX
    hooks/       # React hooks
    lib/         # Utilities and helpers
    styles/      # Global styles
    config/      # Configuration files
```

## Content Management

Documentation content is written in MDX and stored in the `apps/www/content/docs` directory. Contentlayer is used to process MDX files and make them available as data in the Next.js application.

For a detailed list of all documentation-related files, see the [docs-paths.md](docs-paths.md) file.

## Contributing

Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for information on how to contribute to this project.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
