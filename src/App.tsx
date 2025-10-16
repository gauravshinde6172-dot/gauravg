import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import FloatingHeartCursor from './components/FloatingHeartCursor';
import HomePage from './pages/HomePage';
import HowWeMet from './pages/HowWeMet';
import WhatYouMean from './pages/WhatYouMean';
import Distance from './pages/Distance';
import BestWishes from './pages/BestWishes';
import Letter from './pages/Letter';
import Dream from './pages/Dream';
import Memories from './pages/Memories';
import Promise from './pages/Promise';
import VirtualImage from './pages/VirtualImage';
import CakeCutting from './pages/CakeCutting';
import ThankYou from './pages/ThankYou';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
    sessionStorage.setItem('hasVisited', 'true');
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!loading && (
        <>
          <FloatingHeartCursor />
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/how-we-met" element={<HowWeMet />} />
              <Route path="/what-you-mean" element={<WhatYouMean />} />
              <Route path="/distance" element={<Distance />} />
              <Route path="/wishes" element={<BestWishes />} />
              <Route path="/letter" element={<Letter />} />
              <Route path="/dream" element={<Dream />} />
              <Route path="/memories" element={<Memories />} />
              <Route path="/promise" element={<Promise />} />
              <Route path="/virtual-image" element={<VirtualImage />} />
              <Route path="/cake-cutting" element={<CakeCutting />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
