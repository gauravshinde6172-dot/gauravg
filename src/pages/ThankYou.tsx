import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, Home } from 'lucide-react';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ec4899', '#a78bfa', '#fbbf24', '#f87171'],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ec4899', '#a78bfa', '#fbbf24', '#f87171'],
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -100, x: Math.random() * window.innerWidth, rotate: 0 }}
          animate={{
            y: window.innerHeight + 100,
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 3 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute"
        >
          <Heart className="text-pink-400 fill-pink-400" size={20 + Math.random() * 20} />
        </motion.div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.5
          }}
          className="mb-12"
        >
          <Heart className="text-red-500 fill-red-400" size={120} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-purple-900 mb-8 text-center"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          Thank You, Butti
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="max-w-3xl bg-white/80 backdrop-blur-md p-12 rounded-3xl shadow-2xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-2xl md:text-3xl text-center text-gray-800 leading-relaxed mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Thank you for being my peace, my chaos, and my smile.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="text-xl md:text-2xl text-center text-gray-700 leading-relaxed"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            You've made my world brighter just by being in it. 💖
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1 }}
            className="flex justify-center gap-4 mt-8"
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                <Heart className="text-pink-500 fill-pink-500" size={25} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-purple-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Want to experience this journey again?
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg rounded-full font-semibold shadow-lg flex items-center gap-3 mx-auto"
          >
            <Home size={24} />
            Restart Journey
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="mt-12"
        >
          <p className="text-purple-700 text-center italic" style={{ fontFamily: 'Dancing Script, cursive' }}>
            — Forever your friend 💕
          </p>
        </motion.div>
      </div>
    </div>
  );
}
