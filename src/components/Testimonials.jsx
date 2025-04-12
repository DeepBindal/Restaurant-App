import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center px-4 py-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1569921894261-ecda0b2cc1af?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Animated overlay */}
      <motion.div
        className="absolute inset-0 bg-opacity-70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl text-center text-white space-y-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.img
          src="https://codewithsadee.github.io/grilli/assets/images/testi-avatar.jpg"
          alt="Customer"
          className="w-20 h-20 rounded-full mx-auto border-2 border-yellow-400 shadow-lg"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <motion.p
          className="text-2xl italic font-semibold text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          "I wanted to thank you for inviting me down for that amazing dinner
          the other night. The food was extraordinary."
        </motion.p>

        <motion.h4
          className="text-yellow-400 font-semibold text-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          John Doe
        </motion.h4>
      </motion.div>
    </div>
  );
}
