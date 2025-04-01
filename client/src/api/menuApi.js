import request from "../utils/request";

const baseUrl = "http://localhost:3030/jsonstore/products";

export const getAllProducts = async () => {
  try {
    const result = await request.get(baseUrl);

    if (!result || typeof result !== "object") {
      throw new Error("Invalid response format.");
    }

    return Object.values(result);
  } catch (error) {
    throw new Error(error.message || "Failed to fetch products");
  }
};
