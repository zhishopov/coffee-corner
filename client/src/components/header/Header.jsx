import { Link } from "react-router";

import "./Header.css";
import useAuth from "../hooks/useAuth";

export default function Header() {
  const { isAuthenticated } = useAuth();
  return (
    <>
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
              <Link to="/my-bookings" className="link">
                My Bookings
              </Link>
              <Link to="/logout" className="link">
                Logout
              </Link>
            </>
          )}
          <Link to="/book-table" className="link">
            Book Table
          </Link>
        </nav>
      </header>
    </>
  );
}
