import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, Star, Sparkles, Sun } from 'lucide-react';
import { useRef } from 'react';

const messages = [
  { text: "You're the reason some of my quietest days turn bright.", icon: Sun },
  { text: "In a world of temporary connections, you feel permanent.", icon: Heart },
  { text: "You understand my silences as much as my words.", icon: Star },
  { text: "Distance couldn't stop our hearts from finding each other.", icon: Sparkles },
  { text: "You're not just a friend — you're home.", icon: Heart },
];

const MessageLine = ({ message, icon: Icon, index }: { message: string; icon: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex items-start gap-4 mb-8"
    >
      <motion.div
        animate={{
          scale: isInView ? [1, 1.2, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.3,
        }}
      >
        <Icon className="text-pink-400 flex-shrink-0 mt-1" size={28} />
      </motion.div>
      <p className="text-xl md:text-2xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {message}
      </p>
    </motion.div>
  );
};

export default function WhatYouMean() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-purple-800 mb-16 text-center"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          What You Mean to Me
        </motion.h2>

        <div className="max-w-4xl w-full bg-white/70 backdrop-blur-md p-8 md:p-16 rounded-3xl shadow-2xl">
          {messages.map((msg, index) => (
            <MessageLine key={index} message={msg.text} icon={msg.icon} index={index} />
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: messages.length * 0.2 + 0.5 }}
            className="mt-12 text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Heart className="text-red-400 fill-red-400" size={50} />
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/distance')}
          className="mt-12 px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-lg rounded-full font-semibold shadow-lg"
        >
          Next →
        </motion.button>
      </div>
    </div>
  );
}
