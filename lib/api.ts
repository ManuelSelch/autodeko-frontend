import cockpit from "./cockpit";

class API {
    async getProducts() {
        try {
            return await cockpit.getItems("products")
        } catch {
            return []
        }
    }
}

export default new API();