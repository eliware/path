# Release Notes

## 1.1.7

- Fixed coverage-gap filtering so fully covered files are excluded correctly.

## 1.1.3 — Current changes

- Standardized Node.js 26 CI workflow.
- Normalized Jest coverage and gap-testing scripts.
- Added AgentX artifact ignore rules.
- Updated dependencies and lockfiles.

## Version history

- `1.1.1` — Version 1.1.1 - 12-08-2025.
- `1.1.2` — Version 1.1.2 - 07-01-2026.


## 1.1.4

- Added the standardized Oxlint command.
- Updated package metadata and lockfiles for the latest maintenance pass.
- Synchronized the package with the current Eliware Node.js 26 workflow conventions.

## 1.1.5

- Added `resolvePath()` for resolving paths from an `import.meta` basis.
- Added `relativePath()` for calculating paths relative to the `import.meta` directory.
- Added `fileUrlToPath()` for converting file URLs back to filesystem paths.
- Expanded TypeScript declarations, examples, and documentation.
- Removed legacy CommonJS entrypoints and tests; the package is now ESM-only.
- Added manual GitHub Actions workflow dispatch support.
- Verified with 19 tests, 100% coverage, and clean Oxlint output.

## 1.1.6

- Fixed Windows test failures by replacing POSIX-specific path expectations with platform-aware utilities.
- Updated ESM path tests to use `fileURLToPath()` and `path.join()` for native path separators.
