import { Link } from "react-router";
import { useUserContext } from "../../contexts/UserContext";
import "./Header.css";

export default function Header() {
  const { authData } = useUserContext();

  return (
    <header>
      <h1 id="heading">
        <Link className="home" to="/">
          The Coffee Corner
        </Link>
      </h1>
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/menu" className="link">
          Menu
        </Link>
        {!authData && (
          <>
            <Link to="/login" className="link">
              Login
            </Link>
            <Link to="/register" className="link">
              Register
            </Link>
          </>
        )}
        {authData && (
          <Link to="/my-bookings" className="link">
            My Bookings
          </Link>
        )}
      </nav>
    </header>
  );
}
