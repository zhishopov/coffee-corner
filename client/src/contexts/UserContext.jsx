import { createContext, useContext } from "react";

export const UserContext = createContext({
  _id: "",
  email: "",
  username: "",
  accessToken: "",
  userLoginHandler: () => {
    console.warn("userLoginHandler called outside of UserProvider.");
  },
  userLogoutHandler: () => {
    console.warn("userLogoutHandler called outside of UserProvider.");
  },
});

export function useUserContext() {
  const data = useContext(UserContext);

  if (!data) {
    console.error("useUserContext must be used within a UserProvider.");
  }

  return data;
}
