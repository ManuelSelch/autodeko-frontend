import { describe, expect, it } from "vitest";
import { splitProductTitle } from "./split-product-title";

describe("splitProductTitle", () => {
  it("separates the first word from the remaining title", () => {
    expect(splitProductTitle("FERRARI Carbon Keramik Gelb")).toEqual({
      firstWord: "FERRARI",
      remainingTitle: "Carbon Keramik Gelb",
    });
  });

  it("does not create a second line for a single-word title", () => {
    expect(splitProductTitle("Porsche")).toEqual({
      firstWord: "Porsche",
      remainingTitle: "",
    });
  });
});
