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
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
    </>
  );
}
