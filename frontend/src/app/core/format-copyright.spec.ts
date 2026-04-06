import { formatCopyrightYear } from "./format-copyright";

describe("formatCopyrightYear", () => {
  it("formats a year", () => {
    expect(formatCopyrightYear(2026)).toBe("© 2026");
  });
});
