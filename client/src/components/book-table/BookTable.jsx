import { useState } from "react";
import "./BookTable.css";

export default function BookTable() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.date ||
      !formData.time ||
      !formData.guests
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    // Here, you could send the reservation to the backend
    console.log("Reservation Details:", formData);
    setMessage("Your table has been booked successfully!");

    // Clear form
    setFormData({ name: "", email: "", date: "", time: "", guests: "" });
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

      {message && <p className="message">{message}</p>}
    </div>
  );
}
