import "./login.css";

export default function Login() {
  return (
    <form id="login-form">
      <h2>Login</h2>
      <div>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" name="email" />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input type="password" id="password" name="password" />
        </label>
      </div>
      <div>
        <button id="login-btn">Login</button>
      </div>
    </form>
  );
}
