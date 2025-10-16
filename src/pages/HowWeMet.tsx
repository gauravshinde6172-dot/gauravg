import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Heart, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const ChatBubble = ({ delay, side }: { delay: number; side: 'left' | 'right' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -50 : 50, scale: 0 }}
      animate={{ opacity: 0.2, x: 0, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`absolute ${side === 'left' ? 'left-10' : 'right-10'}`}
      style={{
        top: `${Math.random() * 80 + 10}%`,
      }}
    >
      <MessageCircle size={40} className="text-blue-300" />
    </motion.div>
  );
};

export default function HowWeMet() {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState('');
  const fullText = "We met in the most unexpected way — through a screen. We've never met in person, but somehow our bond feels more real than anything."

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-100 via-blue-200 to-purple-200">
      {[0, 1, 2, 3, 4].map((i) => (
        <ChatBubble key={i} delay={i * 0.2} side={i % 2 === 0 ? 'left' : 'right'} />
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="mb-8"
        >
          <MessageCircle className="text-blue-500" size={60} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-blue-800 mb-12 text-center"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          How We Met (Virtually)
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl"
        >
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed text-center font-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: typedText.length >= fullText.length ? 1 : 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-6 mt-8"
          >
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }}>
              <MessageCircle className="text-pink-400" size={32} />
            </motion.div>
            <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}>
              <Heart className="text-red-400 fill-red-400" size={32} />
            </motion.div>
            <motion.div animate={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}>
              <Sparkles className="text-yellow-400" size={32} />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: typedText.length >= fullText.length ? 1 : 0 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/what-you-mean')}
          className="mt-12 px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white text-lg rounded-full font-semibold shadow-lg"
        >
          Continue →
        </motion.button>
      </div>
    </div>
  );
}
