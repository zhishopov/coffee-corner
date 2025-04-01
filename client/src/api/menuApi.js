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
    const response = await request.get(`${baseUrl}/${id}`);

    const contentType = response.headers["content-type"];
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Invalid response format: No JSON content type.");
    }

    if (!response || typeof response !== "object") {
      throw new Error("Invalid response format.");
    }

    return response;
  } catch (error) {
    throw new Error(error.message || "Failed to fetch product details");
  }
};
