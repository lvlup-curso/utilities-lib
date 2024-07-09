import { isString } from "@src/check";

describe("isString tests", () => {
  it("Should return true for 'string'", () => {
    expect(isString("string")).toBe(true);
  });

  it("Should return true for '123'", () => {
    expect(isString(`${123}`)).toBe(true);
  });

  it.each([
    { value: {}, expected: false },
    { value: [], expected: false },
    { value: { hola: "" }, expected: false },
    { value: [""], expected: false },
    { value: 123, expected: false },
    { value: false, expected: false },
    { value: true, expected: false },
    { value: undefined, expected: false },
    { value: null, expected: false },
    { value: NaN, expected: false }
  ])(
    "Should return false if value -> $value is not a string",
    ({ value, expected }) => {
      expect(isString(value)).toBe(expected);
    }
  );
});
