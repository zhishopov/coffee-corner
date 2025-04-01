import { Navigate, Outlet } from "react-router";
import { useUserContext } from "../../contexts/UserContext";

export default function AuthGuard() {
  const { authData } = useUserContext();

  if (!authData || !authData.accessToken) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
