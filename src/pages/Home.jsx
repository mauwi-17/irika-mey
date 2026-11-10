import Reveal from '../components/Reveal.jsx';
import SectionLink from '../components/SectionLink.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { profile } from '../data/profile.js';
import { projects } from '../data/projects.js';
import { ArrowDown, ArrowUpRight, Mail, Sparkle } from '../components/Icons.jsx';

function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="label reveal-now">Personal portfolio <Sparkle className="inline-star" /> Design + Development</p>

        <h1 id="hero-title" className="hero__title">
          <span className="chrome-text shimmer">Designed with care.</span>
          <span className="hero__title-serif">Built for everyone.</span>
          {/* Decorative orbit ring, a Y2K motif from the moodboard */}
          <svg className="orbit" viewBox="0 0 600 200" aria-hidden="true">
            <ellipse cx="300" cy="100" rx="290" ry="70" />
            <circle className="orbit__dot" r="5" cx="300" cy="30" />
          </svg>
        </h1>

        <p className="hero__hi">Hi, I&apos;m {profile.short}, but you can call me <strong>{profile.nickname}</strong>.</p>
        <p className="hero__lead">{profile.tagline}</p>

        <div className="hero__actions">
          <SectionLink id="work" className="btn btn--pink">Explore my work <ArrowDown /></SectionLink>
          <SectionLink id="about" className="btn btn--ghost">About me</SectionLink>
        </div>
      </div>

      <aside className="window hero__window" aria-label="Quick facts">
        <div className="window__bar">
          <span>about-me.txt</span>
          <span className="window__dots" aria-hidden="true"><i /><i /><i /></span>
        </div>
        <div className="window__body">
          <figure className="photo-frame">
            <img src={profile.photos.hero} alt={`Portrait of ${profile.short} in a white shirt`} width="800" height="800" />
            <Sparkle className="photo-frame__star" aria-hidden="true" />
            <figcaption className="photo-frame__tag">{profile.nickname} ✦ {profile.role.split(' & ')[1]}</figcaption>
          </figure>
          <p className="window__quote">A curious mind, with a soft spot for <em>considerate</em> design.</p>
          <hr />
          <p className="label">Currently</p>
          <p>{profile.degree}<br />{profile.school} · {profile.location}</p>
          <p className="pill">Off-screen: {profile.interests.join(' · ').toLowerCase()}</p>
        </div>
      </aside>
    </section>
  );
}

// Scrolling ticker of skills. Duplicated once so the loop is seamless; the copy is hidden from screen readers.
function Ticker() {
  const words = ['UI/UX Design', 'Full-stack', 'Accessibility', 'Figma', 'React', 'Python', 'System Architecture'];
  const row = (hidden) => (
    <ul className="ticker__row" aria-hidden={hidden || undefined}>
      {words.map((w) => <li key={w}>{w}<Sparkle className="ticker__star" /></li>)}
    </ul>
  );
  return (
    <div className="ticker" aria-label="Skills">
      <div className="ticker__track">{row(false)}{row(true)}</div>
    </div>
  );
}

function Work() {
  const [featured, ...rest] = projects;
  return (
    <section id="work" className="section container" aria-labelledby="work-title">
      <Reveal>
        <p className="label label--pink">01 / Selected work</p>
        <h2 id="work-title" className="section__title">Three systems. <span className="serif-accent">Real people.</span></h2>
        <p className="section__lead">The problems, decisions, and details behind each project, with a quick interactive look at how each one works.</p>
      </Reveal>
      <div className="work-grid">
        <Reveal className="work-grid__featured"><ProjectCard project={featured} featured /></Reveal>
        {rest.map((p, i) => <Reveal key={p.slug} delay={i * 120}><ProjectCard project={p} /></Reveal>)}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section container about" aria-labelledby="about-title">
      <Reveal className="about__intro">
        <p className="label label--pink">02 / The person behind the projects</p>
        <h2 id="about-title" className="section__title">A little about me, <span className="serif-accent">beyond the screen.</span></h2>
        {profile.bio.map((p) => <p key={p} className="about__p">{p}</p>)}
        <p className="about__p about__p--muted">{profile.offScreen}</p>
        <ul className="chips" aria-label="Interests">
          {profile.interests.map((i) => <li key={i} className="chip"><Sparkle className="inline-star" />{i}</li>)}
        </ul>
      </Reveal>

      <Reveal className="toolkit" delay={120}>
        <div className="window about__photo">
          <div className="window__bar">
            <span>mauwey.jpg</span>
            <span className="window__dots" aria-hidden="true"><i /><i /><i /></span>
          </div>
          <img src={profile.photos.about} alt={`${profile.short} in a grey checkered blouse`} width="800" height="800" loading="lazy" />
        </div>
        <p className="label label--pink">My toolkit</p>
        {profile.toolkit.map((g) => (
          <div key={g.group} className="toolkit__group">
            <h3>{g.group}</h3>
            <ul className="chips">{g.items.map((i) => <li key={i} className="chip chip--plain">{i}</li>)}</ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <p className="label label--pink">03 / Say hello</p>
          <h2 id="contact-title" className="contact__title">
            Let&apos;s make something <span className="serif-accent">considerate.</span>
          </h2>
          <div className="contact__row">
            <a className="contact__email" href={`mailto:${profile.email}`}>
              <Mail /> {profile.email} <ArrowUpRight />
            </a>
            <ul className="contact__links">
              {profile.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noreferrer">
                    {l.label} <ArrowUpRight /><span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Work />
      <About />
      <Contact />
    </>
  );
}
