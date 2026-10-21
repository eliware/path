import { log as defaultLogger } from "@eliware/log";
import { path, relativePath, resolvePath } from "./current-path.mjs";
import { pathUrl } from "./conversions.mjs";
import { fileUrlToPath } from "./file-url-to-path.mjs";
import { getCurrentDirname, getCurrentFilename } from "./path-base.mjs";

export const createPathHelpers = ({ logger = defaultLogger } = {}) => {
  if (!logger || typeof logger.log !== "function") {
    throw new TypeError("logger must provide a log(info) function");
  }

  const execute = (operation, inputType, context, action) => {
    let result;
    try {
      result = action();
    } catch (error) {
      logger.log({
        level: "error",
        message: "Path operation failed",
        operation,
        inputType,
        ...context,
      });
      throw error;
    }

    logger.log({
      level: "debug",
      message: "Path operation completed",
      operation,
      inputType,
      ...context,
      resultType: typeof result,
    });
    return result;
  };

  const directoryInputType = (metaOrDir) =>
    typeof metaOrDir === "string" ? "directory" : "import-meta";

  return {
    getCurrentFilename: (metaOrDir) =>
      execute("getCurrentFilename", directoryInputType(metaOrDir), {}, () =>
        getCurrentFilename(metaOrDir),
      ),
    getCurrentDirname: (metaOrDir, dirnameFn) =>
      execute(
        "getCurrentDirname",
        directoryInputType(metaOrDir),
        { customDirname: typeof dirnameFn === "function" },
        () => getCurrentDirname(metaOrDir, dirnameFn),
      ),
    path: (metaOrDir, ...segments) =>
      execute("path", directoryInputType(metaOrDir), { segmentCount: segments.length }, () =>
        path(metaOrDir, ...segments),
      ),
    pathUrl: (metaOrDir, ...segments) =>
      execute("pathUrl", directoryInputType(metaOrDir), { segmentCount: segments.length }, () =>
        pathUrl(metaOrDir, ...segments),
      ),
    resolvePath: (metaOrDir, ...segments) =>
      execute("resolvePath", directoryInputType(metaOrDir), { segmentCount: segments.length }, () =>
        resolvePath(metaOrDir, ...segments),
      ),
    relativePath: (metaOrDir, ...segments) =>
      execute(
        "relativePath",
        directoryInputType(metaOrDir),
        { segmentCount: segments.length },
        () => relativePath(metaOrDir, ...segments),
      ),
    fileUrlToPath: (fileUrl) =>
      execute(
        "fileUrlToPath",
        fileUrl instanceof URL
          ? "url-object"
          : typeof fileUrl === "string"
            ? "url-string"
            : "other",
        {},
        () => fileUrlToPath(fileUrl),
      ),
  };
};
