# Release Notes

## 14.0.0 — 2026-10-20

### Breaking changes

The package version changed to 14.0.0 to match the applied convention version.
Dependency ranges that stop at major version 13 do not accept this release.

### Migration

Allow major version 14 in the dependency range before you install this release.

### Changed

Updated `@eliware/test` to 14.0.0 and refreshed locked development packages.
Updated the repository directives and contributor instructions to match v14 conventions.

### Added

Added injectable structured logging for path helper operations with `@eliware/log`.

## 13.0.0 — 2026-10-19

### Breaking changes

The package version is 13.0.0. Dependency ranges that stop at major version 12 do not accept this release.

### Migration

Allow major version 13 in the dependency range before you install this release.

### Added

Added lint, type, dependency audit, and package checks to the Knit deployment.

### Changed

Updated CI and npm publication workflows to use `actions/checkout@v7` and full Git history.
Aligned the npm workflow with the canonical shared workflow and its release tag check.
Updated `@eliware/test` to 13.0.0 and refreshed locked development packages.
Expanded user guides with helper selection and package contents.
Reduced README and AGENTS.md content to convention-required sections and rules.
Updated documentation and repository directives to match current language rules.

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
