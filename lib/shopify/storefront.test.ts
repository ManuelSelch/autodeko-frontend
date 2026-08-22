import { describe, expect, it, vi } from "vitest";
import { createStorefrontClient } from "./storefront";

const config = {
  storeDomain: "https://autodeko.myshopify.com/",
  privateToken: "private-token",
  apiVersion: "2026-04",
};

describe("Shopify Storefront client", () => {
  it("loads and maps products from Shopify", async () => {
    const fetcher = vi.fn<typeof fetch>(async () =>
      Response.json({
        data: {
          products: {
            nodes: [
              {
                id: "gid://shopify/Product/1",
                handle: "motor-lampe",
                title: "Motor-Lampe",
                description: "Handgefertigte Lampe",
                availableForSale: true,
                featuredImage: {
                  url: "https://cdn.shopify.com/lamp.jpg",
                  altText: "Lampe aus einem Motorteil",
                  width: 1200,
                  height: 1200,
                },
                priceRange: {
                  minVariantPrice: { amount: "129.90", currencyCode: "EUR" },
                },
                variants: {
                  nodes: [
                    {
                      id: "gid://shopify/ProductVariant/1",
                      title: "Default Title",
                      availableForSale: true,
                      price: { amount: "129.90", currencyCode: "EUR" },
                    },
                  ],
                },
              },
            ],
          },
        },
      }),
    );

    const client = createStorefrontClient(config, fetcher);
    const products = await client.getProducts(6);

    expect(fetcher).toHaveBeenCalledOnce();
    expect(fetcher).toHaveBeenCalledWith(
      "https://autodeko.myshopify.com/api/2026-04/graphql.json",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "Content-Type": "application/json",
          "Shopify-Storefront-Private-Token": "private-token",
        }),
      }),
    );
    const requestOptions = fetcher.mock.calls[0]?.[1];
    expect(requestOptions).toBeDefined();
    expect(JSON.parse(requestOptions?.body as string).variables).toEqual({ first: 6 });
    expect(products).toEqual([
      {
        id: "gid://shopify/Product/1",
        handle: "motor-lampe",
        title: "Motor-Lampe",
        description: "Handgefertigte Lampe",
        availableForSale: true,
        featuredImage: {
          url: "https://cdn.shopify.com/lamp.jpg",
          altText: "Lampe aus einem Motorteil",
          width: 1200,
          height: 1200,
        },
        price: { amount: "129.90", currencyCode: "EUR" },
        variants: [
          {
            id: "gid://shopify/ProductVariant/1",
            title: "Default Title",
            availableForSale: true,
            price: { amount: "129.90", currencyCode: "EUR" },
          },
        ],
      },
    ]);
  });

  it("loads a product detail by handle", async () => {
    const fetcher = vi.fn<typeof fetch>(async () =>
      Response.json({
        data: {
          product: {
            id: "gid://shopify/Product/1",
            handle: "motor-lampe",
            title: "Motor-Lampe",
            description: "Handgefertigte Lampe",
            availableForSale: true,
            featuredImage: null,
            images: {
              nodes: [
                {
                  url: "https://cdn.shopify.com/lamp-detail.jpg",
                  altText: "Motor-Lampe im Detail",
                  width: 1400,
                  height: 1600,
                },
              ],
            },
            priceRange: {
              minVariantPrice: { amount: "129.90", currencyCode: "EUR" },
            },
            variants: { nodes: [] },
          },
        },
      }),
    );

    const client = createStorefrontClient(config, fetcher);
    const product = await client.getProduct("motor-lampe");

    const requestOptions = fetcher.mock.calls[0]?.[1];
    expect(JSON.parse(requestOptions?.body as string).variables).toEqual({
      handle: "motor-lampe",
    });
    expect(product?.images).toEqual([
      {
        url: "https://cdn.shopify.com/lamp-detail.jpg",
        altText: "Motor-Lampe im Detail",
        width: 1400,
        height: 1600,
      },
    ]);
  });

  it("returns null when Shopify has no product for the handle", async () => {
    const fetcher = vi.fn<typeof fetch>(async () =>
      Response.json({ data: { product: null } }),
    );

    const client = createStorefrontClient(config, fetcher);

    await expect(client.getProduct("missing-product")).resolves.toBeNull();
  });

  it("reports Storefront GraphQL errors", async () => {
    const fetcher = vi.fn<typeof fetch>(async () =>
      Response.json({ errors: [{ message: "Access denied" }] }),
    );

    const client = createStorefrontClient(config, fetcher);

    await expect(client.getProducts()).rejects.toThrow("Shopify Storefront API: Access denied");
  });
});
