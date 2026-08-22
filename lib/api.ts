import { getShopifyStorefront, type Product } from "./shopify";

class API {
  async getProducts(): Promise<Product[]> {
    try {
      return await getShopifyStorefront().getProducts();
    } catch (error) {
      console.error("Could not load products from Shopify", error);
      return [];
    }
  }
}

const api = new API();

export default api;
