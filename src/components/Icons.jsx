// Small inline SVG icons. aria-hidden because each button/link next to them has its own text label.
const base = {
  width: '1em', height: '1em', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
  strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: 'false',
};
const make = (children) => {
  const Icon = (props) => <svg {...base} {...props}>{children}</svg>;
  return Icon;
};

export const ArrowUpRight = make(<path d="M7 17 17 7M8 7h9v9" />);
export const ArrowDown = make(<path d="M12 5v14M5 12l7 7 7-7" />);
export const ArrowLeft = make(<path d="M19 12H5M12 19l-7-7 7-7" />);
export const ArrowRight = make(<path d="M5 12h14M12 5l7 7-7 7" />);
export const Sun = make(<><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>);
export const Moon = make(<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />);
export const Menu = make(<path d="M4 7h16M4 12h16M4 17h16" />);
export const Close = make(<path d="M6 6l12 12M18 6 6 18" />);
export const Check = make(<path d="M5 12.5l4.5 4.5L19 7.5" />);
export const Pause = make(<><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></>);
export const Play = make(<path d="M7 5v14l12-7z" />);
export const Heart = make(<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />);
export const Lock = make(<><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>);
export const Mail = make(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>);
export const Waves = make(<path d="M3 12c3-6 6 6 9 0s6 6 9 0" />);
export const Clock = make(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>);
export const XMark = make(<path d="M7 7l10 10M17 7 7 17" />);
export const Upload = make(<path d="M12 16V4M6 10l6-6 6 6M4 20h16" />);

export const Sparkle = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
    <path d="M12 0C12.6 7.2 16.8 11.4 24 12 16.8 12.6 12.6 16.8 12 24 11.4 16.8 7.2 12.6 0 12 7.2 11.4 11.4 7.2 12 0Z" />
  </svg>
);
