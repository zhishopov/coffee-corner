import { useState } from "react";
import { useCreateBooking } from "../../api/bookingApi";
import "./BookTable.css";
import { useNavigate } from "react-router";

export default function BookTable() {
  const navigate = useNavigate();
  const { create } = useCreateBooking();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.date ||
      !formData.time ||
      !formData.guests
    ) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await create(formData);
      setMessage("Your table has been booked successfully!");
      setFormData({ name: "", email: "", date: "", time: "", guests: "" });
    } catch (err) {
      setError(err.message || "Failed to book the table. Please try again.");
    }
    navigate("/my-bookings");
  };

  return (
    <div className="book-table">
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <label>Number of Guests:</label>
        <input
          type="number"
          name="guests"
          value={formData.guests}
          min="1"
          max="10"
          onChange={handleChange}
          required
        />

        <button type="submit">Book Now</button>
      </form>

      {message && <p className="message success">{message}</p>}
      {error && <p className="message error">{error}</p>}
    </div>
  );
}
