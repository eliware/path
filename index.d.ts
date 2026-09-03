/**
 * Returns the current filename from import.meta or the supplied directory string.
 * @param metaOrDir import.meta (ESM) or a string directory (e.g. __dirname)
 * @returns The module filename for import.meta, or the unchanged directory string.
 */
export function getCurrentFilename(metaOrDir: ImportMeta | string): string;

/**
 * Returns the current dirname from import.meta or the supplied directory string.
 * @param metaOrDir import.meta (ESM) or a string directory (e.g. __dirname)
 * @param dirnameFn Optional custom dirname function.
 * @returns The directory path, absolute when the input is absolute.
 */
export function getCurrentDirname(
  metaOrDir: ImportMeta | string,
  dirnameFn?: (path: string) => string
): string;

/**
 * Joins the current dirname with provided segments.
 * @param metaOrDir import.meta (ESM) or a string directory (e.g. __dirname)
 * @param segments Path segments to join.
 * @returns A path string using the host platform's native path behavior.
 */
export const path: (
  metaOrDir: ImportMeta | string,
  ...segments: string[]
) => string;

/**
 * Converts a resolved path to a file URL href string for dynamic import compatibility.
 * @param metaOrDir import.meta (ESM) or a string directory (e.g. __dirname)
 * @param segments Path segments to join.
 * @returns File URL href string.
 */
export function pathUrl(metaOrDir: ImportMeta | string, ...segments: string[]): string;

export default path;

/** Resolves segments from the import.meta-derived directory. */
export function resolvePath(metaOrDir: ImportMeta | string, ...segments: string[]): string;

/** Returns a path relative to the import.meta-derived directory. */
export function relativePath(metaOrDir: ImportMeta | string, ...segments: string[]): string;

/** Converts a file URL string or URL object to a filesystem path. */
export function fileUrlToPath(fileUrl: string | URL): string;
