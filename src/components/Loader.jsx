import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-yellow-500 text-lg font-semibold">Loading...</p>
      </div>
    </motion.div>
  );
};

export default Loader;
