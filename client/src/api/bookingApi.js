import { useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = "http://localhost:3030/data/bookings";

export const useBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    request
      .get(baseUrl)
      .then(setBookings)
      .catch((err) => {
        console.error("Error fetching bookings:", err);
        setError("Failed to load bookings.");
      });
  }, []);

  return { bookings, error };
};

export const useBooking = (bookingId) => {
  const [booking, setBooking] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    request
      .get(`${baseUrl}/${bookingId}`)
      .then(setBooking)
      .catch((err) => {
        console.error(`Error fetching booking ${bookingId}:`, err);
        setError("Failed to load booking details.");
      });
  }, [bookingId]);

  return { booking, error };
};

export const useLatestBookings = () => {
  const [latestBookings, setLatestBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams({
      sortBy: "_createdOn desc",
      pageSize: 3,
      select: "_id,name,email,date,time,guests",
    });

    request
      .get(`${baseUrl}?${searchParams.toString()}`)
      .then(setLatestBookings)
      .catch((err) => {
        console.error("Error fetching latest bookings:", err);
        setError("Failed to load latest bookings.");
      });
  }, []);

  return { latestBookings, error };
};

export const useCreateBooking = () => {
  const { request } = useAuth();

  const create = async (bookingData) => {
    try {
      return await request.post(baseUrl, bookingData);
    } catch (err) {
      console.error("Error creating booking:", err);
      throw new Error("Booking creation failed.");
    }
  };

  return { create };
};

export const useEditBooking = () => {
  const { request } = useAuth();

  const edit = async (bookingId, bookingData) => {
    try {
      return await request.put(`${baseUrl}/${bookingId}`, {
        ...bookingData,
        _id: bookingId,
      });
    } catch (err) {
      console.error(`Error editing booking ${bookingId}:`, err);
      throw new Error("Booking update failed.");
    }
  };

  return { edit };
};

export const useDeleteBooking = () => {
  const { request } = useAuth();

  const deleteBooking = async (bookingId) => {
    try {
      return await request.delete(`${baseUrl}/${bookingId}`);
    } catch (err) {
      console.error(`Error deleting booking ${bookingId}:`, err);
      throw new Error("Booking deletion failed.");
    }
  };

  return { deleteBooking };
};
