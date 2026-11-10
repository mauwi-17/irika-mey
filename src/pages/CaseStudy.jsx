import { Link, useParams } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import SectionLink from '../components/SectionLink.jsx';
import NotFound from './NotFound.jsx';
import { getProject, projects } from '../data/projects.js';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Sparkle } from '../components/Icons.jsx';
import AskademicDemo from '../components/demos/AskademicDemo.jsx';
import WearWhatDemo from '../components/demos/WearWhatDemo.jsx';
import TugmaDemo from '../components/demos/TugmaDemo.jsx';

const DEMOS = { askademic: AskademicDemo, wearwhat: WearWhatDemo, tugma: TugmaDemo };

// One numbered section of the case study.
function Block({ id, num, title, children }) {
  return (
    <Reveal as="section" id={id} className="cs-block" aria-labelledby={`${id}-title`}>
      <p className="label label--pink">{num}</p>
      <h2 id={`${id}-title`} className="cs-block__title">{title}</h2>
      {children}
    </Reveal>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const p = getProject(slug);
  if (!p) return <NotFound />;

  const Demo = DEMOS[p.demo];
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  let n = 0;
  const num = () => String(++n).padStart(2, '0');

  return (
    <article className={`case case--${p.slug}`}>
      {/* ---------- Hero ---------- */}
      <header className="case__hero container">
        <SectionLink id="work" className="back-link"><ArrowLeft /> All work</SectionLink>
        <p className="label">
          Case study {p.index} <Sparkle className="inline-star" /> {p.featured ? 'Featured · ' : ''}{p.kind}
        </p>
        <h1 className="case__title chrome-text shimmer">{p.title}</h1>
        {p.formerly && <p className="case__formerly">formerly {p.formerly}</p>}
        <p className="case__tagline">{p.tagline}</p>

        <dl className="case__meta">
          <div><dt>My role</dt><dd>{p.meta.role}</dd></div>
          <div><dt>Team</dt><dd>{p.meta.team}</dd></div>
          <div><dt>Duration</dt><dd>{p.meta.duration}</dd></div>
          <div><dt>Platform</dt><dd>{p.meta.platform}</dd></div>
        </dl>

        <div className="hero__actions">
          <a className="btn btn--pink" href={p.live} target="_blank" rel="noreferrer">
            Visit live site <ArrowUpRight /><span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a className="btn btn--ghost" href="#demo">See it in motion</a>
        </div>
      </header>

      {/* ---------- Interactive demo ---------- */}
      {Demo && (
        <section id="demo" className="container case__demo" aria-labelledby="demo-title">
          <h2 id="demo-title" className="sr-only">Interactive preview of {p.title}</h2>
          <Demo />
        </section>
      )}

      <div className="container case__body">
        <Block id="overview" num={`${num()} / Project overview`} title="The product">
          <p className="cs-lead">{p.product}</p>
          {p.context && <p className="cs-muted">{p.context}</p>}
          <div className="cs-grid cs-grid--2">
            {p.users.map((u) => (
              <div key={u.who} className="cs-card">
                <p className="label">Target user</p>
                <h3>{u.who}</h3>
                <p>{u.who} {u.need}</p>
              </div>
            ))}
          </div>
          {p.stack?.length > 0 && (
            <ul className="chips" aria-label="Tech stack">
              {p.stack.map((s) => <li key={s} className="chip chip--plain">{s}</li>)}
            </ul>
          )}
        </Block>

        <Block id="problem" num={`${num()} / Problem & goal`} title="Why it needed to exist">
          <div className="cs-grid cs-grid--2">
            <div className="cs-card cs-card--problem"><p className="label">The problem</p><p>{p.problem}</p></div>
            <div className="cs-card cs-card--goal"><p className="label">The goal</p><p>{p.goal}</p></div>
          </div>
        </Block>

        <Block id="role" num={`${num()} / My role`} title={p.myRole.title}>
          <div className="role-box">
            <Sparkle className="role-box__star" aria-hidden="true" />
            <p className="role-box__team">{p.meta.team}</p>
            <p className="role-box__text">{p.myRole.contribution}</p>
            <ul className="chips" aria-label="Responsibilities">
              {p.myRole.responsibilities.map((r) => <li key={r} className="chip"><Check />{r}</li>)}
            </ul>
          </div>
        </Block>

        {p.painPoints.length > 0 && (
          <Block id="users" num={`${num()} / Understanding the user`} title="Pain points">
            <ol className="cs-grid cs-grid--2 pain-list">
              {p.painPoints.map((pp, i) => (
                <li key={pp.title} className="cs-card">
                  <span className="pain-list__num">{i + 1}</span>
                  <h3>{pp.title}</h3>
                  <p>{pp.text}</p>
                </li>
              ))}
            </ol>
          </Block>
        )}

        <Block id="process" num={`${num()} / Process`} title="How it works">
          <ol className="flow">
            {p.process.map((s, i) => (
              <li key={s.title} className="flow__step">
                <span className="flow__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </Block>

        <Block id="features" num={`${num()} / Final result`} title="Key features">
          <div className="cs-grid cs-grid--features">
            {p.features.map((f) => (
              <div key={f.group} className="cs-card">
                <h3>{f.group}</h3>
                <ul className="tick-list">{f.items.map((i) => <li key={i}><Check />{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </Block>

        <Block id="a11y" num={`${num()} / Accessibility`} title="Designing for everyone">
          <ol className="a11y-list">
            {p.accessibility.map((a, i) => <li key={a}><span>{i + 1}</span><p>{a}</p></li>)}
          </ol>
        </Block>

        <Block id="takeaways" num={`${num()} / Takeaways`} title="Going forward">
          <div className="cs-grid cs-grid--2">
            <div className="cs-card"><p className="label">What I learned</p><p>{p.learned}</p></div>
            <div className="cs-card">
              <p className="label">Next steps</p>
              <ol className="tick-list tick-list--num">{p.nextSteps.map((s) => <li key={s}>{s}</li>)}</ol>
            </div>
          </div>
        </Block>

        <Reveal className="next-project">
          <p className="label">Next case study</p>
          <Link to={`/work/${next.slug}`} className="next-project__link">
            <span className="chrome-text">{next.title}</span> <ArrowRight />
          </Link>
          <p className="cs-muted">{next.tagline}</p>
        </Reveal>
      </div>
    </article>
  );
}
