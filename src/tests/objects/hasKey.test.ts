import { hasKey } from "@src/objects";

describe("hasKey tests", () => {
  const targetObj = { key1: 123, key2: 123 };

  it("Should return true for check key in object", () => {
    expect(hasKey("key1", targetObj)).toBe(true);
  });

  it("Should return true for check key in object", () => {
    expect(hasKey("key2", targetObj)).toBe(true);
  });

  it("Should return false for check key in object", () => {
    expect(hasKey("fail", targetObj)).toBe(false);
  });

  it.each([
    { value: undefined, expected: false },
    { value: null, expected: false },
    { value: "", expected: false },
    { value: 1, expected: false },
    { value: false, expected: false },
    { value: NaN, expected: false }
  ])(
    "Should return false if value -> $value is not an object",
    ({ value, expected }) => {
      expect(hasKey("fail", value as unknown as object)).toBe(expected);
    }
  );
});
