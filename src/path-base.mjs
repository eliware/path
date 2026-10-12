import { fileURLToPath } from "url";
import { dirname as pathDirname } from "path";

export const getCurrentFilename = (metaOrDir) => {
  if (typeof metaOrDir === "string") return metaOrDir;
  if (metaOrDir && metaOrDir.url) return fileURLToPath(metaOrDir.url);
  throw new Error(
    "Cannot determine current filename: provide import.meta, __dirname, or run in Node.js environment with __filename.",
  );
};

export const getCurrentDirname = (metaOrDir, dirnameFn = pathDirname) => {
  if (typeof metaOrDir === "string") return metaOrDir;
  return dirnameFn(getCurrentFilename(metaOrDir));
};
