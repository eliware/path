# Operations

`@eliware/path` is a pure path-composition library. It performs no filesystem
writes, network requests, or import-time initialization.

## Configuration

No environment variables or runtime configuration are required. The package
supports Node.js 26 or newer and native ESM.

## Safety

Path helpers use native Node.js path semantics. Absolute segments and `..`
segments can escape a supplied base. Validate untrusted segments and enforce
application-specific permissions before using the resulting path for file
access.

## Validation

Run the repository gates from the root directory:

```text
npm test
npm run lint
npm run typecheck
npm audit --omit=dev --audit-level=moderate
npm run pack
```
