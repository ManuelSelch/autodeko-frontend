import { describe, expect, it } from "vitest";
import {
  buildProductInquiryHref,
  parseProductHandle,
} from "./product-inquiry";

describe("product inquiry context", () => {
  it("builds a contact link containing the product handle", () => {
    expect(buildProductInquiryHref("ferrari-carbon-keramik-gelb")).toBe(
      "/contact?product=ferrari-carbon-keramik-gelb",
    );
  });

  it("accepts Shopify-style handles from contact search parameters", () => {
    expect(parseProductHandle("ferrari-carbon-keramik-gelb")).toBe(
      "ferrari-carbon-keramik-gelb",
    );
  });

  it("rejects missing, repeated, and malformed product parameters", () => {
    expect(parseProductHandle(undefined)).toBeNull();
    expect(parseProductHandle(["first", "second"])).toBeNull();
    expect(parseProductHandle("../unsafe")).toBeNull();
  });
});
