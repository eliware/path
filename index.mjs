import { fileURLToPath, pathToFileURL } from 'url';
import { dirname as pathDirname, join as pathJoin, relative as pathRelative, resolve as pathResolve } from 'path';

/**
 * Returns the current filename from import.meta, a string, or __filename.
 * @param {any} metaOrDir - import.meta, a string (dirname), or undefined
 * @returns {string} Absolute path to the current file or directory
 */
export const getCurrentFilename = (metaOrDir) => {
    if (typeof metaOrDir === 'string') return metaOrDir;
    if (metaOrDir && metaOrDir.url) return fileURLToPath(metaOrDir.url);
    throw new Error(
        'Cannot determine current filename: provide import.meta, __dirname, or run in Node.js environment with __filename.'
    );
};

/**
 * Returns the current dirname from import.meta, a string, or __dirname.
 * @param {any} metaOrDir - import.meta, a string (dirname), or undefined
 * @param {Function} [dirnameFn=path.dirname] - Optional dirname function
 * @returns {string} Absolute path to the current directory
 */
export const getCurrentDirname = (metaOrDir, dirnameFn = pathDirname) => {
    if (typeof metaOrDir === 'string') return metaOrDir;
    const filename = getCurrentFilename(metaOrDir);
    return dirnameFn(filename);
};

/**
 * Joins the current dirname with additional path segments to produce an absolute path.
 * @param {any} metaOrDir - import.meta, a string (dirname), or undefined
 * @param {...string} segments - Additional path segments to join
 * @returns {string} The absolute path
 */
const path = (metaOrDir, ...segments) => {
    const dir = getCurrentDirname(metaOrDir);
    return pathJoin(dir, ...segments);
};

/**
 * Converts a resolved path to a file URL for dynamic import compatibility.
 * @param {any} metaOrDir - import.meta, a string (dirname), or undefined
 * @param {...string} segments - Additional path segments to join
 * @returns {string} The file URL
 */
export const pathUrl = (metaOrDir, ...segments) => {
    return pathToFileURL(path(metaOrDir, ...segments)).href;
};

/** Resolves segments from the import.meta-derived directory. */
export const resolvePath = (metaOrDir, ...segments) => {
    return pathResolve(getCurrentDirname(metaOrDir), ...segments);
};

/** Returns a path relative to the import.meta-derived directory. */
export const relativePath = (metaOrDir, ...segments) => {
    return pathRelative(getCurrentDirname(metaOrDir), pathResolve(getCurrentDirname(metaOrDir), ...segments));
};

/** Converts a file URL string or URL object to a filesystem path. */
export const fileUrlToPath = (fileUrl) => fileURLToPath(fileUrl);

export default path;
export { path };
