/* eslint-disable @typescript-eslint/ban-ts-comment */
import { kebabCase } from "@src/strings/kebabCase/kebabCase";

describe("kebabCase", () => {
  it("should return a kebab-cased string", () => {
    expect(kebabCase("Hello World")).toBe("Hello-World");
    expect(kebabCase("helloWorld")).toBe("hello-World");
    expect(kebabCase("hello_world")).toBe("hello-world");
    expect(kebabCase("hello.world")).toBe("hello-world");
  });

  it("should return the received parameter when is not typeof string", () => {
    // @ts-expect-error
    expect(kebabCase({})).toStrictEqual({});
    // @ts-expect-error
    expect(kebabCase([])).toStrictEqual([]);
    // @ts-expect-error
    expect(kebabCase(null)).toStrictEqual(null);
    // @ts-expect-error
    expect(kebabCase()).toBe();
  });
});
