import { useEffect, useContext } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";

const baseUrl = "http://localhost:3030/users";

export const useLogin = () => {
  const login = async (email, password) => {
    try {
      return await request.post(`${baseUrl}/login`, { email, password });
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
  const { accessToken, userLogoutHandler } = useContext(UserContext);

  useEffect(() => {
    if (!accessToken) return;

    const options = {
      headers: { "X-Authorization": accessToken },
    };

    request
      .get(`${baseUrl}/logout`, null, options)
      .catch((error) => console.error("Logout failed:", error.message))
      .finally(userLogoutHandler);
  }, [accessToken, userLogoutHandler]);

  return { isLoggedOut: !accessToken };
};
