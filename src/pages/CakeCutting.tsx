import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Cake, Sparkles, PartyPopper } from 'lucide-react';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import cakeImage from '../assets/cake-removebg-preview.png';

const TOTAL_SLICES = 6;

const CakeSlice = ({
  index,
  isRemoved,
  onClick,
  showSparkle,
}: {
  index: number;
  isRemoved: boolean;
  onClick: () => void;
  showSparkle: boolean;
}) => {
  const rotation = index * 60;
  const radius = 140;

  if (isRemoved) return null;

  const startAngle = (rotation - 30) * (Math.PI / 180);
  const endAngle = (rotation + 30) * (Math.PI / 180);

  const centerX = 50;
  const centerY = 50;

  const x1 = centerX + radius * Math.cos(startAngle);
  const y1 = centerY + radius * Math.sin(startAngle);
  const x2 = centerX + radius * Math.cos(endAngle);
  const y2 = centerY + radius * Math.sin(endAngle);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{
          opacity: 0,
          y: -80,
          x: Math.cos((rotation * Math.PI) / 180) * 100,
          scale: 0.6,
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        onClick={onClick}
        whileHover={{ scale: 1.05, y: -8 }}
        className="absolute inset-0 cursor-pointer"
        style={{
          clipPath: `polygon(50% 50%, ${x1}% ${y1}%, ${x2}% ${y2}%)`,
          transformOrigin: 'center center',
        }}
      >
        <img
          src={cakeImage}
          alt="cake slice"
          className="w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
      </motion.div>

      {showSparkle && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: [1, 2.5, 3], opacity: [1, 0.6, 0] }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <motion.div
                key={angle}
                className="absolute w-1 h-8 bg-gradient-to-t from-yellow-400 to-yellow-200 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  transformOrigin: 'center 0',
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                }}
                initial={{ height: 0, opacity: 1 }}
                animate={{ height: 40, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            ))}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-300 rounded-full" />
          </motion.div>
        </div>
      )}
    </>
  );
};

const Balloon = ({ delay, color }: { delay: number; color: string }) => {
  const startX = Math.random() * 100;

  return (
    <motion.div
      initial={{ y: 600, x: `${startX}vw`, opacity: 0 }}
      animate={{
        y: -200,
        x: `${startX + (Math.random() - 0.5) * 20}vw`,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 5,
        delay,
        ease: "easeOut",
      }}
      className="absolute"
    >
      <svg width="60" height="85" viewBox="0 0 60 85">
        <defs>
          <radialGradient id={`balloonGradient-${color}-${delay}`}>
            <stop offset="30%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.6" />
          </radialGradient>
        </defs>
        <ellipse cx="30" cy="35" rx="25" ry="32" fill={`url(#balloonGradient-${color}-${delay})`} stroke="#fff" strokeWidth="2" />
        <ellipse cx="25" cy="28" rx="8" ry="12" fill="#fff" opacity="0.4" />
        <path d="M 30 67 Q 30 74 30 80" stroke={color} strokeWidth="2" fill="none" />
        <path d="M 30 80 L 25 82 L 30 85 L 35 82 Z" fill={color} />
      </svg>
    </motion.div>
  );
};

export default function CakeCutting() {
  const navigate = useNavigate();
  const [slicesRemoved, setSlicesRemoved] = useState<boolean[]>(new Array(TOTAL_SLICES).fill(false));
  const [sparkleIndex, setSparkleIndex] = useState<number | null>(null);
  const [sliceCount, setSliceCount] = useState(0);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);

  const handleSliceClick = (index: number) => {
    if (slicesRemoved[index] || isCelebrating) return;

    setSparkleIndex(index);

    setTimeout(() => {
      const newSlicesRemoved = [...slicesRemoved];
      newSlicesRemoved[index] = true;
      setSlicesRemoved(newSlicesRemoved);
      setSliceCount((prev) => prev + 1);
      setSparkleIndex(null);

      if (sliceCount + 1 === TOTAL_SLICES) {
        setTimeout(() => startCelebration(), 500);
      }
    }, 300);
  };

  const startCelebration = () => {
    setIsCelebrating(true);
    setShowBalloons(true);

    const duration = 5000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      confetti({
        particleCount: 60,
        startVelocity: 70,
        spread: 360,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
        colors: ['#ec4899', '#a78bfa', '#fbbf24', '#f87171', '#34d399', '#ffc0cb'],
        shapes: ['circle', 'square'],
        scalar: 1.2,
      });
    }, 150);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      {showBalloons && (
        <>
          {[...Array(25)].map((_, i) => (
            <Balloon
              key={i}
              delay={i * 0.12}
              color={['#ec4899', '#a78bfa', '#fbbf24', '#d4af37'][i % 4]}
            />
          ))}
        </>
      )}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Cake className="text-pink-600" size={60} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-purple-900 mb-2 text-center"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          Happy Cake Cutting — For Butti 🎉
        </motion.h1>

        <AnimatePresence mode="wait">
          {!isCelebrating ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-purple-700 mb-8 text-center"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {sliceCount === 0 ? (
                <>Make a wish, Butti… then click to cut your cake 🎂</>
              ) : (
                <>Slice {sliceCount} of {TOTAL_SLICES} 🎂</>
              )}
            </motion.p>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center max-w-2xl mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: 5 }}
                className="inline-block mb-4"
              >
                <PartyPopper className="text-yellow-500" size={80} />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-3xl md:text-5xl font-bold text-purple-900 mb-4"
                style={{ fontFamily: 'Dancing Script, cursive', textShadow: '0 0 20px rgba(236, 72, 153, 0.5)' }}
              >
                🎉 Yay Butti! You've cut your cake!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-xl md:text-2xl text-purple-700"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                May your life be filled with sweetness and smiles forever 💕
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{
            y: 0,
            opacity: isCelebrating && slicesRemoved.every(s => s) ? 0 : 1,
            scale: isCelebrating && slicesRemoved.every(s => s) ? 0.5 : 1,
          }}
          transition={{ delay: 0.6, type: "spring", bounce: 0.4 }}
          className="relative mb-8"
        >
          <div className="relative w-[400px] h-[400px] max-w-[90vw] max-h-[90vw]">
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))',
              }}
            >
              <motion.img
                src={cakeImage}
                alt="Birthday Cake"
                className="w-full h-full object-contain pointer-events-none select-none"
                draggable={false}
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
              />
            </motion.div>

            <div className="absolute inset-0">
              <AnimatePresence>
                {slicesRemoved.map((isRemoved, index) => (
                  <CakeSlice
                    key={index}
                    index={index}
                    isRemoved={isRemoved}
                    onClick={() => handleSliceClick(index)}
                    showSparkle={sparkleIndex === index}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>

          {!isCelebrating && sliceCount === 0 && (
            <motion.div
              animate={{ scale: [1, 1.1, 1], y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
            >
              <Sparkles className="text-yellow-500" size={24} />
              <p className="text-purple-600 font-semibold text-lg">Click the cake to cut slices!</p>
              <Sparkles className="text-yellow-500" size={24} />
            </motion.div>
          )}
        </motion.div>

        <AnimatePresence>
          {isCelebrating && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/thank-you')}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg rounded-full font-semibold shadow-lg"
            >
              Next Surprise 💌
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
