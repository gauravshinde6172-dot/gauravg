import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

const quotes = [
  "Her words light up my mood.",
  "Even miles away, she feels near.",
  "Every conversation is a treasure.",
  "She understands my silence.",
  "Laughter across screens feels real.",
  "Time zones don't limit our bond.",
  "She's my virtual sunshine.",
  "Distance can't dim this friendship.",
];

interface QuoteCardProps {
  quote: string;
  index: number;
}

const QuoteCard = ({ quote, index }: QuoteCardProps) => {
  const [position] = useState({
    x: Math.random() * 80 + 10,
    y: Math.random() * 70 + 10,
    rotate: Math.random() * 20 - 10,
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: position.rotate - 180 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: position.rotate,
        x: [0, Math.random() * 20 - 10, 0],
        y: [0, Math.random() * 20 - 10, 0],
      }}
      transition={{
        opacity: { delay: index * 0.2, duration: 0.5 },
        scale: { delay: index * 0.2, duration: 0.5 },
        rotate: { delay: index * 0.2, duration: 0.5 },
        x: { duration: 3, repeat: Infinity, repeatType: "reverse" },
        y: { duration: 4, repeat: Infinity, repeatType: "reverse" },
      }}
      whileHover={{
        scale: 1.15,
        rotate: 0,
        zIndex: 10,
        transition: { duration: 0.3 }
      }}
      className="absolute cursor-pointer"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    >
      <div className="bg-gradient-to-br from-pink-200 to-purple-200 p-6 rounded-2xl shadow-xl border-2 border-white w-64 h-40 flex flex-col items-center justify-center">
        <Quote className="text-purple-600 mb-3" size={24} />
        <p className="text-center text-gray-800 font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
          "{quote}"
        </p>
      </div>
    </motion.div>
  );
};

export default function Memories() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative z-10 min-h-screen px-6 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-purple-900 mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Memory Quotes
          </h2>
          <p className="text-lg text-purple-700">Hover over the cards to read them</p>
        </motion.div>

        <div className="relative w-full h-[600px]">
          {quotes.map((quote, index) => (
            <QuoteCard key={index} quote={quote} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/promise')}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-lg rounded-full font-semibold shadow-lg"
          >
            Continue →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
