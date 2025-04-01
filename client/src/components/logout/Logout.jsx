import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useLogout } from "../../api/authApi";
import "./Logout.css";

export default function Logout() {
  const { logout } = useLogout();
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      await logout();
      navigate("/login");
    };

    handleLogout();
  }, [logout, navigate]);

  return (
    <div className="logout-container">
      <h2>Logging you out...</h2>
      <p>Please wait while we log you out. You will be redirected shortly.</p>
    </div>
  );
}
