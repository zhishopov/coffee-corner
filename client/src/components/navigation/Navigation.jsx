import { Link } from "react-router";
import "./Navigation.css";

export default function Navigation() {
  return (
    <>
      <header>
        <h1>
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
