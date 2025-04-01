import { useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

export default function UserProvider({ children }) {
  const [authData, setAuthData] = useState(() => {
    const storedUser = localStorage.getItem("auth");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        return parsedUser.accessToken ? parsedUser : null;
      } catch (error) {
        console.error("Failed to parse auth data:", error);
        return null;
      }
    }
    return null;
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
    setAuthData(user);
  };

  const userLogoutHandler = () => {
    console.log("Logging out user");
    setAuthData(null);
    localStorage.removeItem("auth");
  };

  return (
    <UserContext.Provider
      value={{ authData, userLoginHandler, userLogoutHandler }}
    >
      {children}
    </UserContext.Provider>
  );
}
