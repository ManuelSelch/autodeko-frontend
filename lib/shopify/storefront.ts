import type {
  Money,
  Product,
  ProductDetails,
  ProductImage,
  ProductVariant,
} from "./types";

export interface ShopifyConfig {
  storeDomain: string;
  privateToken: string;
  apiVersion: string;
}

interface GraphqlError {
  message: string;
}

interface GraphqlResponse<T> {
  data?: T;
  errors?: GraphqlError[];
}

interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  availableForSale: boolean;
  featuredImage: ProductImage | null;
  priceRange: { minVariantPrice: Money };
  variants: { nodes: ProductVariant[] };
}

interface ShopifyProductDetails extends ShopifyProduct {
  images: { nodes: ProductImage[] };
}

interface ProductsData {
  products: { nodes: ShopifyProduct[] };
}

interface ProductData {
  product: ShopifyProductDetails | null;
}

const PRODUCTS_QUERY = `#graphql
  query Products($first: Int!) {
    products(first: $first, sortKey: CREATED_AT, reverse: true) {
      nodes {
        id
        handle
        title
        description
        availableForSale
        featuredImage {
          url
          altText
          width
          height
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        variants(first: 20) {
          nodes {
            id
            title
            availableForSale
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

const PRODUCT_QUERY = `#graphql
  query Product($handle: String!) {
    product(handle: $handle) {
      id
      handle
      title
      description
      availableForSale
      featuredImage {
        url
        altText
        width
        height
      }
      images(first: 12) {
        nodes {
          url
          altText
          width
          height
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      variants(first: 20) {
        nodes {
          id
          title
          availableForSale
          price {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

function mapProduct(product: ShopifyProduct): Product {
  return {
    id: product.id,
    handle: product.handle,
    title: product.title,
    description: product.description,
    availableForSale: product.availableForSale,
    featuredImage: product.featuredImage,
    price: product.priceRange.minVariantPrice,
    variants: product.variants.nodes,
  };
}

function normalizeStoreDomain(domain: string): string {
  return domain.trim().replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function createStorefrontClient(
  config: ShopifyConfig,
  fetcher: typeof fetch = fetch,
) {
  const domain = normalizeStoreDomain(config.storeDomain);
  const endpoint = `https://${domain}/api/${config.apiVersion}/graphql.json`;

  async function query<T>(document: string, variables: Record<string, unknown>): Promise<T> {
    const response = await fetcher(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Shopify-Storefront-Private-Token": config.privateToken,
      },
      body: JSON.stringify({ query: document, variables }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Shopify Storefront API returned HTTP ${response.status}`);
    }

    const result = (await response.json()) as GraphqlResponse<T>;

    if (result.errors?.length) {
      throw new Error(
        `Shopify Storefront API: ${result.errors.map(({ message }) => message).join(", ")}`,
      );
    }

    if (!result.data) {
      throw new Error("Shopify Storefront API returned no data");
    }

    return result.data;
  }

  return {
    async getProducts(first = 12): Promise<Product[]> {
      const data = await query<ProductsData>(PRODUCTS_QUERY, { first });

      return data.products.nodes.map(mapProduct);
    },

    async getProduct(handle: string): Promise<ProductDetails | null> {
      const data = await query<ProductData>(PRODUCT_QUERY, { handle });

      if (!data.product) {
        return null;
      }

      return {
        ...mapProduct(data.product),
        images: data.product.images.nodes,
      };
    },
  };
}
