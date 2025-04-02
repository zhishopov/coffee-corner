import request from "../utils/request";


const baseUrl = "http://localhost:3030/data/products";


export const getAllProducts = async () => {
  try {
    const result = await request.get(baseUrl);
    console.log(result);

    if (!result) {
      throw new Error("Invalid response format.");
    }

    if (Array.isArray(result)) {
      return result;
    }

    throw new Error("Unexpected API response format.");
  } catch (error) {
    throw new Error(error.message || "Failed to fetch products");
  }
};


export const getProductById = async (_id) => {
  try {
    const result = await request.get(`${baseUrl}/${_id}`);

    if (!result) {
      throw new Error("Product not found.");
    }

    return result;
  } catch (error) {
    throw new Error(error.message || "Failed to fetch product details");
  }
};