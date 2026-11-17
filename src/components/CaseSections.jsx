// Extra case study sections from the slide deck template: personas, user journey maps,
// and usability study findings. Each one only renders when the project has that data.
import { useState } from 'react';

export function Personas({ personas }) {
  return (
    <div className="cs-grid cs-grid--2">
      {personas.map((p) => (
        <article key={p.name} className="cs-card persona">
          <header className="persona__head">
            <span className="persona__avatar" aria-hidden="true">{p.name[0]}</span>
            <div>
              <h3>{p.name}</h3>
              <p className="persona__meta">{p.age} · {p.occupation} · {p.hometown}</p>
            </div>
          </header>
          {p.quote && <blockquote className="persona__quote">“{p.quote}”</blockquote>}
          <p className="label label--pink">Problem statement</p>
          <p className="persona__statement">{p.statement}</p>
          <div className="persona__gf">
            <div><p className="label">Goal</p><p>{p.goal}</p></div>
            <div><p className="label">Frustration</p><p>{p.frustration}</p></div>
          </div>
        </article>
      ))}
    </div>
  );
}

// Emotion curve: each step's mood (1 = negative, 5 = positive) plotted as a line.
function MoodCurve({ steps }) {
  const w = 600;
  const h = 120;
  const pad = 30;
  const x = (i) => pad + (i * (w - pad * 2)) / Math.max(steps.length - 1, 1);
  const y = (m) => h - 14 - ((m - 1) / 4) * (h - 28);
  const d = steps.map((s, i) => `${i ? 'L' : 'M'}${x(i)} ${y(s.mood)}`).join(' ');
  return (
    <svg className="journey__curve" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden="true">
      <line x1="0" x2={w} y1={h / 2} y2={h / 2} className="journey__mid" />
      <text x="4" y="12" className="journey__axis">positive</text>
      <text x="4" y={h - 4} className="journey__axis">negative</text>
      <path d={d} className="journey__line" />
      {steps.map((s, i) => <circle key={s.title} cx={x(i)} cy={y(s.mood)} r="6" className="journey__dot" />)}
    </svg>
  );
}

export function JourneyMaps({ journeys }) {
  const [active, setActive] = useState(0);
  const j = journeys[active];
  return (
    <div className="journey">
      <div className="journey__tabs" role="tablist" aria-label="Journey maps">
        {journeys.map((x, i) => (
          <button key={x.tab} type="button" role="tab" aria-selected={i === active}
            className={i === active ? 'is-on' : ''} onClick={() => setActive(i)}>
            {x.tab}
          </button>
        ))}
      </div>
      <div className="journey__panel cs-card" role="tabpanel">
        <h3>{j.persona}</h3>
        <p className="cs-muted">Goal: {j.goal}</p>
        <MoodCurve steps={j.steps} />
        <ol className="journey__steps" style={{ '--n': j.steps.length }}>
          {j.steps.map((s, i) => (
            <li key={s.title}>
              <b>{i + 1}. {s.title}</b>
              <span className="journey__feel">{s.feeling}</span>
              <p>{s.opportunity}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function Usability({ usability }) {
  return (
    <>
      <p className="cs-lead">{usability.intro}</p>
      <div className="cs-grid cs-grid--2">
        {usability.rounds.map((r) => (
          <div key={r.title} className="cs-card">
            <p className="label label--pink">{r.title}</p>
            <ol className="finding-list">
              {r.findings.map((f, i) => (
                <li key={f.title}><span>{i + 1}</span><div><b>{f.title}</b><p>{f.text}</p></div></li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </>
  );
}
