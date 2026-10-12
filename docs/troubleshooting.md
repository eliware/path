# Troubleshooting

Use this guide when a helper returns an unexpected path or throws an error.

## The path starts from the wrong directory

`import.meta` points to the module that passes it to the helper.
Pass `import.meta` from the module that needs the path.
Pass `process.cwd()` when you need the process working directory.
Remember that the package treats every string base as a directory.

## A string base names a file

The package treats the string as a directory.
Pass its parent directory as the base.
Pass the file name as a path segment.

## A path uses unexpected separators

Path helpers use Node.js path rules for the host platform.
Windows paths can contain backslashes.
POSIX paths can contain forward slashes.
Do not compare paths as plain text across platforms.

## A path leaves the base directory

The `..` segment can move above the base.
`resolvePath` can also accept an absolute segment that replaces the base.
Validate untrusted segments before file access.
Read [path safety](operations.md#path-safety) for a containment check.

## A helper throws for `import.meta`

Pass `import.meta` from a native ESM module.
The module must have a usable `file:` URL.
The helper throws when it cannot convert the module URL to a file path.

## `fileUrlToPath` rejects a value

Pass a valid `file:` URL string or a `URL` object.
Do not pass an `http:` or `https:` URL.
Read the [API reference](api.md) for the accepted input types.

## A dynamic import rejects a path

Use `pathUrl` to create the file URL string.
Pass that string to `import()`.
The package creates the URL but does not load the module.

## `dirnameFn` does not run

`dirnameFn` runs only when the base is `ImportMeta`.
A string base already represents a directory.

## More help

Read the [usage guide](usage.md) for setup and examples.
Read the [API reference](api.md) for each helper's behavior.
