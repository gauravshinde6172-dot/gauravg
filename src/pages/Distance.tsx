import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function Distance() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          Distance Doesn't Matter
        </motion.h2>

        <div className="relative w-full max-w-4xl h-96">
          <svg viewBox="0 0 800 400" className="w-full h-full">
            <motion.circle
              cx="150"
              cy="200"
              r="20"
              fill="#ec4899"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            />

            <motion.circle
              cx="650"
              cy="200"
              r="20"
              fill="#8b5cf6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
            />

            <motion.line
              x1="150"
              y1="200"
              x2="650"
              y2="200"
              stroke="url(#gradient)"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />

            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>

            <motion.circle
              cx="150"
              cy="200"
              r="30"
              fill="none"
              stroke="#ec4899"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />

            <motion.circle
              cx="650"
              cy="200"
              r="30"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            />
          </svg>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-center"
          >
            <MapPin className="text-pink-400 mx-auto mb-2" size={32} />
            <p className="text-white font-semibold">Me</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-center"
          >
            <MapPin className="text-purple-400 mx-auto mb-2" size={32} />
            <p className="text-white font-semibold">Butti</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="mt-16 max-w-2xl"
        >
          <p className="text-2xl md:text-3xl text-center text-white leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our bond doesn't need miles — it just needs hearts. 💕
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/wishes')}
          className="mt-12 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg rounded-full font-semibold shadow-lg"
        >
          Continue →
        </motion.button>
      </div>
    </div>
  );
}
