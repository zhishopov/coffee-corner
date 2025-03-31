import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useUserContext } from "../../contexts/UserContext";
import { useLogout } from "../../api/authApi";
import "./Logout.css";

export default function Logout() {
  const { logout } = useLogout();
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    setUser(null);
    navigate("/login");
  }, [logout, setUser, navigate]);

  return (
    <div className="logout-container">
      <h2>Logging you out...</h2>
      <p>Please wait while we log you out. You will be redirected shortly.</p>
    </div>
  );
}
