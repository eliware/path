# Out of scope

The package intentionally does not provide:

- Filesystem reads, writes, directory creation, or permission enforcement.
- Network access, module loading, or dynamic import orchestration.
- Sandboxed path resolution or automatic containment of `..` and absolute
  segments.
- Environment-variable configuration or process-global initialization.
- CommonJS entrypoints.
