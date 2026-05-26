import { useState, useEffect } from 'react';
import { SpringIntro } from './components/SpringIntro';
import { HackingTransition } from './components/HackingTransition';
import { GlitchMain } from './components/GlitchMain';
import { CrashLogs } from './components/CrashLogs';

type Phase = 'INIT' | 'SPRING' | 'HACKING' | 'MAIN' | 'CRASHING' | 'CRASHED' | 'LOGS';

export default function App() {
  const [phase, setPhase] = useState<Phase>('INIT');

  useEffect(() => {
    const hasCrashed = localStorage.getItem('mua_has_crashed');
    if (hasCrashed === 'true') {
      setPhase('LOGS');
    } else {
      setPhase('SPRING');
    }
  }, []);

  const handleCrash = () => {
    if (phase === 'CRASHING') return;
    setPhase('CRASHING');
    
    // Sequence: shake violenty for 1.5s, then turn screen black and persist crash state.
    setTimeout(() => {
      setPhase('CRASHED');
      localStorage.setItem('mua_has_crashed', 'true');
    }, 1500);
  };

  const handleReset = () => {
    localStorage.removeItem('mua_has_crashed');
    setPhase('SPRING');
  };

  if (phase === 'INIT') return null;
  if (phase === 'LOGS') return <CrashLogs onReset={handleReset} />;
  if (phase === 'CRASHED') return <div className="min-h-screen bg-black w-full h-full fixed inset-0 z-[9999]" />;

  return (
    <div className={phase === 'CRASHING' ? 'violent-shake h-screen overflow-hidden bg-black' : 'min-h-screen'}>
      {phase === 'SPRING' && <SpringIntro onPlay={() => setPhase('HACKING')} />}
      {phase === 'HACKING' && <HackingTransition onComplete={() => setPhase('MAIN')} />}
      {(phase === 'MAIN' || phase === 'CRASHING') && <GlitchMain onCrash={handleCrash} />}
    </div>
  );
}
