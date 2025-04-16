# Contributing to Docs

Thanks for your interest in contributing to our documentation site. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

## About this repository

This repository is a monorepo focused on documentation.

- We use [pnpm](https://pnpm.io) and [`workspaces`](https://pnpm.io/workspaces) for development.
- We use [Turborepo](https://turbo.build/repo) as our build system.
- We use [Next.js](https://nextjs.org) for the documentation website.
- We use [Contentlayer](https://contentlayer.dev) for processing MDX content.

## Structure

This repository is structured as follows:

```
apps
└── www
    ├── app
    │   └── (app)
    │       └── docs
    ├── components
    ├── content
    │   └── docs
    ├── hooks
    ├── lib
    ├── styles
    └── config
```

| Path                    | Description                                 |
|-------------------------|---------------------------------------------|
| `apps/www/app`          | The Next.js application for the website.    |
| `apps/www/components`   | The React components for the website.       |
| `apps/www/content/docs` | The documentation content in MDX format.    |
| `apps/www/hooks`        | React hooks used in the docs components.    |
| `apps/www/lib`          | Utilities and helpers for the docs.         |
| `apps/www/styles`       | CSS styles for the documentation.           |
| `apps/www/config`       | Configuration files for the docs.           |

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```bash
git clone https://github.com/your-username/docs.git
```

### Navigate to project directory

```bash
cd docs
```

### Create a new Branch

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
pnpm install
```

### Run the documentation site

To run the documentation site locally:

```bash
pnpm --filter=www dev
```

This will start the development server on port 3333. You can access the documentation site at http://localhost:3333/docs.

## Documentation

The documentation is written using [MDX](https://mdxjs.com). You can find the documentation files in the `apps/www/content/docs` directory.

To build the docs content only:

```bash
pnpm --filter=www build:docs
```

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `docs(content): update installation instructions`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).
