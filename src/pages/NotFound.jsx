import { Link } from 'react-router-dom';
import { ArrowLeft } from '../components/Icons.jsx';

export default function NotFound() {
  return (
    <section className="container notfound">
      <p className="label label--pink">Error 404</p>
      <h1 className="chrome-text">Lost in space.</h1>
      <p>This page drifted out of orbit.</p>
      <Link to="/" className="btn btn--pink"><ArrowLeft /> Back home</Link>
    </section>
  );
}
