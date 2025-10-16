import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

const FloatingHeart = ({ delay }: { delay: number }) => {
  const randomX = Math.random() * 100;
  const randomDuration = 3 + Math.random() * 2;

  return (
    <motion.div
      initial={{ y: '100vh', x: `${randomX}vw`, opacity: 0 }}
      animate={{
        y: '-100vh',
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: randomDuration,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
      }}
      className="absolute"
    >
      <Heart className="text-pink-300 fill-pink-300" size={20 + Math.random() * 20} />
    </motion.div>
  );
};

export default function HomePage() {
  const navigate = useNavigate();
  const [hearts] = useState(() => Array.from({ length: 15 }, (_, i) => i));

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
      {hearts.map((i) => (
        <FloatingHeart key={i} delay={i * 0.3} />
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
          className="mb-8"
        >
          <Heart className="text-pink-500 fill-pink-400" size={80} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-center mb-6"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          Hey Butti... 💌
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-center text-purple-700 mb-12 max-w-2xl"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          this one's for you 💖
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 25px rgba(236, 72, 153, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/how-we-met')}
          className="px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white text-lg rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Enter My Heart
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <p className="text-purple-600">✨ Scroll to begin the journey ✨</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
