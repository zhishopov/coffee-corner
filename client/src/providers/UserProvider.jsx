import { useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

export default function UserProvider({ children }) {
  const [authData, setAuthData] = useState(() => {
    try {
      const storedUser = localStorage.getItem("auth");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing auth data:", error);
      return null;
    }
  });

  useEffect(() => {
    if (authData) {
      localStorage.setItem("auth", JSON.stringify(authData));
    } else {
      localStorage.removeItem("auth");
    }
  }, [authData]);

  const userLoginHandler = (user) => {
    console.log("Logging in user:", user);
    setAuthData(user); // Store user data in state
  };

  const userLogoutHandler = () => {
    console.log("Logging out user");
    setAuthData(null); // Clear user data
  };

  return (
    <UserContext.Provider
      value={{ authData, userLoginHandler, userLogoutHandler }}
    >
      {children}
    </UserContext.Provider>
  );
}
