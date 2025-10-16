import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, Sparkles, User } from 'lucide-react';

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
            <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-6 md:p-12">
              <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center">
                <motion.img
                  src="https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Us Together"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 1.2 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 }}
                  className="absolute top-6 right-6"
                >
                  <Heart className="text-red-400 fill-red-400" size={40} />
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
