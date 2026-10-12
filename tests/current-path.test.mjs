import { jest } from "@jest/globals";
import {
  path,
  getCurrentFilename,
  getCurrentDirname,
  resolvePath,
  relativePath,
} from "../src/current-path.mjs";
import { fileURLToPath } from "url";
import { dirname as pathDirname, join as pathJoin } from "path";

const testDir = pathDirname(fileURLToPath(import.meta.url));

test("getCurrentFilename resolves import.meta and strings and rejects missing input", () => {
  expect(
    getCurrentFilename(import.meta)
      .replace(/\\/g, "/")
      .endsWith("/current-path.test.mjs"),
  ).toBe(true);
  expect(getCurrentFilename(testDir)).toBe(testDir);
  expect(() => getCurrentFilename()).toThrow("Cannot determine current filename");
});

test("getCurrentDirname supports import.meta, strings, and injected dirname functions", () => {
  expect(getCurrentDirname(import.meta)).toBe(pathDirname(getCurrentFilename(import.meta)));
  expect(getCurrentDirname(testDir)).toBe(testDir);
  const stubFn = jest.fn().mockReturnValue("/fake/dir");
  expect(getCurrentDirname(import.meta, stubFn)).toBe("/fake/dir");
  expect(stubFn).toHaveBeenCalledWith(getCurrentFilename(import.meta));
  expect(getCurrentDirname(testDir, stubFn)).toBe(testDir);
  expect(stubFn).toHaveBeenCalledTimes(1);
});

test("rejects missing and non-file module URLs", () => {
  expect(() => getCurrentFilename({})).toThrow("Cannot determine current filename");
  expect(() => getCurrentFilename({ url: "https://example.com/module.mjs" })).toThrow();
});

test("path preserves default and named exports and handles directories and segments", () => {
  expect(path("")).toBe(".");
  expect(path(import.meta, "index.mjs")).toBe(
    pathJoin(getCurrentDirname(import.meta), "index.mjs"),
  );
  expect(path(testDir, "index.mjs")).toBe(pathJoin(testDir, "index.mjs"));
  expect(path(testDir)).toBe(testDir);
});

test("resolvePath and relativePath resolve from the current directory", () => {
  expect(resolvePath(import.meta, "./child/file.txt")).toBe(
    fileURLToPath(new URL("./child/file.txt", import.meta.url)),
  );
  expect(relativePath(import.meta, "./child/file.txt")).toBe(pathJoin("child", "file.txt"));
  expect(resolvePath(testDir, "..")).toBe(pathDirname(testDir));
  expect(relativePath(testDir, "..")).toBe("..");
});
