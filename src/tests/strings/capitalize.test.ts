import { describe, it, expect } from "vitest";
import { capitalize } from "@src/strings/capitalize";

describe("Capitalize tests", () => {
  it("Should capitalize hoLA", () => {
    expect(capitalize("hoLA")).toBe("Hola");
  });

  it("Should capitalize mundo", () => {
    expect(capitalize("mundo")).toBe("Mundo");
  });

  it("Should return same value if is not string", () => {
    const dummyValue = {};
    const testValue = dummyValue as string;
    expect(capitalize(testValue)).toStrictEqual({});
  });
});
