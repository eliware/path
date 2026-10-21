# Operations and safety

This guide describes runtime behavior, platform rules, and path safety.

## Runtime support

Use Node.js 26 or later.
Use the package from native ESM.
The package uses `@eliware/log` to write structured operation records.
The package does not read environment variables or require runtime settings.

## Runtime behavior

All helpers run synchronously.
They compose paths or convert file URLs.
Path composition does not read or write files.
Path composition does not use the network.
The package creates its default logger when an application imports it.
The `createPathHelpers()` factory sends operation records to its configured logger.

## Platform path rules

Path results follow the host platform's Node.js path rules.
Windows and POSIX systems can use different path separators.
Use `path` to combine segments.
Use `resolvePath` to create an absolute path.
Use `relativePath` to return a path from the starting directory to a target.
Use `pathUrl` when an API needs a file URL.

## Path safety

The helpers do not control access to a directory.
The `..` segment can move above the starting directory.
An absolute segment can replace the starting directory in `resolvePath`.
Check every path that comes from user input before file access.
The operation records omit path values, results, and error messages.
Custom transports can add data, so inspect their output before you store it.

Use a trusted root and check the resolved target:

```js
import { isAbsolute, relative, resolve, sep } from "node:path";

function resolveInside(root, input) {
  const absoluteRoot = resolve(root);
  const target = resolve(absoluteRoot, input);
  const fromRoot = relative(absoluteRoot, target);
  const escapes = fromRoot === ".." || fromRoot.startsWith(`..${sep}`) || isAbsolute(fromRoot);

  if (escapes) throw new Error("Path is outside the allowed directory.");
  return target;
}
```

This check blocks lexical paths above the root.
It does not check symbolic links.
Apply your file-system access policy after this check.

## File URL safety

Pass a valid `file:` URL to `fileUrlToPath`.
Node.js rejects unsupported URLs.
Use URL values from user input as untrusted data.
