// Tugma logo (designed by Erica Mae), redrawn as SVG so it stays sharp at any size.
// Two rounded pieces: the dark teal piece's tab fits into the green piece, like a puzzle.
export default function TugmaLogo({ className = '', title }) {
  return (
    <svg viewBox="0 0 240 170" className={className} role={title ? 'img' : undefined}
      aria-label={title} aria-hidden={title ? undefined : true} focusable="false">
      <rect x="110" y="5" width="122" height="160" rx="30" fill="#1f9468" />
      <rect x="8" y="5" width="112" height="160" rx="30" fill="#164a5e" />
      <circle cx="122" cy="80" r="26" fill="#164a5e" />
    </svg>
  );
}
