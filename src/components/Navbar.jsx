import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SectionLink from './SectionLink.jsx';
import { useSettings } from '../settings.jsx';
import { ArrowUpRight, Close, Menu, Moon, Sparkle, Sun, Waves } from './Icons.jsx';

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

// Display controls reflect the accessibility focus of the portfolio:
// visitors can switch theme, enlarge text, and stop animations.
function DisplayControls() {
  const { theme, toggleTheme, largeText, toggleLargeText, reducedMotion, toggleReducedMotion } = useSettings();
  return (
    <div className="display-controls" role="group" aria-label="Display settings">
      <button type="button" className="icon-btn" onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        title={theme === 'dark' ? 'Light mode' : 'Dark mode'}>
        {theme === 'dark' ? <Sun /> : <Moon />}
      </button>
      <button type="button" className="icon-btn icon-btn--text" onClick={toggleLargeText}
        aria-pressed={largeText} aria-label="Larger text" title="Larger text">
        Aa
      </button>
      <button type="button" className="icon-btn" onClick={toggleReducedMotion}
        aria-pressed={reducedMotion} aria-label="Reduce motion" title="Reduce motion">
        <Waves />
      </button>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__logo" aria-label="Erica Mae Camintoy, home">
          <span className="chrome-text">mauwey</span>
          <Sparkle className="nav__logo-star" />
        </Link>

        <nav aria-label="Main" className="nav__links">
          {LINKS.map((l) => <SectionLink key={l.id} id={l.id}>{l.label}</SectionLink>)}
        </nav>

        <div className="nav__actions">
          <DisplayControls />
          <SectionLink id="contact" className="btn btn--pink btn--sm nav__cta">
            Let&apos;s talk <ArrowUpRight />
          </SectionLink>
          <button type="button" className="icon-btn nav__menu-btn" aria-expanded={open}
            aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}>
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile" className="container">
          {LINKS.map((l, i) => (
            <SectionLink key={l.id} id={l.id} onNavigate={() => setOpen(false)}>
              <span className="mobile-menu__num">0{i + 1}</span>{l.label}
            </SectionLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
