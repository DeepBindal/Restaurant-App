import React from "react";
import { ImagesSlider } from "../components/ui/image-slider";
import { AnimatedTestimonials } from "..//components/ui/animated-testimonials";
import { Link } from "react-router-dom";

const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1536305030588-45dc07a2a372?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1552590635-27c2c2128abf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1682098078787-74e5ab1d251e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1723809701668-325bc15b5137?q=80&w=2147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative h-screen">
        <ImagesSlider
          images={images}
          direction="up"
          autoplay
          className={"z-10"}
        >
          {/* <Navbar /> */}
          <div className="relative z-50 flex flex-col items-center justify-center h-full text-center px-4">
            <h2 className="text-6xl font-bold mb-6">
              <span className="text-[#FFD700]">Authentic</span> Indian Cuisine
            </h2>
            <p className="text-xl mb-8 max-w-2xl">
              Experience the royal flavors of India with our carefully crafted
              dishes
            </p>
            <Link
              to="/menu"
              className="bg-[#FFD700] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#FFE55C] transition-colors"
            >
              View Our Menu
            </Link>
          </div>
        </ImagesSlider>
      </header>
      <div
        className="relative bg-cover bg-center min-h-screen flex items-center justify-center px-4 py-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1569921894261-ecda0b2cc1af?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-opacity-80 backdrop-blur-sm"></div>
        {/* Content */}
        <div className="relative z-10 max-w-3xl text-center text-white space-y-6">
          <img
            src="https://codewithsadee.github.io/grilli/assets/images/testi-avatar.jpg"
            alt="Customer"
            className="w-20 h-20 rounded-full mx-auto border-2 border-secondary"
          />
          <p className="text-2xl italic font-semibold text-white">
            "I wanted to thank you for inviting me down for that amazing dinner
            the other night. The food was extraordinary."
          </p>
          <h4 className="text-secondary font-semibold text-lg">John Doe</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
