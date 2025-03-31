import { useEffect, useContext } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";

const baseUrl = "http://localhost:3030/users";

export const useLogin = () => {
  const { userLoginHandler } = useContext(UserContext);

  const login = async (email, password) => {
    try {
      const response = await request.post(`${baseUrl}/login`, {
        email,
        password,
      });

      if (response && response.accessToken) {
        userLoginHandler(response);
      }

      return response;
    } catch (error) {
      console.error("Login failed:", error.message);
      throw new Error("Login failed. Please check your credentials.");
    }
  };

  return { login };
};

export const useRegister = () => {
  const register = async (email, password) => {
    try {
      return await request.post(`${baseUrl}/register`, { email, password });
    } catch (error) {
      console.error("Registration failed:", error.message);
      throw new Error("Registration failed. Please try again.");
    }
  };

  return { register };
};

export const useLogout = () => {
  const { authData, userLogoutHandler } = useContext(UserContext);

  useEffect(() => {
    if (!authData?.accessToken) return;

    const options = {
      headers: { "X-Authorization": authData.accessToken },
    };

    request
      .get(`${baseUrl}/logout`, null, options)
      .catch((error) => console.error("Logout failed:", error.message))
      .finally(userLogoutHandler);
  }, [authData, userLogoutHandler]);

  return { isLoggedOut: !authData };
};
