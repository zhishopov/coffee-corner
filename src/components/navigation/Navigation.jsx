import "./Navigation.css";

export default function Navigation(props) {
  return (
    <>
      <header>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a href="/" onClick={() => props.onNavigate("home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={() => props.onNavigate("menu")}>
                Menu
              </a>
            </li>
            <li>
              <a href="#" onClick={() => props.onNavigate("login")}>
                Login
              </a>
            </li>
            <li>
              <a href="#" onClick={() => props.onNavigate("register")}>
                Register
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
