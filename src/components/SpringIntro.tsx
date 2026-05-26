import { motion } from 'motion/react';

export function SpringIntro({ onPlay }: { onPlay: () => void }) {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center font-spring text-slate-800 relative overflow-hidden transition-colors duration-1000">
      {/* Soft Spring Decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
      <div className="absolute top-1/4 right-20 w-48 h-48 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-60"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 4, ease: 'easeOut' }}
        className="z-10 text-center flex flex-col items-center justify-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-12 text-pink-600 drop-shadow-sm tracking-tighter">
          무아는 무아지경!
        </h1>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 2 }}
          onClick={onPlay}
          className="px-8 py-4 text-xl md:text-2xl font-bold bg-white text-pink-500 rounded-full shadow-xl hover:shadow-2xl hover:bg-pink-50 hover:-translate-y-1 transition-all cursor-pointer ring-4 ring-pink-200"
        >
          &gt; 플레이하기
        </motion.button>
      </motion.div>
    </div>
  );
}
