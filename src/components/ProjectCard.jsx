import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkle } from './Icons.jsx';

// The whole card is one link (bigger tap target), with a clear "View case study" label inside it.
export default function ProjectCard({ project, featured = false }) {
  const p = project;
  return (
    <Link to={`/work/${p.slug}`} className={`project-card project-card--${p.slug} ${featured ? 'project-card--featured' : ''}`}>
      <div className="project-card__visual" aria-hidden="true">
        <span className="label">System / {p.index}</span>
        <span className="project-card__num">{p.index}</span>
        <span className="orb" />
        <span className="ring" />
        <Sparkle className="project-card__star" />
        <span className="project-card__wordmark chrome-text">{p.title}</span>
      </div>

      <div className="project-card__body">
        <p className="label label--pink">
          {featured ? 'Featured · ' : ''}{p.kind}
        </p>
        <h3 className="project-card__title">{p.title}</h3>
        <p className="project-card__summary">{p.summary}</p>
        <p className="project-card__meta">{p.meta.role}</p>
        <span className={featured ? 'btn btn--pink' : 'link-arrow'}>
          View case study <ArrowUpRight />
        </span>
      </div>
    </Link>
  );
}
