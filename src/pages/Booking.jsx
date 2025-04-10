import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
    const navigate = useNavigate()
  const [form, setForm] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    numberOfGuests: 1,
    date: '',
    timeSlot: 'Lunch',
    specialRequests: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/bookings', form);
      setMessage('✅ Booking confirmed!');
      navigate('/');
      setForm({
        customerName: '',
        customerPhone: '',
        customerEmail: '',
        numberOfGuests: 1,
        date: '',
        timeSlot: 'Lunch',
        specialRequests: ''
      });
    } catch (error) {
      setMessage('❌ Error booking table');
    }
  };

  return (
    <div className="w-full bg-primary text-secondary px-16 py-20  shadow-md">
      <h2 className="text-xl font-bold mb-4">Book a Table</h2>
      {message && <p className="mb-2 text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="customerName" placeholder="Your Name" value={form.customerName} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input type="tel" name="customerPhone" placeholder="Phone Number" value={form.customerPhone} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input type="email" name="customerEmail" placeholder="Email (optional)" value={form.customerEmail} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="number" name="numberOfGuests" placeholder="Guests" min="1" value={form.numberOfGuests} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full border p-2 rounded" />
        <select name="timeSlot" value={form.timeSlot} onChange={handleChange} required className="w-full border p-2 rounded">
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Brunch</option>
          <option>Evening Snacks</option>
          <option>Dinner</option>
        </select>
        <textarea name="specialRequests" placeholder="Special Requests" value={form.specialRequests} onChange={handleChange} className="w-full border p-2 rounded" />
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Book Table</button>
      </form>
    </div>
  );
};

export default Booking;
