/* eslint-disable @typescript-eslint/ban-ts-comment */
import { deburr } from "@src/strings/deburr/deburr";

describe("deburr", () => {
  test("should remove diacritics from string", () => {
    expect(deburr("déjà vu")).toBe("deja vu");
    expect(deburr("Hola, cómo estás?")).toBe("Hola, como estas?");
    expect(deburr("canción")).toBe("cancion");
    expect(deburr("áéíóú")).toBe("aeiou");
    expect(deburr("àèìòù")).toBe("aeiou");
    expect(deburr("äëïöü")).toBe("aeiou");
    expect(deburr("âêîôû")).toBe("aeiou");
    expect(deburr("ãñõ")).toBe("ano");
    expect(deburr("ç")).toBe("c");
    expect(deburr("å")).toBe("a");
    expect(deburr("ý")).toBe("y");
    expect(deburr("ÿ")).toBe("y");
    expect(deburr("ÁÉÍÓÚ")).toBe("AEIOU");
    expect(deburr("ÀÈÌÒÙ")).toBe("AEIOU");
    expect(deburr("ÄËÏÖÜ")).toBe("AEIOU");
    expect(deburr("ÂÊÎÔÛ")).toBe("AEIOU");
  });

  it("should return the received parameter when is not typeof string", () => {
    // @ts-expect-error
    expect(deburr({})).toStrictEqual({});
    // @ts-expect-error
    expect(deburr([])).toStrictEqual([]);
    // @ts-expect-error
    expect(deburr(null)).toStrictEqual(null);
    // @ts-expect-error
    expect(deburr()).toBe();
  });
});
