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

  it.each([
    { value: undefined, expected: undefined },
    { value: null, expected: null },
    { value: {}, expected: {} },
    { value: { hola: "" }, expected: { hola: "" } },
    { value: [], expected: [] },
    { value: [1, 2, 3], expected: [1, 2, 3] },
    { value: true, expected: true },
    { value: false, expected: false },
    { value: 123, expected: 123 },
    { value: NaN, expected: NaN },
    { value: new Date(), expected: new Date() }
  ])(
    "Should return same value if value -> $value is not a string",
    ({ value, expected }) => {
      expect(capitalize(value as unknown as string)).toStrictEqual(expected);
    }
  );
});
