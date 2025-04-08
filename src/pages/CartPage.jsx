import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";

function CartPage() {
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrease = (item) => dispatch(addToCart(item));
  const handleDecrease = (id) => dispatch(decreaseQuantity(id));
  const handleRemove = (id) => dispatch(removeFromCart(id));
  const handleClear = () => dispatch(clearCart());

  return (
    <div className="min-h-screen bg-primary text-white py-16 px-4 md:px-12">
      <h1 className="text-5xl font-bold text-center text-secondary mb-12">Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-8">
          {items.map((item) => (
            <div
            key={item.id}
            className="flex justify-between items-center border border-secondary rounded-lg p-4 bg-neutral-900"
            >
              <div>
                <h2 className="text-xl font-semibold text-secondary">{item.name}</h2>
                <p className="text-gray-400">Price: ₹{item.price}</p>
                <p className="text-gray-400">Quantity: {item.quantity}</p>
                <p className="text-white font-medium mt-2">
                  Subtotal: ₹{item.price * item.quantity}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDecrease(item.id)}
                  className="bg-secondary text-black p-2 rounded-full hover:opacity-90"
                >
                  <Minus size={16} />
                </button>
                <button
                  onClick={() => handleIncrease(item)}
                  className="bg-secondary text-black p-2 rounded-full hover:opacity-90"
                >
                  <Plus size={16} />
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-400 hover:text-red-600 ml-4"
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}

          <div className="border-t border-secondary pt-6 text-right">
            <h3 className="text-2xl font-semibold text-secondary">
              Total: ₹{totalPrice}
            </h3>
            <p className="text-gray-400">Items in Cart: {totalQuantity}</p>
            <button
              onClick={handleClear}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
