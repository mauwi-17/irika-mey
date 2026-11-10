// Decorative Y2K background: starfield, twinkling sparkles, and film grain.
// aria-hidden because it carries no information for screen readers.
import { Sparkle } from './Icons.jsx';

const SPARKLES = [
  { top: '12%', left: '6%', size: 14, delay: 0 },
  { top: '22%', left: '88%', size: 22, delay: 1.2 },
  { top: '48%', left: '94%', size: 10, delay: 2.1 },
  { top: '64%', left: '3%', size: 18, delay: 0.6 },
  { top: '82%', left: '72%', size: 12, delay: 1.7 },
  { top: '36%', left: '48%', size: 8, delay: 2.6 },
];

export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="stars" />
      <div className="glow-blob glow-blob--a" />
      <div className="glow-blob glow-blob--b" />
      {SPARKLES.map((s, i) => (
        <Sparkle
          key={i}
          className="float-sparkle"
          style={{ top: s.top, left: s.left, fontSize: s.size, animationDelay: `${s.delay}s` }}
        />
      ))}
      <div className="grain" />
    </div>
  );
}
