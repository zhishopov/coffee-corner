import { useContext } from "react";
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

  const logout = async () => {
    if (!authData || !authData.accessToken) {
      console.warn("No access token found. User is already logged out.");
      userLogoutHandler();
      return;
    }

    try {
      await request.get(`${baseUrl}/logout`, null, {
        headers: { "X-Authorization": authData.accessToken },
      });
    } catch (error) {
      console.error("Logout failed:", error.message);
    } finally {
      userLogoutHandler();
    }
  };

  return { logout };
};
