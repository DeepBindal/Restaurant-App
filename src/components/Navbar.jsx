import React, { useState } from "react";
import { ShoppingCart, Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { items } = useSelector((state) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute w-full z-50 text-secondary px-4 md:px-8 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          <img
            src="https://d2ova09jg8x3xk.cloudfront.net/mildtospicy.com.au/images/logo.png"
            alt="Restaurant Logo"
            height={80}
            width={80}
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg items-center">
          <NavLink to="/menu" className="hover:text-[#FFD700] transition-colors">
            Menu
          </NavLink>
          <NavLink to="#about" className="hover:text-[#FFD700] transition-colors">
            About
          </NavLink>
          <NavLink to="#contact" className="hover:text-[#FFD700] transition-colors">
            Contact
          </NavLink>
          <NavLink to="/cart" className="relative hover:text-[#FFD700] transition-colors">
            <ShoppingCart />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#FFD700] text-black text-xs px-1.5 rounded-full">
                {items.length}
              </span>
            )}
          </NavLink>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-primary rounded-lg px-6 py-4 text-lg shadow-lg border border-secondary">
          <NavLink
            to="/menu"
            className="hover:text-[#FFD700] transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Menu
          </NavLink>
          <NavLink
            to="#about"
            className="hover:text-[#FFD700] transition"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="#contact"
            className="hover:text-[#FFD700] transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/cart"
            className="hover:text-[#FFD700] transition flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <ShoppingCart size={20} />
            {items.length > 0 && (
              <span className="bg-[#FFD700] text-black text-xs px-2 rounded-full">
                {items.length}
              </span>
            )}
            Cart
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
