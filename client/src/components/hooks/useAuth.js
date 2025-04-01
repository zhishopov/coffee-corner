import { useCallback, useContext, useMemo } from "react";

import { UserContext } from "../../contexts/UserContext";
import request from "../../utils/request";

export default function useAuth() {
  const { accessToken, ...authData } = useContext(UserContext);

  const requestWrapper = useCallback(
    async (method, url, data, options = {}) => {
      try {
        const authOptions = {
          ...options,
          headers: {
            ...(accessToken && { "X-Authorization": accessToken }),
            ...options.headers,
          },
        };

        const response = await request.baseRequest(
          method,
          url,
          data,
          accessToken ? authOptions : options
        );

        return response;
      } catch (error) {
        console.error(`Error in ${method} request to ${url}:`, error);
        throw error;
      }
    },
    [accessToken]
  );

  const requestObject = useMemo(
    () => ({
      get: requestWrapper.bind(null, "GET"),
      post: requestWrapper.bind(null, "POST"),
      put: requestWrapper.bind(null, "PUT"),
      delete: requestWrapper.bind(null, "DELETE"),
    }),
    [requestWrapper]
  );

  return {
    ...authData,
    accessToken,
    userId: authData._id,
    isAuthenticated: !!accessToken,
    request: requestObject,
  };
}
