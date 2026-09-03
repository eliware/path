# Release Notes

## 2.1.0 — September 2, 2026

- Split the implementation into focused current-path and URL-conversion
  modules while preserving the root public entrypoint and API.
- Split the test suite into matching module tests and added explicit coverage
  for the complete root export surface.
- Updated the shared `@eliware/test` development harness to `2.3.1`.
- Validation: tests and lint pass with 100×4 coverage and zero warnings;
  typecheck, production audit, package validation, and API smoke test pass.
- Clarified directory-string and injected-`dirnameFn` semantics and expanded
  edge-case coverage for invalid bases and native traversal behavior.

## 2.0.0 — August 25, 2026

- Adopted the shared `@eliware/test` harness for testing and linting with
  strict 100×4 coverage and removed direct Jest/Oxlint dependencies.
- Updated package metadata with Node.js `>=26` support, public publishing
  configuration, and the release notes package allowlist.
- Modernized CI validation for Ubuntu and Windows and separated validation
  from tag-only publishing.
- Breaking: the standard `test` and `lint` scripts now delegate to
  `@eliware/test`; the package remains ESM-only.

## 1.1.8 — August 7, 2026

- Aligned repository structure, package metadata, validation scripts, CI, documentation, and package contents with Eliware library conventions.
- Added TypeScript declaration checking and standardized package dry-run validation.
- Moved tests and examples into convention-compliant directories.
- Verification: tests, 100% coverage, gap checks, lint, typecheck, pack, smoke test, and production audit pass.

## 1.1.7

- Fixed coverage-gap filtering so fully covered files are excluded correctly.
- Verification: tests pass with 100% coverage and lint passes.

## 1.1.6

- Fixed Windows test failures with platform-aware path expectations and ESM URL utilities.

## 1.1.5

- Added `resolvePath()`, `relativePath()`, and `fileUrlToPath()`.
- Expanded TypeScript declarations, examples, documentation, and tests.
- Removed legacy CommonJS entrypoints and added manual workflow dispatch support.
- Verification: 19 tests pass with 100% coverage and clean linting.

## 1.1.4

- Added the standardized Oxlint command and Node.js 26 maintenance updates.

## 1.1.3

- Standardized Node.js 26 CI, coverage scripts, AgentX ignore rules, dependencies, and lockfiles.

## 1.1.2

- Version 1.1.2 release, July 1, 2026.

## 1.1.1

- Initial documented release, December 8, 2025.
