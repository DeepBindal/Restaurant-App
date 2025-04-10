import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/bookings');
        setBookings(res.data);
      } catch (err) {
        console.error('Error fetching bookings:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-primary text-secondary p-4">
      <h2 className="text-2xl font-bold mb-4">📅 All Bookings</h2>
      {loading ? (
        <p>Loading...</p>
      ) : bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded shadow">
            <thead>
              <tr>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Guests</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Time Slot</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id} className="text-center">
                  <td className="p-2 border">{booking.customerName}</td>
                  <td className="p-2 border">{booking.numberOfGuests}</td>
                  <td className="p-2 border">
                    {new Date(booking.date).toLocaleDateString()}
                  </td>
                  <td className="p-2 border">{booking.timeSlot}</td>
                  <td className="p-2 border">{booking.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminBookings;
