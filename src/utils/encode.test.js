import encode from "./encode";

describe("encode function", () => {
  it("throws an error on invalid input", () => {
    expect(() => encode(null)).toThrow();
    expect(() => encode(undefined)).toThrow();
    expect(() => encode(false)).toThrow();
    expect(() => encode("")).toThrow();
  });

  it("returns an array of decimal integers", () => {
    expect(Array.isArray(encode("A"))).toBe(true);
    expect(encode("A").every((value) => typeof value === "number")).toBe(true);
    expect(Array.isArray(encode("egad, a base tone denotes a bad age"))).toBe(
      true
    );
    expect(
      encode("egad, a base tone denotes a bad age").every(
        (value) => typeof value === "number"
      )
    );
  });

  it("produces a single decimal value for strings with 4 characters or less", () => {
    expect(encode("A").length).toBe(1);
    expect(typeof encode("A")[0]).toBe("number");
    expect(encode("FRED").length).toBe(1);
    expect(typeof encode("FRED")[0]).toBe("number");
  });

  it("encodes strings with 4 characters or less correctly", () => {
    expect(encode("A")).toEqual([16777217]);
    expect(encode("FRED")).toEqual([251792692]);
  });

  it("produces more than 1 decimal value for strings longer than 4 characters", () => {
    expect(encode("tacocat").length).toBeGreaterThan(1);
  });

  it("encodes strings with more than 4 characters correctly", () => {
    expect(encode("tacocat")).toEqual([267487694, 125043731]);
    expect(encode("never odd or even")).toEqual([
      267657050,
      233917524,
      234374596,
      250875466,
      17830160,
    ]);
    expect(encode("lager, sir, is regal")).toEqual([
      267394382,
      167322264,
      66212897,
      200937635,
      267422503,
    ]);
    expect(encode("go hang a salami, I'm a lasagna hog")).toEqual([
      200319795,
      133178981,
      234094669,
      267441422,
      78666124,
      99619077,
      267653454,
      133178165,
      124794470,
    ]);
    expect(encode("egad, a base tone denotes a bad age")).toEqual([
      267389735,
      82841860,
      267651166,
      250793668,
      233835785,
      267665210,
      99680277,
      133170194,
      124782119,
    ]);
  });
});
