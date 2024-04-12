import { getPalindrome } from "./utils";

describe("getPalindrome", () => {
  it("should reverse a common string like 123456", () => {
    expect(getPalindrome("123456")).toBe("654321");
  });
  it("should not reverse ( ", () => {
    expect(getPalindrome("12(3456")).toBe("65(4321");
  });
  it("should not reverse ) ", () => {
    expect(getPalindrome("1234)56")).toBe("6543)21");
  });

  it("should not reverse ( and )", () => {
    expect(getPalindrome("12(34)56")).toBe("65(43)21");
  });
});
