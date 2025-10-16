import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Star, Sparkles } from 'lucide-react';

export default function Promise() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-black">
      {[...Array(100)].map((_, i) => {
        const size = Math.random() * 3;
        const duration = Math.random() * 3 + 2;
        return (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: size,
              height: size,
            }}
          />
        );
      })}

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <Star className="text-yellow-300 fill-yellow-300" size={10 + Math.random() * 15} />
        </motion.div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.5
          }}
          className="mb-12"
        >
          <div className="relative">
            <Sparkles className="text-yellow-300" size={80} />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0"
            >
              <Sparkles className="text-yellow-400" size={80} />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-4xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-4xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 mb-8"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            A Promise to You
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            className="bg-white/10 backdrop-blur-md p-12 rounded-3xl border-2 border-white/20"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-2xl md:text-4xl text-center text-white leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              No matter how far, <br />
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 20px rgba(251, 191, 36, 0.5)",
                    "0 0 40px rgba(251, 191, 36, 0.8)",
                    "0 0 20px rgba(251, 191, 36, 0.5)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-yellow-300"
              >
                you'll always have a friend in me.
              </motion.span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="flex justify-center gap-4 mt-8"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <Star className="text-yellow-300 fill-yellow-300" size={30} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/virtual-image')}
          className="mt-16 px-8 py-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-lg rounded-full font-semibold shadow-lg"
        >
          Continue →
        </motion.button>
      </div>
    </div>
  );
}
