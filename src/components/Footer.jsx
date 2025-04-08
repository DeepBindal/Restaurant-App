import React from "react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <img
            src="https://d2ova09jg8x3xk.cloudfront.net/mildtospicy.com.au/images/logo.png"
            alt="Restaurant Logo"
            className="h-16 mb-4"
          />
          <p className="text-gray-400 text-sm">
            Serving authentic Indian cuisine with a touch of tradition and love.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-secondary font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li><Link to="/menu" className="hover:text-secondary">Menu</Link></li>
            <li><Link to="#about" className="hover:text-secondary">About Us</Link></li>
            <li><Link to="#contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-secondary font-semibold text-lg mb-3">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-secondary" />
              123 Spice Street, Food City, IN
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-secondary" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-secondary" />
              contact@restaurant.com
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-secondary font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex gap-4 text-secondary">
            <a href="#" aria-label="Facebook"><Facebook /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
          </div>
          <p className="text-xs text-gray-500 mt-4">© {new Date().getFullYear()} Mild to Spicy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
