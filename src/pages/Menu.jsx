import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import MENU from "../lib/index";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Menu() {
  const [openCategory, setOpenCategory] = useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
    toast.success("Item added");
  }
  return (
    <div className=" min-h-screen bg-primary text-white py-16 px-4 md:px-12">
      <h1 className="text-5xl font-bold text-center text-secondary mb-12">
        Our Menu
      </h1>

      <div className="max-w-4xl mx-auto">
        {Object.entries(MENU).map(([category, items]) => {
          const isOpen = openCategory === category;
          return (
            <div
              key={category}
              className="mb-6 border border-secondary rounded-lg overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex justify-between items-center px-6 py-4 bg-neutral-900 text-left text-xl font-semibold text-secondary hover:bg-neutral-800 transition"
              >
                {category}
                {isOpen ? (
                  <ChevronUp className="text-secondary" />
                ) : (
                  <ChevronDown className="text-secondary" />
                )}
              </button>

              {/* Item List */}
              {isOpen && (
                <div className="bg-neutral-800 px-6 py-4 space-y-6">
                  {items.map((item, index) => {
                    const inCart = isInCart(item.id);
                    return (
                      <div key={index} className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-medium text-white">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="text-secondary font-medium whitespace-nowrap">
                            ₹{item.price}
                          </span>
                          {inCart ? (
                            <Link
                              to="/cart"
                              className="text-sm bg-secondary text-black font-semibold px-4 py-1 rounded-full"
                            >
                              Go to Cart
                            </Link>
                          ) : (
                            <button
                              onClick={() => handleAddToCart(item)}
                              className="text-sm bg-secondary text-black font-semibold px-4 py-1 rounded-full hover:bg-yellow-400"
                            >
                              Add to Cart
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
