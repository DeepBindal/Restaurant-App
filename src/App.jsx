import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar.jsx";
import Menu from "./pages/Menu.jsx";
import CartPage from "./pages/CartPage.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <Router>
      <div className="montserrat-font">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </div>
      <Toaster position="top-right" />
    </Router>
  );
}

export default App;
