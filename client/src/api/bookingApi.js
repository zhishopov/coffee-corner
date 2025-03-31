import { useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = "http://localhost:3030/data/bookings";

export const useBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    request.get(baseUrl).then(setBookings);
  }, []);

  return { bookings };
};

export const useBooking = (bookingId) => {
  const [booking, setBooking] = useState({});

  useEffect(() => {
    request.get(`${baseUrl}/${bookingId}`).then(setBooking);
  }, [bookingId]);

  return { booking };
};

// Fetch the latest 3 bookings (if needed for a dashboard)
export const useLatestBookings = () => {
  const [latestBookings, setLatestBookings] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams({
      sortBy: "_createdOn desc",
      pageSize: 3,
      select: "_id,name,email,date,time,guests",
    });

    request
      .get(`${baseUrl}?${searchParams.toString()}`)
      .then(setLatestBookings);
  }, []);

  return { latestBookings };
};

export const useCreateBooking = () => {
  const { request } = useAuth();

  const create = (bookingData) => request.post(baseUrl, bookingData);

  return { create };
};

export const useEditBooking = () => {
  const { request } = useAuth();

  const edit = (bookingId, bookingData) =>
    request.put(`${baseUrl}/${bookingId}`, { ...bookingData, _id: bookingId });

  return { edit };
};

export const useDeleteBooking = () => {
  const { request } = useAuth();

  const deleteBooking = (bookingId) =>
    request.delete(`${baseUrl}/${bookingId}`);

  return { deleteBooking };
};
