import { isString } from "@src/strings";
import { describe, it, expect } from "vitest";

describe("isString tests", () => {
  it("Should return true for 'string'", () => {
    expect(isString("string")).toBe(true);
  });

  it("Should return true for '123'", () => {
    expect(isString(`${123}`)).toBe(true);
  });

  it("Should return false for 123", () => {
    expect(isString(123)).toBe(false);
  });

  it("Should return false for false", () => {
    expect(isString(false)).toBe(false);
  });

  it("Should return false for undefined", () => {
    expect(isString(undefined)).toBe(false);
  });
});
