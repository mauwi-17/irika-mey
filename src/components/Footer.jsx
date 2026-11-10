import { profile } from '../data/profile.js';
import { Sparkle } from './Icons.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="label">Designed with care <Sparkle className="inline-star" /> Built in React</p>
      </div>
    </footer>
  );
}
