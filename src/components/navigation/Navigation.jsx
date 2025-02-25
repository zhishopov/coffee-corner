import "./Navigation.css";

export default function Navigation() {
  return (
    <>
      <header>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
