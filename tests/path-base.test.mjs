import { jest } from "@jest/globals";
import { fileURLToPath } from "url";
import { dirname as pathDirname } from "path";
import { getCurrentFilename, getCurrentDirname } from "../src/path-base.mjs";

const testDir = pathDirname(fileURLToPath(import.meta.url));

test("getCurrentFilename resolves module URLs and preserves directory strings", () => {
  expect(
    getCurrentFilename(import.meta)
      .replace(/\\/g, "/")
      .endsWith("/path-base.test.mjs"),
  ).toBe(true);
  expect(getCurrentFilename(testDir)).toBe(testDir);
});

test("getCurrentFilename rejects missing and non-file module URLs", () => {
  expect(() => getCurrentFilename()).toThrow("Cannot determine current filename");
  expect(() => getCurrentFilename({})).toThrow("Cannot determine current filename");
  expect(() => getCurrentFilename({ url: "https://example.com/module.mjs" })).toThrow();
});

test("getCurrentDirname supports module URLs, directory strings, and injected functions", () => {
  expect(getCurrentDirname(import.meta)).toBe(pathDirname(getCurrentFilename(import.meta)));
  expect(getCurrentDirname(testDir)).toBe(testDir);
  const dirnameFn = jest.fn().mockReturnValue("/fake/dir");
  expect(getCurrentDirname(import.meta, dirnameFn)).toBe("/fake/dir");
  expect(dirnameFn).toHaveBeenCalledWith(getCurrentFilename(import.meta));
  expect(getCurrentDirname(testDir, dirnameFn)).toBe(testDir);
  expect(dirnameFn).toHaveBeenCalledTimes(1);
});
