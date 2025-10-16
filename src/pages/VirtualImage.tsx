import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, Sparkles } from 'lucide-react';

export default function VirtualImage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(96, 165, 250, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <Sparkles className="text-yellow-300" size={15 + Math.random() * 15} />
        </motion.div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-8 text-center"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          Us — As I Imagine
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative max-w-4xl w-full"
        >
          <div className="relative bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 p-1 rounded-3xl">
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 md:p-20">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <svg viewBox="0 0 800 600" className="w-full h-full">
                  <defs>
                    <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#7c3aed" />
                      <stop offset="50%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                  </defs>

                  <rect width="800" height="600" fill="url(#skyGradient)" />

                  {[...Array(50)].map((_, i) => (
                    <motion.circle
                      key={i}
                      cx={Math.random() * 800}
                      cy={Math.random() * 400}
                      r={Math.random() * 2 + 1}
                      fill="white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}

                  <ellipse cx="400" cy="550" rx="350" ry="50" fill="#1e1b4b" opacity="0.3" />

                  <motion.g
                    initial={{ y: 650 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1, duration: 1.5, type: "spring" }}
                  >
                    <ellipse cx="300" cy="550" rx="40" ry="60" fill="#ec4899" />
                    <circle cx="300" cy="500" r="35" fill="#fbbf24" />
                    <path d="M 300 535 L 280 580" stroke="#ec4899" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 300 535 L 320 580" stroke="#ec4899" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 300 515 L 270 530" stroke="#ec4899" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 300 515 L 330 530" stroke="#ec4899" strokeWidth="8" strokeLinecap="round" />
                  </motion.g>

                  <motion.g
                    initial={{ y: 650 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1.2, duration: 1.5, type: "spring" }}
                  >
                    <ellipse cx="500" cy="550" rx="40" ry="60" fill="#a78bfa" />
                    <circle cx="500" cy="500" r="35" fill="#fbbf24" />
                    <path d="M 500 535 L 480 580" stroke="#a78bfa" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 500 535 L 520 580" stroke="#a78bfa" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 500 515 L 470 530" stroke="#a78bfa" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 500 515 L 530 530" stroke="#a78bfa" strokeWidth="8" strokeLinecap="round" />
                  </motion.g>

                  {[...Array(8)].map((_, i) => (
                    <motion.path
                      key={i}
                      d={`M ${350 + i * 15} ${450 - i * 20} Q ${375 + i * 15} ${430 - i * 20} ${400 + i * 15} ${450 - i * 20}`}
                      stroke="#fbbf24"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ delay: 2 + i * 0.1, duration: 1 }}
                    />
                  ))}
                </svg>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.5 }}
                  className="absolute"
                >
                  <Heart className="text-red-400 fill-red-400" size={60} />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="mt-8"
              >
                <p className="text-white text-center text-xl md:text-2xl italic" style={{ fontFamily: 'Dancing Script, cursive' }}>
                  Under a starry sky, sharing laughter and dreams...
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="mt-12 max-w-2xl"
        >
          <p className="text-2xl md:text-3xl text-center text-white leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Maybe we've never met, but in this world — we already did. 💫
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/cake-cutting')}
          className="mt-12 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg rounded-full font-semibold shadow-lg"
        >
          Continue →
        </motion.button>
      </div>
    </div>
  );
}
