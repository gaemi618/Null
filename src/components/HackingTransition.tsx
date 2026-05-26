import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function HackingTransition({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 1000); // Trigger black flash
    const t2 = setTimeout(() => setStage(2), 2500); // Show "재밌어?"
    const t3 = setTimeout(() => setStage(3), 4500); // Remove "재밌어?"
    const t4 = setTimeout(onComplete, 5500); // Complete transition
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  return (
    <div className={`min-h-screen flex items-center justify-center font-glitch overflow-hidden ${stage === 0 ? 'bg-pink-100 hack-invert' : 'bg-black'}`}>
      {stage === 1 && (
        <div className="fixed inset-0 flash-effect z-50 pointer-events-none"></div>
      )}
      
      <AnimatePresence>
        {stage === 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.3 } }}
            transition={{ duration: 0.1 }}
            className="text-red-600 text-6xl md:text-8xl font-black glitch-text z-40 select-none tracking-tighter"
            data-text="재밌어?"
          >
            재밌어?
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
