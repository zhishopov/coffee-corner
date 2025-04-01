import { useState } from "react";
import { Link, useNavigate } from "react-router";
import "./login.css";
import { useLogin } from "../../api/authApi";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useLogin();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    try {
      const user = await login(formData.email, formData.password);
      localStorage.setItem("userId", user.id);
      setMessage("Login successful!");
      navigate("/");
    } catch (err) {
      setError(err.message || "An error occurred during login.");
    }
  };

  return (
    <div className="login-container">
      <form id="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <button id="login-btn" type="submit">
            Login
          </button>
        </div>
        <p className="register-link">
          Don&apos;t have an account? <Link to="/register">Register</Link>
        </p>
      </form>

      {error && <p className="error-message">{error}</p>}
      {message && <p className="success-message">{message}</p>}
    </div>
  );
}
