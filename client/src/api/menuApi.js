import request from "../utils/request";

const baseUrl = "http://localhost:3030/jsonstore/products";

export const getAllProducts = async () => {
  try {
    const result = await request.get(baseUrl);

    if (!result || !result.products) {
      throw new Error("Invalid response format.");
    }

    return result.products;
  } catch (error) {
    throw new Error(error.message || "Failed to fetch products");
  }
};

export const getProductById = async (id) => {
  try {
    const result = await request.get(`${baseUrl}/${id}`);

    if (!result || typeof result !== "object") {
      throw new Error("Invalid response format.");
    }

    return result; // Return the product object
  } catch (error) {
    throw new Error(error.message || "Failed to fetch product details");
  }
};
