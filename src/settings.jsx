// Display settings (theme, larger text, reduced motion) shared across the app with React Context.
// They are saved in localStorage so the visitor's choice is remembered.
import { createContext, useContext, useEffect, useState } from 'react';

const SettingsContext = createContext(null);

const read = (key) => {
  try { return localStorage.getItem(key); } catch { return null; }
};
const write = (key, value) => {
  try { localStorage.setItem(key, value); } catch { /* storage blocked: setting just won't persist */ }
};

export function SettingsProvider({ children }) {
  const [theme, setTheme] = useState(() => read('theme') || 'dark');
  const [largeText, setLargeText] = useState(() => read('largeText') === '1');
  const [reducedMotion, setReducedMotion] = useState(() => {
    const saved = read('reducedMotion');
    if (saved !== null) return saved === '1';
    // Respect the operating system's "reduce motion" preference by default.
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    write('theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    if (largeText) root.dataset.text = 'large'; else delete root.dataset.text;
    write('largeText', largeText ? '1' : '0');
  }, [largeText]);

  useEffect(() => {
    const root = document.documentElement;
    if (reducedMotion) root.dataset.motion = 'reduced'; else delete root.dataset.motion;
    write('reducedMotion', reducedMotion ? '1' : '0');
  }, [reducedMotion]);

  const value = {
    theme,
    toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    largeText,
    toggleLargeText: () => setLargeText((v) => !v),
    reducedMotion,
    toggleReducedMotion: () => setReducedMotion((v) => !v),
  };

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export const useSettings = () => useContext(SettingsContext);
