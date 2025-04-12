import { motion } from "framer-motion";
import { Link } from "lucide-react";

const categories = [
  {
    title: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1591465619339-60fce055bc82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lunch",
    image:
      "https://images.unsplash.com/photo-1742281257687-092746ad6021?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Dinner",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function MenuCategories() {
  return (
    <div className="bg-gradient-to-b from-primary to-[#1b1313] text-white py-20 px-4 text-center">
      {/* Header */}
      <motion.p
        className="text-yellow-400 text-sm mb-2"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Purest Indian Flavours
      </motion.p>

      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Exceptional Culinary Arts
      </motion.h2>

      <motion.p
        className="text-gray-300 max-w-xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Indulge in the finest Indian cuisine, crafted with tradition and
        passion.
      </motion.p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            className="relative rounded-xl overflow-hidden group shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Image */}
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />

            {/* Overlay */}
            <div className="absolute inset-0  bg-opacity-30 group-hover:bg-opacity-80 transition-all duration-500 ease-in-out"></div>

            {/* Text Content */}
            <div className="absolute bottom-6 left-6 text-left opacity-90 group-hover:translate-y-[-10px] transition-transform duration-500">
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">
                {cat.title}
              </h3>
              <Link to='/menu'>
                <motion.button
                  className="bg-secondary text-black px-4 py-1.5 rounded-full font-medium shadow hover:bg-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Menu
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
