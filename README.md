# [![eliware.org](https://eliware.org/logos/brand.png)](https://discord.gg/M6aTR9eTwN)

## @eliware/path [![npm](https://img.shields.io/npm/v/@eliware/path)](https://www.npmjs.com/package/@eliware/path) [![License](https://img.shields.io/github/license/eliware/path)](https://github.com/eliware/path/blob/main/LICENSE) [![CI](https://github.com/eliware/path/actions/workflows/ci.yaml/badge.svg)](https://github.com/eliware/path/actions/workflows/ci.yaml)

Import-meta-based path utilities for modern Node.js ESM applications.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Security](#security)
- [API](#api)
- [Packaging](#packaging)
- [Examples](#examples)
- [Support](#support)
- [Links](#links)
- [License](#license)

## Features

Compose paths from module locations or directory strings. Convert file URLs and log path operations with an injected logger.

## Requirements

Use Node.js 26 or later and native ESM.

## Setup

Install `@eliware/path`:

```bash
npm install @eliware/path
```

## Usage

Pass `import.meta` or a directory path to a helper:

```js
import path, { pathUrl, relativePath, resolvePath } from "@eliware/path";

const filePath = path(import.meta, "config", "app.json");
const fileUrl = pathUrl(import.meta, "module.mjs");
const absolutePath = resolvePath(import.meta, "data", "input.json");
const relative = relativePath(import.meta, "data", "input.json");
```

Read [release notes](RELEASE_NOTES.md) for package changes.

## Development

Read the [specifications index](specs/README.md) for repository requirements.
Read the [documentation index](docs/README.md) for user guides.

## Testing

Run aggregate validation with `npm test`.
Run `npm run lint`, `npm run audit`, `npm run format`, `npm run format:check`, `npm run typecheck`, or `npm run pack` for focused checks.

## Troubleshooting

Read the [troubleshooting guide](docs/troubleshooting.md) for input and URL errors.

## Security

Path segments can move outside the starting directory. Check paths from user input before file access.
Logging records omit path values and results.

## API

Read the [API reference](docs/api.md) for exported functions and types.

## Packaging

The package includes `src/`, `docs/`, `README.md`, `AGENTS.md`, `LICENSE`, `RELEASE_NOTES.md`, `examples/`, `specs/`, and `.env.example`.
Use `MAJOR.MINOR.PATCH` versions and matching `v<version>` tags.
The npm workflow publishes only a matching version tag after validation passes.
Get Eliware Operations approval before publication.
Read the [package guide](docs/architecture.md) for package files.

## Examples

Run an example from the repository root with `node examples/example.mjs`.
Read the [example index](examples/README.md) for all examples.

## Support

For help, questions, or to chat with the author and community, visit:

[![Discord](https://eliware.org/logos/discord_96.png)](https://discord.gg/M6aTR9eTwN)[![eliware.org](https://eliware.org/logos/eliware_96.png)](https://discord.gg/M6aTR9eTwN)

**[eliware.org on Discord](https://discord.gg/M6aTR9eTwN)**

## Links

- [Home Page](https://eliware.org)
- [GitHub Org](https://github.com/eliware)
- [GitHub Repo](https://github.com/eliware/path)
- [Bug Reports](https://github.com/eliware/path/issues)
- [npm](https://www.npmjs.com/package/@eliware/path)
- [Discord](https://discord.gg/M6aTR9eTwN)

## License

[MIT © Eliware](LICENSE)
