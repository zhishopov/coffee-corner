import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
    setSuccess(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      return;
    }

    const authData = JSON.parse(localStorage.getItem("auth"));
    const token = authData?.accessToken;

    try {
      const response = await fetch(
        "http://localhost:3030/data/contactMessages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token && { "X-Authorization": token }),
          },
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setSuccess("Thank you for reaching out! We will get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
          required
        />

        <label>Message:</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
