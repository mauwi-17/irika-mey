import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Backdrop from './components/Backdrop.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import CaseStudy from './pages/CaseStudy.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  const { pathname, hash } = useLocation();

  // On page change: jump to the #section if the link had one, otherwise start at the top.
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Backdrop />
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
