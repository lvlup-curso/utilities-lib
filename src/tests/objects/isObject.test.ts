import { isObject } from "@src/objects";
import { describe, it, expect } from "vitest";

describe("isObject tests", () => {
  it("Should return true for {}", () => {
    expect(isObject({})).toBe(true);
  });

  it("Should return true for { hola: '' }", () => {
    expect(isObject({ hola: "" })).toBe(true);
  });

  it("Should return false for ''", () => {
    expect(isObject("")).toBe(false);
  });
  it("Should return false for 123", () => {
    expect(isObject(123)).toBe(false);
  });
  it("Should return false for false", () => {
    expect(isObject(false)).toBe(false);
  });
  it("Should return false for undefined", () => {
    expect(isObject(undefined)).toBe(false);
  });
});
