const baseUrl = "http://localhost:3030/jsonstore/products";

export default {
  async getAllProducts() {
    const response = await fetch(baseUrl);
    const result = response.json();

    return result;
  },
};
