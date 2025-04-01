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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      return;
    }

    console.log("Contact form submitted:", form);
    setSuccess("Thank you for reaching out! We will get back to you soon.");
    setForm({ name: "", email: "", message: "" });
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
