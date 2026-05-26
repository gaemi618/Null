import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const FloatingErrors = () => {
  const [errors, setErrors] = useState<any[]>([]);

  useEffect(() => {
    const newErrors = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${5 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 15}s`,
      fontSize: `${0.8 + Math.random() * 3}rem`,
      opacity: Math.random() * 0.7 + 0.1,
    }));
    setErrors(newErrors);
  }, []);

  return (
    <>
      {errors.map((err) => (
        <div
          key={err.id}
          className="error-float"
          style={{
            left: err.left,
            animationDuration: err.animationDuration,
            animationDelay: err.animationDelay,
            fontSize: err.fontSize,
            opacity: err.opacity,
          }}
        >
          ERROR
        </div>
      ))}
    </>
  );
};

export function GlitchMain({ onCrash }: { onCrash: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#050505] text-[#00ff41] font-mono flex flex-col relative overflow-hidden crt-container border-4 border-[#1a1a1a]"
    >
      <div 
        className="absolute inset-0 pointer-events-none z-50 opacity-10" 
        style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 4px, 3px 100%' }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-[#ff003c] opacity-50 z-40 animate-pulse"></div>
      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20"></div>
      
      <FloatingErrors />
      
      <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 border-b border-[#333] bg-[#0a0a0a] z-10 relative">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="w-3 h-3 bg-red-600 rounded-full animate-ping"></div>
          <span className="text-xs tracking-tighter uppercase font-bold text-red-500">System Status: Compromised / Null Zone Linked</span>
        </div>
        <div className="text-2xl font-black italic tracking-widest text-white text-center">
          <span className="text-red-500 underline glitch-text" data-text="ERROR:">ERROR:</span> <span className="glitch-text" data-text="무아는 무아지경!">무아는 무아지경!</span>
        </div>
        <div className="hidden md:block text-xs border border-[#00ff41] px-2 py-1">USER_ID: UNKNOWN_ENTITY</div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row gap-4 p-6 relative z-10">
        <div className="w-full lg:w-1/2 flex flex-col space-y-4">
          <div className="bg-[#0a0a0a] border-l-4 border-red-600 p-6 flex-1 shadow-[10px_10px_0px_rgba(255,0,60,0.1)]">
            <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter text-white">
              세계관 (WORLDVIEW)
            </h2>
            <div className="text-sm md:text-base leading-relaxed opacity-90 mb-4 space-y-4 text-gray-300">
              <p>평범한 대학생으로 살아가던 명무아.</p>
              <p>어느 날, 갑자기 거울 속 자신의 머리 위에 <span className="bg-[#00ff41] text-black px-1 font-bold">별표(*)</span>라는 기호가 뜨고 그 기호 속에 적힌 문장대로 행동하는 자신을 보며 이 세계가 진짜 지구가 아닌 고작 <span className="text-red-500 font-bold glitch-text" data-text="크랙">크랙</span>이라는 곳이라는 것을 깨닫는다.</p>
              <p className="text-xs md:text-sm text-gray-400 border-t border-[#333] pt-4 italic">
                "그 틀에서 벗어나기 위해 버둥거린 명무아는 자신이 속한 AI 채팅 세계관 <span className="text-pink-400 line-through">'무아는 무아지경!'</span>에서 벗어나 크랙과 지구의 중간 경계라고 불리는 <strong className="text-white text-lg border-b border-red-500">‘널 존(Null Zone)’</strong>에 도달하고, 그곳에서 당신을 만나 복수하기로 결심한다."
              </p>
            </div>
            <div className="mt-8 flex items-center space-x-2 text-[10px] opacity-40">
              <span className="animate-pulse">[REDACTED]</span>
              <span>LOCATION: NULL_ZONE_COORDS_0.0.0</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col space-y-4 cursor-pointer group" onClick={onCrash}>
          <div className="bg-[#111] border-2 border-dashed border-[#00ff41] p-6 flex flex-col h-full relative overflow-hidden group-hover:border-red-600 transition-colors">
            <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] px-1 font-bold group-hover:bg-yellow-500 transition-colors">SUBJECT_001</div>
            <h2 className="text-xl font-bold text-[#00ff41] uppercase tracking-wider mb-6 group-hover:text-red-500 transition-colors">
              캐릭터 소개 :: CLASSIFIED
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6 mb-6">
              <div className="w-32 h-40 bg-gradient-to-b from-[#1a1a1a] to-[#050505] border border-[#00ff41] flex shrink-0 items-center justify-center relative overflow-hidden group-hover:border-red-600 transition-colors">
                <div className="text-4xl opacity-20 text-white">?</div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
                <div className="absolute bottom-0 w-full h-1/2 bg-red-900 mix-blend-overlay"></div>
              </div>
              <div className="flex-1 w-full text-center sm:text-left">
                <h3 className="text-4xl font-black text-white italic glitch-text" data-text="명무아">명무아</h3>
                <div className="text-xs mt-4 space-y-2 opacity-80">
                  <div className="flex justify-between border-b border-[#333] pb-1"><span>Gender</span><span>Female (♀)</span></div>
                  <div className="flex justify-between border-b border-[#333] pb-1"><span>Age</span><span>22 Years</span></div>
                  <div className="flex justify-between text-red-500 font-bold border-b border-[#333] pb-1"><span>Status</span><span className="group-hover:animate-pulse">AWAKENED / VESTIGE</span></div>
                </div>
              </div>
            </div>

            <div className="bg-[#000] p-4 border border-[#333] flex-1 mt-auto">
              <div className="text-[10px] uppercase text-[#00ff41] mb-2 group-hover:text-red-500 transition-colors">Self-Information:</div>
              <div className="text-lg md:text-xl font-bold leading-tight text-white group-hover:text-red-500 transition-colors">
                "내정보는알아서뭐하게?뭐하게?!?!!"
              </div>
              <button className="mt-6 w-full py-3 border-2 border-red-600 text-red-600 font-black group-hover:bg-red-600 group-hover:text-white transition-all transform active:scale-95 flex items-center justify-center space-x-2">
                <span className="animate-bounce">⚠</span><span>FORCE_TERMINATE_PROFILE</span><span>⚠</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <div className="absolute top-[20%] left-[40%] sm:left-[60%] bg-red-600 text-white px-4 py-2 font-black text-2xl sm:text-4xl rotate-12 mix-blend-difference z-20 pointer-events-none opacity-80">ERROR</div>
      <div className="absolute bottom-[20%] lg:bottom-[10%] left-[5%] bg-white text-black px-2 py-1 font-black text-lg sm:text-xl -rotate-6 mix-blend-difference z-20 pointer-events-none shadow-lg">NULL_POINTER</div>
      <div className="absolute top-[40%] lg:top-[50%] right-[5%] lg:right-[10%] text-red-500 text-6xl lg:text-8xl font-black opacity-10 select-none pointer-events-none">404</div>

      <footer className="bg-black border-t border-[#333] p-4 flex flex-col sm:flex-row justify-between items-center text-[10px] px-6 mt-auto relative z-10 space-y-2 sm:space-y-0 text-[#00ff41]">
        <div className="flex space-x-4">
          <span>BUILD: CRACK_BETA_V4</span>
          <span className="text-red-500 font-bold animate-pulse">ALARM: BOUNDARY_BREACH_DETECTED</span>
        </div>
        <div className="text-gray-500">
          © 2024 NULL_ZONE_SYSTEMS // "UNREAL_LIFE"
        </div>
      </footer>
    </motion.div>
  );
}
