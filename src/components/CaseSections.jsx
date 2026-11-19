// Extra case study sections from the slide deck template: personas, user journey maps,
// and usability study findings. Each one only renders when the project has that data.
import { useState } from 'react';

// A persona field can be one sentence or a list of points.
function Points({ value }) {
  if (Array.isArray(value)) return <ul className="persona__list">{value.map((v) => <li key={v}>{v}</li>)}</ul>;
  return <p>{value}</p>;
}

export function Personas({ personas }) {
  const single = personas.length === 1;
  return (
    <div className={single ? 'persona-single' : 'cs-grid cs-grid--2'}>
      {personas.map((p) => (
        <article key={p.name} className={`cs-card persona ${single ? 'persona--wide' : ''}`}>
          <header className="persona__head">
            {p.avatar
              ? <img className="persona__avatar" src={p.avatar} alt="" width="52" height="52" />
              : <span className="persona__avatar persona__avatar--initial" aria-hidden="true">{p.name[0]}</span>}
            <div>
              <h3>{p.name}</h3>
              <p className="persona__meta">{[p.age, p.occupation, p.hometown].filter(Boolean).join(' · ')}</p>
            </div>
          </header>
          {p.quote && (
            <blockquote className="persona__quote">
              “{p.quote}”{p.quoteSource && <cite> {p.quoteSource}</cite>}
            </blockquote>
          )}
          <p className="label label--pink">Problem statement</p>
          <p className="persona__statement">{p.statement}</p>
          <div className="persona__gf">
            <div><p className="label">{Array.isArray(p.goal) ? 'Goals' : 'Goal'}</p><Points value={p.goal} /></div>
            <div><p className="label">{Array.isArray(p.frustration) ? 'Frustrations' : 'Frustration'}</p><Points value={p.frustration} /></div>
            {p.behavior && <div><p className="label">Behavior</p><Points value={p.behavior} /></div>}
          </div>
        </article>
      ))}
    </div>
  );
}

// Survey results shown as big number tiles.
export function Stats({ stats }) {
  return (
    <ul className="stats">
      {stats.map((s) => (
        <li key={s.label}><b className="chrome-text">{s.value}</b><span>{s.label}</span></li>
      ))}
    </ul>
  );
}

// Emotion curve: each step's mood (1 = negative, 5 = positive).
// Dots are positioned in the same columns as the step cards below, so each dot sits
// exactly above its step. The line is an SVG in % units; dots and labels are HTML,
// so they stay perfectly round and never stretch.
const moodTop = (m) => 88 - ((m - 1) / 4) * 76; // % from the top (positive = higher)

function MoodCurve({ steps }) {
  const n = steps.length;
  const pts = steps.map((s, i) => `${((i + 0.5) / n) * 100},${moodTop(s.mood)}`).join(' ');
  return (
    <div className="journey__curve" aria-hidden="true">
      <span className="journey__axis journey__axis--pos">Positive</span>
      <span className="journey__axis journey__axis--neg">Negative</span>
      <svg className="journey__svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" x2="100" y1="50" y2="50" className="journey__mid" />
        <polyline points={pts} className="journey__line" />
      </svg>
      <div className="journey__dots" style={{ '--n': n }}>
        {steps.map((s) => (
          <span key={s.title} className="journey__col">
            <i className="journey__dot" style={{ top: `${moodTop(s.mood)}%` }} />
          </span>
        ))}
      </div>
    </div>
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
        {/* Chart + steps scroll sideways together on small screens so the dots stay aligned */}
        <div className="journey__scroll">
          <div className="journey__chart" style={{ '--n': j.steps.length }}>
            <MoodCurve steps={j.steps} />
            <ol className="journey__steps">
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
