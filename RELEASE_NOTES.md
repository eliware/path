# Release Notes

## 13.0.0 — 2026-10-17

### Changed

Updated the package version and repository conventions to 13.0.0.
Updated the npm publication workflow and Knit deployment checks.
Updated documentation and agent instructions to match the current language rules.

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
Split module directory handling, path composition, and URL conversion into focused modules.
Kept package-root imports and the public API.
Updated the README, package metadata, examples, CI, and publication workflow for v12 conventions.
Updated `@eliware/test` to 12.0.0 for repository validation.

## 2.4.0 — 2026-09-03

### Changed

Clarified directory-string inputs and injected `dirnameFn` behavior.
Tightened TypeScript declarations to require an explicit directory input.
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

The `test` and `lint` scripts use `@eliware/test`.
The package remains ESM-only.

### Changed

Set the minimum Node.js version to 26.
Added public npm publishing metadata.
Updated CI for Ubuntu and Windows.
Separated validation from tag-based publication.
