import { describe, it, expect } from "vitest";
import { hasKey } from "@src/objects";

describe("hasKey tests", () => {
  const targetObj = { test: 123 };

  it("Should return true for check key in object", () => {
    expect(hasKey("test", targetObj)).toBe(true);
  });

  it("Should return false for check key in object", () => {
    expect(hasKey("fail", targetObj)).toBe(false);
  });

  it("Should return false as passed value (undefined) is not an object", () => {
    const target = undefined;
    const falseObj = target as unknown as object;
    expect(hasKey("fail", falseObj)).toBe(false);
  });

  it("Should return false as passed value ('') is not an object", () => {
    const target = "";
    const falseObj = target as unknown as object;
    expect(hasKey("fail", falseObj)).toBe(false);
  });

  it("Should return false as passed value (123) is not an object", () => {
    const target = 123;
    const falseObj = target as unknown as object;
    expect(hasKey("fail", falseObj)).toBe(false);
  });

  it("Should return false as passed value (123) is not an object", () => {
    const target = false;
    const falseObj = target as unknown as object;
    expect(hasKey("fail", falseObj)).toBe(false);
  });
});
