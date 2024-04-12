import { getPalindrome } from "./utils";

describe("getPalindrome", () => {
  it("should reverse a common string like 123456", () => {
    expect(getPalindrome("123456")).toBe("654321");
  });
  it.todo("should not reverse ( and )", () => {
    expect(getPalindrome("12(34)56")).toBe("65(43)21");
  });
});
