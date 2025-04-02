import { useState } from "react";
import { useNavigate } from "react-router";
import "./Register.css";
import { useRegister } from "../../api/authApi";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rePassword: "",
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const { register } = useRegister();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password || !formData.rePassword) {
      setError("All fields are required.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (formData.password !== formData.rePassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await register(formData.email, formData.password);
      setMessage("Registration successful! You can now login.");
      navigate("/login");
    } catch (err) {
      setError(err.message || "An error occurred during registration.");
    }
  };

  return (
    <div className="register-container">
      <form id="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
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
          <label htmlFor="rePassword">
            Confirm Password:
            <input
              type="password"
              id="rePassword"
              name="rePassword"
              value={formData.rePassword}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div>
          <button id="register-btn" type="submit">
            Register
          </button>
        </div>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
}
