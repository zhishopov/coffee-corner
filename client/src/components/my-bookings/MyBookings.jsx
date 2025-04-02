import { useEffect, useState } from "react";
import {
  useBookings,
  useEditBooking,
  useDeleteBooking,
} from "../../api/bookingApi";
import { useUserContext } from "../../contexts/UserContext";
import "./MyBookings.css";

export default function MyBookings() {
  const { userId } = useUserContext();
  const { bookings } = useBookings();
  const { edit } = useEditBooking();
  const { deleteBooking } = useDeleteBooking();
  const [userBookings, setUserBookings] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    setUserBookings(bookings.filter((booking) => booking._ownerId === userId));
  }, [bookings, userId]);

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (bookingId) => {
    try {
      await edit(bookingId, editData);
      setUserBookings(
        userBookings.map((b) =>
          b._id === bookingId ? { ...b, ...editData } : b
        )
      );
      setEditMode(null);
    } catch (error) {
      console.error("Failed to update booking:", error.message);
    }
  };

  const handleDelete = async (bookingId) => {
    try {
      await deleteBooking(bookingId);
      setUserBookings(userBookings.filter((b) => b._id !== bookingId));
    } catch (error) {
      console.error("Failed to delete booking:", error.message);
    }
  };

  return (
    <div className="my-bookings-container">
      <h2>My Bookings</h2>
      {userBookings.length > 0 ? (
        userBookings.map((booking) => (
          <div key={booking._id} className="booking-card">
            {editMode === booking._id ? (
              <div>
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleEditChange}
                />
                <input
                  type="email"
                  name="email"
                  value={editData.email}
                  onChange={handleEditChange}
                />
                <input
                  type="date"
                  name="date"
                  value={editData.date}
                  onChange={handleEditChange}
                />
                <input
                  type="time"
                  name="time"
                  value={editData.time}
                  onChange={handleEditChange}
                />
                <input
                  type="number"
                  name="guests"
                  value={editData.guests}
                  onChange={handleEditChange}
                />
                <button onClick={() => handleEditSubmit(booking._id)}>
                  Save
                </button>
                <button onClick={() => setEditMode(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <p>
                  <strong>Name:</strong> {booking.name}
                </p>
                <p>
                  <strong>Email:</strong> {booking.email}
                </p>
                <p>
                  <strong>Date:</strong> {booking.date}
                </p>
                <p>
                  <strong>Time:</strong> {booking.time}
                </p>
                <p>
                  <strong>Guests:</strong> {booking.guests}
                </p>
                <button
                  onClick={() => {
                    setEditMode(booking._id);
                    setEditData(booking);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(booking._id)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
}
