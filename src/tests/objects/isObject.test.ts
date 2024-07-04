import { isObject } from "@src/objects";

describe("isObject tests", () => {
  it("Should return true for {}", () => {
    expect(isObject({})).toBe(true);
  });

  it("Should return true for { hola: '' }", () => {
    expect(isObject({ hola: "" })).toBe(true);
  });

  it.each([
    { value: "", expected: false },
    { value: 123, expected: false },
    { value: false, expected: false },
    { value: true, expected: false },
    { value: undefined, expected: false },
    { value: null, expected: false },
    { value: NaN, expected: false }
  ])(
    "Should return false if value -> $value is not an object",
    ({ value, expected }) => {
      expect(isObject(value)).toBe(expected);
    }
  );
});
