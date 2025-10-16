import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Feather } from 'lucide-react';
import { useEffect, useState } from 'react';

const letterContent = `Dear Butti,

As I sit here writing this, I can't help but smile thinking about how our friendship came to be. Life has a funny way of connecting souls, doesn't it? We're the bestest of friends, yet we've never met face to face. We've never shared the same room, never heard each other's laughter echo in person, yet somehow, you feel closer than people I see every day.

Isn't it amazing how two people who have never met can understand each other so deeply? We've built this incredible bond across screens and distance, proving that the strongest friendships don't need physical presence to be real.

You've been my comfort on difficult days, my joy during celebrations, and my peace in moments of chaos. Your words have healed parts of me I didn't even know were broken. You've taught me that distance is just a number when hearts are connected.

I want you to know that you are cherished beyond measure. Every message from you brightens my day. Every conversation we have reminds me how lucky I am to have found you in this vast digital world.

Thank you for being authentically you. Thank you for accepting me as I am. Thank you for this beautiful friendship that defies all odds — a friendship that exists purely through screens but feels more real than anything.

No matter where life takes us, no matter how busy we get, and even if we never meet in person, please remember — you have a permanent place in my heart.

With all my love and gratitude,
Your bestest friend, always 💕`;

export default function Letter() {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < letterContent.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + letterContent[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 30px,
            #d97706 30px,
            #d97706 31px
          )`
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Feather className="text-amber-700" size={48} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl w-full bg-white/95 backdrop-blur-sm p-8 md:p-16 rounded-lg shadow-2xl border-2 border-amber-200"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #fffbeb 0%, #fef3c7 100%)',
          }}
        >
          <div className="prose prose-lg max-w-none">
            <pre
              className="whitespace-pre-wrap font-serif text-gray-800 leading-relaxed text-base md:text-lg"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {displayedText}
              {currentIndex < letterContent.length && (
                <span className="animate-pulse">|</span>
              )}
            </pre>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: currentIndex >= letterContent.length ? 1 : 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/dream')}
          className="mt-12 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-lg rounded-full font-semibold shadow-lg"
        >
          Continue →
        </motion.button>
      </div>
    </div>
  );
}
