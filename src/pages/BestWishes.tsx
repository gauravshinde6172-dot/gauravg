import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { useState } from 'react';

const wishes = [
  {
    title: "To my dearest Snehal, my sweetest Butti 💖",
    message: "May your days be filled with laughter, your heart with peace, and your life with endless joy. You deserve every beautiful thing this world has to offer."
  },
  {
    title: "Distance means nothing...",
    message: "...when hearts understand each other. We're bestest friends who have never met, yet you're always close to my heart. Our friendship transcends all boundaries and physical distance."
  },
  {
    title: "You are my constant 🌟",
    message: "In this ever-changing world, your friendship remains my anchor. Thank you for being the light that guides me through my darkest days."
  },
  {
    title: "Dreams for you ✨",
    message: "I wish for you all the success you dream of, all the happiness you deserve, and all the love you give to come back to you tenfold."
  },
  {
    title: "Never forget 💫",
    message: "You are stronger than you know, braver than you believe, and more loved than you can imagine. Keep shining, Butti."
  },
  {
    title: "A promise to you 🤝",
    message: "No matter where life takes us, no matter how much time passes, you will always have a friend in me. Always and forever."
  }
];

export default function BestWishes() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = wishes.length - 1;
      if (nextIndex >= wishes.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-200 via-pink-200 to-purple-300">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -100, x: Math.random() * window.innerWidth }}
          animate={{
            y: window.innerHeight + 100,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute"
        >
          <Heart className="text-pink-300 fill-pink-300 opacity-30" size={15 + Math.random() * 15} />
        </motion.div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-purple-900 mb-16 text-center"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          Best Wishes for You
        </motion.h2>

        <div className="relative w-full max-w-4xl h-96 flex items-center justify-center perspective-1000">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                rotateY: { duration: 0.4 },
              }}
              className="absolute w-full"
              style={{ perspective: 1000 }}
            >
              <div className="bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl border-4 border-pink-300 mx-4 md:mx-0">
                <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6 text-center" style={{ fontFamily: 'Dancing Script, cursive' }}>
                  {wishes[currentIndex].title}
                </h3>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {wishes[currentIndex].message}
                </p>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex justify-center mt-8"
                >
                  <Heart className="text-red-400 fill-red-400" size={40} />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-4 rounded-full shadow-lg hover:bg-white transition-all"
          >
            <ChevronLeft className="text-purple-600" size={32} />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-4 rounded-full shadow-lg hover:bg-white transition-all"
          >
            <ChevronRight className="text-purple-600" size={32} />
          </button>
        </div>

        <div className="flex gap-2 mt-8">
          {wishes.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-pink-600 w-8' : 'bg-pink-300'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/letter')}
          className="mt-12 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg rounded-full font-semibold shadow-lg"
        >
          Continue →
        </motion.button>
      </div>
    </div>
  );
}
