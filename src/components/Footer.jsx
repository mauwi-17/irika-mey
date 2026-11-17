import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="label">Designed with care <span className="dot" aria-hidden="true" /> Built in React</p>
      </div>
    </footer>
  );
}
