import { Link } from "react-router";
import "./Header.css";

export default function Header() {
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
          <Link to="/login" className="link">
            Login
          </Link>
          <Link to="/register" className="link">
            Register
          </Link>
        </nav>
      </header>
    </>
  );
}
