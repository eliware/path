import { join as pathJoin, relative as pathRelative, resolve as pathResolve } from "path";
import { getCurrentDirname } from "./path-base.mjs";

export const path = (metaOrDir, ...segments) => pathJoin(getCurrentDirname(metaOrDir), ...segments);
export const resolvePath = (metaOrDir, ...segments) =>
  pathResolve(getCurrentDirname(metaOrDir), ...segments);
export const relativePath = (metaOrDir, ...segments) => {
  const dirname = getCurrentDirname(metaOrDir);
  return pathRelative(dirname, pathResolve(dirname, ...segments));
};
