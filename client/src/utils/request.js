const request = async (method, url, data, options = {}) => {
  try {
    if (method !== "GET") {
      options.method = method;
    }

    const authData = JSON.parse(localStorage.getItem("auth"));
    if (authData?.accessToken) {
      options = {
        ...options,
        headers: {
          "X-Authorization": authData.accessToken,
          ...options.headers,
        },
      };
    }

    if (data) {
      options = {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        body: JSON.stringify(data),
      };
    }

    const response = await fetch(url, options);
    const responseText = await response.text();


    const responseContentType = response.headers.get("Content-Type");
    if (!responseContentType || !responseContentType.includes("application/json")) {
      throw new Error("Invalid response: No JSON content type");
    }

    let result;
    try {
      result = JSON.parse(responseText);
    } catch (error) {
      throw new Error("Failed to parse JSON: " + error.message);
    }

    if (!response.ok) {
      throw new Error(result.message || "Request failed");
    }

    return result;
  } catch (error) {
    console.error("Request error:", error.message);
    throw error;
  }
};

export default {
  get: request.bind(null, "GET"),
  post: request.bind(null, "POST"),
  put: request.bind(null, "PUT"),
  delete: request.bind(null, "DELETE"),
  baseRequest: request,
};
