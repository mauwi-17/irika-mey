// Y2K chrome objects for the project cards. Each one means something:
//   bubble = Askademic (asking a question / booking a consultation)
//   hanger = WearWhat (your wardrobe)
//   puzzle = Tugma ("tugma" means match — two pieces clicking together)
// Pure SVG with a metallic gradient, so it stays sharp at any size and needs no image files.
import { useId } from 'react';

function ChromeDefs({ id }) {
  return (
    <defs>
      <linearGradient id={`${id}-chrome`} x1="0" y1="0" x2="0.35" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="0.28" stopColor="#e4e1ea" />
        <stop offset="0.48" stopColor="#8b8698" />
        <stop offset="0.56" stopColor="#f6f4fa" />
        <stop offset="0.78" stopColor="#b3aec0" />
        <stop offset="1" stopColor="#ffffff" />
      </linearGradient>
      <linearGradient id={`${id}-shine`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
        <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
    </defs>
  );
}

export default function ChromeIcon({ kind, className = '' }) {
  const id = useId().replace(/:/g, '');
  const chrome = `url(#${id}-chrome)`;
  const shine = `url(#${id}-shine)`;

  return (
    <svg viewBox="0 0 120 120" className={`chrome-icon chrome-icon--${kind} ${className}`} aria-hidden="true" focusable="false">
      <ChromeDefs id={id} />

      {kind === 'bubble' && (
        <g>
          <path fill={chrome} stroke="rgba(255,255,255,.7)" strokeWidth="1.2"
            d="M22 14h76a16 16 0 0 1 16 16v42a16 16 0 0 1-16 16H54l-24 20 5-20H22A16 16 0 0 1 6 72V30a16 16 0 0 1 16-16z" />
          <path fill={shine} d="M24 18h72a12 12 0 0 1 12 12v8H12v-8a12 12 0 0 1 12-12z" opacity="0.7" />
          <text x="60" y="68" textAnchor="middle" className="chrome-icon__q">?</text>
        </g>
      )}

      {kind === 'hanger' && (
        <g className="chrome-icon__swing">
          <path fill="none" stroke={chrome} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"
            d="M60 44v-6c0-5 9-6 9-14a9 9 0 0 0-18 0" />
          <path fill="none" stroke={chrome} strokeWidth="9" strokeLinejoin="round"
            d="M60 44 13 80q-6 6 3 7h88q9-1 3-7Z" />
          <path fill="none" stroke="rgba(255,255,255,.85)" strokeWidth="2" strokeLinecap="round" d="M56 50 22 76" />
        </g>
      )}

      {kind === 'puzzle' && (
        <g>
          <path fill={chrome} stroke="rgba(255,255,255,.7)" strokeWidth="1.2"
            d="M14 30h46v20a10 10 0 1 1 0 20v20H14a4 4 0 0 1-4-4V34a4 4 0 0 1 4-4z" />
          <g className="chrome-icon__piece">
            <path fill={chrome} stroke="rgba(255,255,255,.7)" strokeWidth="1.2"
              d="M62 30h44a4 4 0 0 1 4 4v52a4 4 0 0 1-4 4H62V70a10 10 0 1 0 0-20z" />
          </g>
          <path fill={shine} d="M14 32h92v12H14z" opacity="0.45" />
        </g>
      )}
    </svg>
  );
}
