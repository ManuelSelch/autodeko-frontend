import {
  getShopifyStorefront,
  type Product,
  type ProductDetails,
} from "./shopify";

class API {
  async getProducts(): Promise<Product[]> {
    try {
      return await getShopifyStorefront().getProducts();
    } catch (error) {
      console.error("Could not load products from Shopify", error);
      return [];
    }
  }

  async getProduct(handle: string): Promise<ProductDetails | null> {
    try {
      return await getShopifyStorefront().getProduct(handle);
    } catch (error) {
      console.error(`Could not load Shopify product: ${handle}`, error);
      return null;
    }
  }
}

const api = new API();

export default api;
