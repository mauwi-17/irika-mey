// Link to a section on the home page (e.g. #work). Works from any page:
// on the home page it smooth-scrolls; from a case study it navigates home, then scrolls.
import { Link, useLocation } from 'react-router-dom';

export default function SectionLink({ id, children, onNavigate, ...rest }) {
  const { pathname } = useLocation();

  const handleClick = (e) => {
    onNavigate?.();
    if (pathname !== '/') return; // let the router navigate to "/#id"
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <Link to={{ pathname: '/', hash: `#${id}` }} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
