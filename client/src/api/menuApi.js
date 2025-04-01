import request from "../utils/request";

const baseUrl = "http://localhost:3030/jsonstore/products";

export const getAllProducts = async () => {
  try {
    const result = await request.get(baseUrl);
    if (!result || !result.products) {
      throw new Error("Invalid response format.");
    }

    return result.products; // Return the array of products
  } catch (error) {
    throw new Error(error.message || "Failed to fetch products");
  }
};

export const getProductById = async (_id) => {
  try {
    const result = await request.get(baseUrl);
    if (!result || !result.products) {
      throw new Error("Invalid response format.");
    }

    // Find the product by ID
    const product = result.products.find(
      (product) => product._id.toString() === _id.toString()
    );

    if (!product) {
      throw new Error("Product not found.");
    }

    return product;
  } catch (error) {
    throw new Error(error.message || "Failed to fetch product details");
  }
};
