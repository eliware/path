import { jest } from "@jest/globals";
import { dirname as pathDirname, join as pathJoin, resolve as pathResolve } from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { createPathHelpers } from "../src/create-path-helpers.mjs";

const testDir = pathDirname(fileURLToPath(import.meta.url));

const makeHelpers = () => {
  const records = [];
  const logger = { log: jest.fn((record) => records.push(record)) };
  return { helpers: createPathHelpers({ logger }), logger, records };
};

test("createPathHelpers uses the package logger unless a logger is injected", () => {
  expect(createPathHelpers().path(testDir, "file.txt")).toBe(pathJoin(testDir, "file.txt"));

  expect(() => createPathHelpers({ logger: null })).toThrow(
    "logger must provide a log(info) function",
  );
  expect(() => createPathHelpers({ logger: {} })).toThrow(
    "logger must provide a log(info) function",
  );
});

test("path helpers write structured debug records without path values", () => {
  const { helpers, logger, records } = makeHelpers();
  const privatePath = "private-token-value";

  expect(helpers.path(testDir, privatePath)).toBe(pathJoin(testDir, privatePath));
  expect(logger.log).toHaveBeenCalledWith({
    level: "debug",
    message: "Path operation completed",
    operation: "path",
    inputType: "directory",
    segmentCount: 1,
    resultType: "string",
  });
  expect(JSON.stringify(records)).not.toContain(privatePath);
});

test("all helpers use the injected logger and record their operation context", () => {
  const { helpers, records } = makeHelpers();

  expect(helpers.getCurrentFilename(import.meta)).toBe(fileURLToPath(import.meta.url));
  expect(helpers.getCurrentDirname(testDir)).toBe(testDir);
  expect(helpers.getCurrentDirname(import.meta, () => testDir)).toBe(testDir);
  expect(helpers.pathUrl(testDir, "module.mjs")).toBe(
    pathToFileURL(pathJoin(testDir, "module.mjs")).href,
  );
  expect(helpers.resolvePath(testDir, "module.mjs")).toBe(pathResolve(testDir, "module.mjs"));
  expect(helpers.relativePath(testDir, "module.mjs")).toBe("module.mjs");
  expect(helpers.fileUrlToPath(pathToFileURL(pathJoin(testDir, "module.mjs")))).toContain(
    "module.mjs",
  );

  expect(records.map(({ operation }) => operation)).toEqual([
    "getCurrentFilename",
    "getCurrentDirname",
    "getCurrentDirname",
    "pathUrl",
    "resolvePath",
    "relativePath",
    "fileUrlToPath",
  ]);
  expect(records[0]).toMatchObject({ inputType: "import-meta", level: "debug" });
  expect(records[1]).toMatchObject({ inputType: "directory", customDirname: false });
  expect(records[2]).toMatchObject({ inputType: "import-meta", customDirname: true });
  expect(records.at(-1)).toMatchObject({ inputType: "url-object", resultType: "string" });
});

test("failed helpers log safe error context and preserve the original error", () => {
  const { helpers, records } = makeHelpers();
  const privateUrl = "https://private.invalid/token-value";

  expect(() => helpers.getCurrentFilename({})).toThrow("Cannot determine current filename");
  expect(() => helpers.fileUrlToPath(privateUrl)).toThrow();
  expect(() => helpers.fileUrlToPath(42)).toThrow();

  expect(records).toEqual([
    {
      level: "error",
      message: "Path operation failed",
      operation: "getCurrentFilename",
      inputType: "import-meta",
    },
    {
      level: "error",
      message: "Path operation failed",
      operation: "fileUrlToPath",
      inputType: "url-string",
    },
    {
      level: "error",
      message: "Path operation failed",
      operation: "fileUrlToPath",
      inputType: "other",
    },
  ]);
  expect(JSON.stringify(records)).not.toContain("private.invalid");
  expect(JSON.stringify(records)).not.toContain("token-value");
});
