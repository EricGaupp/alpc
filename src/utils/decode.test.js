import decode from "./decode";
import encode from "./encode";
describe("decode function", () => {
  it("throws an error on invalid inputs", () => {
    expect(() => decode(null)).toThrow();
    expect(() => decode(undefined)).toThrow();
    expect(() => decode(["asdf"])).toThrow();
    expect(() => decode([34, "34"])).toThrow();
    expect(() => decode([34, 35, 36])).not.toThrow();
  });

  it("returns a string", () => {
    expect(typeof decode([1234])).toBe("string");
  });

  it("decodes a list of integer values correctly", () => {
    expect(decode([16777217])).toBe("A");
    expect(decode([251792692])).toBe("FRED");
    expect(decode([267487694, 125043731])).toBe("tacocat");
  });
});
