import { print } from "@src/index";

it("print", () => {
  expect(print("Test 1")).toBe("Test 1");
  expect(print({})).toStrictEqual({});
  expect(print(null)).toBe(null);
});
