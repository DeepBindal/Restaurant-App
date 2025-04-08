import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const Payments = ({ amount }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY, // Make sure this env variable is set
      amount: amount * 100, // Razorpay expects amount in paisa
      currency: "INR",
      name: "My Restaurant",
      description: "Test Order",
      image:
        "https://d2ova09jg8x3xk.cloudfront.net/mildtospicy.com.au/images/logo.png",
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        dispatch(clearCart()); // Clear the cart on success
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#FFD700",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handlePayment}
        className="bg-secondary text-black font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition"
      >
        Pay ₹{amount}
      </button>
    </div>
  );
};

export default Payments;
