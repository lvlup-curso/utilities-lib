import { arraylable } from "@src/arrays";

describe("Arraylable tests", () => {
  it("Should return same array for [1, 2, 3]", () => {
    const arr = [1, 2, 3];
    expect(arraylable(arr)).toStrictEqual(arr);
  });

  it("Should return same value for []", () => {
    const arr: unknown[] = [];
    expect(arraylable(arr)).toStrictEqual(arr);
  });

  it.each([
    { value: {}, expected: [] },
    { value: { hola: "" }, expected: [] },
    { value: "", expected: [] },
    { value: 123, expected: [] },
    { value: false, expected: [] },
    { value: true, expected: [] },
    { value: undefined, expected: [] },
    { value: null, expected: [] },
    { value: NaN, expected: [] }
  ])(
    "Should return [] if value -> $value is not an array",
    ({ value, expected }) => {
      expect(arraylable(value)).toStrictEqual(expected);
    }
  );
});
