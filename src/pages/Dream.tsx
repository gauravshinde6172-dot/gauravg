import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sunset, Users, Building2 } from 'lucide-react';
import { useRef } from 'react';

export default function Dream() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const sunsetY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const sunsetOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const silhouetteY = useTransform(scrollYProgress, [0.2, 0.6], [100, -50]);
  const silhouetteOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 1, 0]);

  const cityY = useTransform(scrollYProgress, [0.4, 0.8], [100, -50]);
  const cityOpacity = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 1, 1]);

  const quoteY = useTransform(scrollYProgress, [0.6, 1], [100, 0]);
  const quoteOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  return (
    <div ref={containerRef} className="relative bg-gradient-to-b from-orange-300 via-pink-300 to-purple-900" style={{ height: '400vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ y: sunsetY, opacity: sunsetOpacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Sunset className="text-orange-500 mx-auto mb-8" size={100} />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
              If We Meet One Day...
            </h2>
          </div>
        </motion.div>

        <motion.div
          style={{ y: silhouetteY, opacity: silhouetteOpacity }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="text-center max-w-3xl">
            <Users className="text-pink-300 mx-auto mb-8" size={120} />
            <p className="text-3xl md:text-4xl text-white leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              We'll laugh about how nervous we were. We'll hug like we've known each other forever.
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ y: cityY, opacity: cityOpacity }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="text-center max-w-3xl">
            <Building2 className="text-purple-300 mx-auto mb-8" size={120} />
            <p className="text-3xl md:text-4xl text-white leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              We'll walk through the city lights, creating memories that pictures can't capture.
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ y: quoteY, opacity: quoteOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6"
        >
          <div className="text-center max-w-4xl bg-white/10 backdrop-blur-md p-12 rounded-3xl">
            <p className="text-3xl md:text-5xl text-white leading-relaxed mb-8" style={{ fontFamily: 'Dancing Script, cursive' }}>
              "We may never meet, but that doesn't make this any less real. You're my bestest friend, across screens and beyond."
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/memories')}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg rounded-full font-semibold shadow-lg"
            >
              Continue →
            </motion.button>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↓ Scroll to explore ↓
          </motion.div>
        </div>
      </div>
    </div>
  );
}
