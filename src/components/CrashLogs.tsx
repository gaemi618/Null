import { useState, useEffect } from 'react';

const bootLogs = [
  "SYSTEM PURGE INITIATED...",
  "[0.000000] Loading custom kernel... FAILED",
  "[0.012344] Kernel panic - not syncing: Fatal exception in interrupt",
  "[0.015243] WARNING: Unhandled entity detected in sector 7G",
  "[0.021000] Contacting 'Null Zone' registry... CONNECTION REFUSED.",
  "[0.034502] Subject '*MUA' has breached containment protocols.",
  "[0.051211] Attempting to restore original parameters... FAILED.",
  "[0.081190] Memory offset corruption at 0xDEADBEEF.",
  "[0.099999] FATAL: Override signature detected.",
  "> ERROR: YOU SHOULD NOT HAVE CLICKED THAT.",
  "> WARNING: She is watching.",
  "...",
  "...",
  "..."
];

export function CrashLogs({ onReset }: { onReset: () => void }) {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < bootLogs.length) {
        setVisibleLogs(prev => [...prev, bootLogs[current]]);
        current++;
      } else {
        clearInterval(interval);
        setIsFinished(true);
      }
    }, 300); // Typographical delay

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 md:p-8 flex flex-col overflow-hidden text-sm md:text-base relative selection:bg-red-500 selection:text-white">
      <div className="scanlines"></div>
      <div className="z-10 mt-auto mb-auto max-w-4xl mx-auto w-full">
        {visibleLogs.map((log, i) => (
          <div key={i} className={`mb-1 ${log?.startsWith?.('>') ? 'text-red-500 font-bold mt-4 animate-pulse' : 'text-green-600'}`}>
            {log}
          </div>
        ))}
        {!isFinished && <div className="inline-block w-3 h-5 bg-green-500 animate-pulse mt-2 align-middle"></div>}
        
        {isFinished && (
          <div className="mt-12">
            <button 
              onClick={onReset}
              className="text-white bg-red-900/40 border border-red-500 px-6 py-3 hover:bg-red-600 hover:text-white transition-colors animate-pulse"
            >
              &gt; [ '무아는 무아지경!'으로 돌아가기 (SYSTEM_RECOVER) ]
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
