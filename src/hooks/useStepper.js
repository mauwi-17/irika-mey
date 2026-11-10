// Drives the interactive demos: steps auto-advance while the demo is visible and playing.
// Clicking a step pauses autoplay so the visitor stays in control.
import { useEffect, useState } from 'react';
import { useInView } from './useInView';
import { useSettings } from '../settings.jsx';

export function useStepper(count, interval = 3200) {
  const { reducedMotion } = useSettings();
  const [ref, inView] = useInView({ threshold: 0.35, once: false });
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(!reducedMotion);

  useEffect(() => { if (reducedMotion) setIsPlaying(false); }, [reducedMotion]);

  // `step` is a dependency so the timer restarts after every change (each step gets its full time).
  useEffect(() => {
    if (!isPlaying || !inView) return;
    const id = setTimeout(() => setStep((s) => (s + 1) % count), interval);
    return () => clearTimeout(id);
  }, [isPlaying, inView, count, interval, step]);

  const go = (i) => { setStep(i); setIsPlaying(false); };
  const toggle = () => setIsPlaying((p) => !p);

  return { ref, step, go, isPlaying, running: isPlaying && inView, toggle, interval };
}
