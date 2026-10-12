# Release Notes

## 12.0.0 — 2026-10-12

### Breaking changes

The package version changed from 2.4.0 to 12.0.0. This major version matches the v12 convention set.

### Migration

Update dependency ranges that target major version 2 before you install version 12.

### Added

Added usage, API, safety, troubleshooting, and package structure guides.
Added repository specifications and indexes for documentation and examples.

### Changed

Moved runtime modules and TypeScript declarations under `src/`.
Split module base handling, path composition, and URL conversion into focused modules.
Kept package-root imports and the public API.
Updated the README, package metadata, examples, CI, and publication workflow for v12 conventions.
Updated `@eliware/test` to 12.0.0 for repository validation.

## 2.4.0 — 2026-09-03

### Changed

Clarified directory-string inputs and injected `dirnameFn` behavior.
Tightened TypeScript declarations to require an explicit base.
Expanded invalid-base and native traversal coverage.
Updated `@eliware/test` to 6.0.1 and scoped coverage to implementation modules.

## 2.1.0 — 2026-09-02

### Changed

Split current-path and URL conversion code into focused modules.
Split tests to mirror source modules and test the full root API.
Updated the shared `@eliware/test` harness to 2.3.1.

### Fixed

Clarified directory-string and injected `dirnameFn` behavior.
Expanded checks for invalid bases and native traversal.

## 2.0.0 — 2026-08-25

### Breaking changes

The `test` and `lint` scripts now use `@eliware/test`.
The package remains ESM-only.

### Changed

Set the minimum Node.js version to 26.
Added public npm publishing metadata.
Updated CI for Ubuntu and Windows.
Separated validation from tag-based publication.

## 1.1.8 — 2026-08-07

### Changed

Aligned the repository layout, package metadata, validation, CI, documentation, and package contents.

### Added

Added TypeScript declaration checks and package dry-run validation.
Moved tests and examples into standard directories.

## 1.1.7 — 2026-08-07

### Fixed

Fixed coverage-gap filtering for fully covered files.

## 1.1.6 — 2026-08-06

### Fixed

Fixed Windows test failures with platform-aware path expectations and ESM URL utilities.

## 1.1.5 — 2026-08-06

### Added

Added `resolvePath()`, `relativePath()`, and `fileUrlToPath()`.
Expanded TypeScript declarations, examples, tests, and documentation.

### Changed

Removed CommonJS entrypoints and added manual workflow dispatch support.

## 1.1.4 — 2026-08-06

### Changed

Added the shared lint command and Node.js 26 maintenance updates.

## 1.1.3 — 2026-08-06

### Changed

Standardized Node.js 26 CI, coverage scripts, ignore rules, dependencies, and lockfiles.

## 1.1.2 — 2026-07-01

### Changed

Recorded the 1.1.2 package release.

## 1.1.1 — 2025-12-08

### Added

Documented the initial package release.
