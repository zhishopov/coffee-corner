import { UserContext } from "../contexts/UserContext";
import usePersistedState from "../hooks/usePersistedState";

export default function UserProvider({ children }) {
  const [authData, setAuthData] = usePersistedState("auth", {});

  const userLoginHandler = (resultData) => {
    try {
      setAuthData(resultData || {}); // Make sure it's  object
    } catch (error) {
      console.error("Error storing authentication data:", error);
    }
  };

  const userLogoutHandler = () => {
    try {
      setAuthData({});
    } catch (error) {
      console.error("Error clearing authentication data:", error);
    }
  };

  return (
    <UserContext.Provider
      value={{ ...authData, userLoginHandler, userLogoutHandler }}
    >
      {children}
    </UserContext.Provider>
  );
}
