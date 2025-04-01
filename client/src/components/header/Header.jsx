import { Link } from "react-router";
import { useUserContext } from "../../contexts/UserContext";
import "./Header.css";

export default function Header() {
  const { authData } = useUserContext();
  const isAuthenticated = authData && authData.accessToken;

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
        <Link to="/contact" className="link">
          Contact
        </Link>

        {!isAuthenticated ? (
          <>
            <Link to="/login" className="link">
              Login
            </Link>
            <Link to="/register" className="link">
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/book-table" className="link">
              Book a Table
            </Link>{" "}
            <Link to="/my-bookings" className="link">
              My Bookings
            </Link>
            <Link to="/logout" className="link">
              Logout
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
