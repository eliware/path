import { fileURLToPath } from 'url';
import { dirname as pathDirname, join as pathJoin, relative as pathRelative, resolve as pathResolve } from 'path';

export const getCurrentFilename = (metaOrDir) => {
    if (typeof metaOrDir === 'string') return metaOrDir;
    if (metaOrDir && metaOrDir.url) return fileURLToPath(metaOrDir.url);
    throw new Error('Cannot determine current filename: provide import.meta, __dirname, or run in Node.js environment with __filename.');
};

export const getCurrentDirname = (metaOrDir, dirnameFn = pathDirname) => {
    if (typeof metaOrDir === 'string') return metaOrDir;
    return dirnameFn(getCurrentFilename(metaOrDir));
};

export const path = (metaOrDir, ...segments) => pathJoin(getCurrentDirname(metaOrDir), ...segments);
export const resolvePath = (metaOrDir, ...segments) => pathResolve(getCurrentDirname(metaOrDir), ...segments);
export const relativePath = (metaOrDir, ...segments) => {
    const dirname = getCurrentDirname(metaOrDir);
    return pathRelative(dirname, pathResolve(dirname, ...segments));
};
