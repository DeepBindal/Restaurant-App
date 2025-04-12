import { motion } from 'framer-motion';
import { ChefHat, PartyPopper, Utensils, Wind } from 'lucide-react';

const strengths = [
  {
    icon: <Utensils className="text-5xl text-yellow-400 mb-4" />,
    title: 'Hygienic Food',
    desc: 'Prepared with the highest standards of cleanliness.',
  },
  {
    icon: <Wind className="text-5xl text-yellow-400 mb-4" />,
    title: 'Fresh Environment',
    desc: 'A serene and airy ambiance for a delightful experience.',
  },
  {
    icon: <ChefHat className="text-5xl text-yellow-400 mb-4" />,
    title: 'Skilled Chefs',
    desc: 'Culinary experts crafting dishes with passion and precision.',
  },
  {
    icon: <PartyPopper className="text-5xl text-yellow-400 mb-4" />,
    title: 'Event & Party',
    desc: 'Perfect venue for celebrations and memorable gatherings.',
  },
];

// Animation variants
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function OurStrengths() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-primary to-[#1b1313] py-16 text-white text-center flex flex-col gap-5"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariant}
    >
      {/* Headings */}
      <motion.h2
        className="text-yellow-400 text-lg mb-2"
        variants={cardVariant}
      >
        WHY CHOOSE US
      </motion.h2>
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-12"
        variants={cardVariant}
      >
        Our Strengths
      </motion.h1>

      {/* Cards */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
        variants={containerVariant}
      >
        {strengths.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-primary p-6 rounded-xl shadow-lg cursor-pointer transform transition-transform"
            variants={cardVariant}
            whileHover={{ scale: 1.05, rotate: 0.5 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-secondary mb-2">{item.title}</h3>
            <p className="text-sm text-gray-200">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
