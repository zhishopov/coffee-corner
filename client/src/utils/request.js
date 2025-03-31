const request = async (method, url, data, options = {}) => {
  if (method !== "GET") {
    options.method = method;
  }

  // const authData = JSON.parse(localStorage.getItem('auth'));

  // if (authData.accessToken) {
  //     options = {
  //         ...options,
  //         headers: {
  //             'X-Authorization': authData.accessToken,
  //             ...options.headers,
  //         },
  //     }
  // }

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

  const responseContentType = response.headers.get("Content-Type");
  if (!responseContentType) {
    return;
  }

  if (!response.ok) {
    const result = await response.json();

    throw result;
  }

  const result = await response.json();

  return result;
};

export default {
  get: request.bind(null, "GET"),
  post: request.bind(null, "POST"),
  put: request.bind(null, "PUT"),
  delete: request.bind(null, "DELETE"),
  baseRequest: request,
};
