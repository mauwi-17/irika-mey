// Tells a component when it scrolls into view (used for reveal animations and to
// only play demos while they are visible, which saves battery on phones).
import { useEffect, useRef, useState } from 'react';

export function useInView({ threshold = 0.08, once = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setInView(true); return; }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (once) io.disconnect();
      } else if (!once) {
        setInView(false);
      }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  return [ref, inView];
}
