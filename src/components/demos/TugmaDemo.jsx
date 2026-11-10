// Tugma in motion, recreated from the real system's screens:
// resident reports an item -> describes it (contact info stays private) -> staff review records
// -> "Find matches" scores candidates -> staff confirm the match.
// Uses Tugma's own dark teal palette. All names/numbers are SAMPLE data (no real reporters).
import DemoShell from './DemoShell.jsx';
import { useStepper } from '../../hooks/useStepper';
import { Check, Lock } from '../Icons.jsx';

const STEPS = [
  { label: 'Report', caption: 'A resident picks "I lost something" or "I found something", then chooses what kind of item it is.' },
  { label: 'Describe', caption: 'They add the color, description, and place. Their name and number are visible to barangay staff only (Data Privacy Act, RA 10173).' },
  { label: 'Review', caption: 'Barangay staff sign in to see every report, with live counts of lost, found, matched, and claimed items.' },
  { label: 'Match', caption: '"Find matches" scores each candidate: category 30, color 20, description 30, location 10, date 10. Only matches at 50% or higher are shown.' },
  { label: 'Confirm', caption: 'Staff confirm the match and contact the owner. The report moves from Unmatched to Matched.' },
];

const CATEGORIES = [
  { name: 'Electronics', hint: 'Phone, laptop, charger' },
  { name: 'Personal items', hint: 'Wallet, bag, keys' },
  { name: 'Documents and cards', hint: 'ID, license, ATM card' },
  { name: 'Clothing and accessories', hint: 'Jewelry, glasses, watch' },
  { name: 'Others', hint: 'Anything else' },
];

const SCORES = [
  { label: 'Category', value: 30, max: 30 },
  { label: 'Color', value: 20, max: 20 },
  { label: 'Description', value: 26, max: 30 },
  { label: 'Location', value: 10, max: 10 },
  { label: 'Date', value: 10, max: 10 },
];

function Logo() {
  return (
    <span className="tg-logo" aria-hidden="true"><i /><i /></span>
  );
}

function ReportScreen() {
  return (
    <div className="tg-page">
      <p className="tg-h1">Lost it? Found it? Tell us.</p>
      <div className="tg-switch">
        <span className="tg-switch__lost tg-pop"><b><Check /> I lost something</b><small>Staff will look for a match</small></span>
        <span className="tg-switch__found"><b>I found something</b><small>Help it reach its owner</small></span>
      </div>
      <p className="tg-q">What kind of item is it?</p>
      <ul className="tg-cats">
        {CATEGORIES.map((c, i) => (
          <li key={c.name} className={i === 0 ? 'is-picked' : ''} style={{ animationDelay: `${i * 90}ms` }}>
            <b>{c.name}</b><small>{c.hint}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DescribeScreen() {
  const fields = [
    ['Main color', 'Black'],
    ['When did you lose it?', 'Nov 10, 2026'],
    ['Describe the item', 'Samsung with clear case'],
    ['Where did you lose it?', 'Basketball court'],
  ];
  return (
    <div className="tg-page">
      <div className="tg-form">
        {fields.map(([label, value], i) => (
          <label key={label} style={{ animationDelay: `${i * 160}ms` }}>
            <span>{label}</span><em>{value}</em>
          </label>
        ))}
      </div>
      <p className="tg-privacy"><Lock /> Only barangay staff can see your name and number, and only to verify claims. They never appear in match results.</p>
      <span className="tg-submit tg-press"><Check /> Lost report submitted</span>
    </div>
  );
}

function Records({ matched = false }) {
  return (
    <div className="tg-page">
      <div className="tg-records-head">
        <p className="tg-h2">Reports</p>
        <span className="tg-signed"><Lock /> Staff signed in</span>
      </div>
      <ul className="tg-stats">
        <li className="s-lost"><b>12</b>Lost, still open</li>
        <li className="s-found"><b>7</b>Found, still open</li>
        <li className="s-matched"><b>{matched ? 4 : 3}</b>Matched</li>
        <li className="s-claimed"><b>14</b>Claimed</li>
      </ul>
      <div className="tg-table" role="presentation">
        <div className="tg-tr is-focus">
          <span className="tg-no">#95</span>
          <span className="tg-type">Lost</span>
          <span className="tg-item"><b>Electronics</b>, Black<small>Samsung with clear case</small></span>
          <span className={`tg-status ${matched ? 'is-matched tg-pop' : ''}`}>{matched ? <><Check /> Matched</> : 'Unmatched'}</span>
          {!matched && <span className="tg-find tg-pulse">Find matches</span>}
        </div>
        <div className="tg-tr">
          <span className="tg-no">#94</span>
          <span className="tg-type">Lost</span>
          <span className="tg-item"><b>Personal items</b>, Brown<small>Leather wallet with school ID</small></span>
          <span className="tg-status">Unmatched</span>
          {!matched && <span className="tg-find">Find matches</span>}
        </div>
      </div>
    </div>
  );
}

function MatchModal() {
  const total = SCORES.reduce((a, s) => a + s.value, 0);
  return (
    <div className="tg-modal tg-slide">
      <p className="tg-h3">Possible matches for #95</p>
      <p className="tg-sub">Lost: Electronics, Black. Showing candidates scoring 50% or higher.</p>
      <div className="tg-match">
        <div className="tg-ring" style={{ '--p': total }}>
          <svg viewBox="0 0 36 36" aria-hidden="true">
            <circle cx="18" cy="18" r="15.9" className="tg-ring__bg" />
            <circle cx="18" cy="18" r="15.9" className="tg-ring__fg" pathLength="100" />
          </svg>
          <b>{total}%</b>
        </div>
        <div className="tg-match__body">
          <p className="tg-match__title">Found #47: Electronics, Black <span className="tg-badge">High</span></p>
          <p className="tg-sub">Covered court · Nov 9, 2026</p>
          <p className="tg-desc">Samsung na may clear case. May sticker na blue flower sa likod.</p>
          <ul className="tg-bars">
            {SCORES.map((s, i) => (
              <li key={s.label}>
                <span>{s.label}</span>
                <i><em style={{ '--w': `${(s.value / s.max) * 100}%`, animationDelay: `${300 + i * 120}ms` }} /></i>
                <span>{s.value}/{s.max}</span>
              </li>
            ))}
          </ul>
          <p className="tg-contact"><Lock /> J. Dela Cruz · 09•• ••• ••89 <small>(staff only)</small></p>
          <span className="tg-confirm tg-pulse">Confirm match</span>
        </div>
      </div>
    </div>
  );
}

function Screen({ step }) {
  if (step === 0) return <ReportScreen />;
  if (step === 1) return <DescribeScreen />;
  if (step === 2) return <Records />;
  if (step === 3) return <MatchModal />;
  return (
    <div className="tg-stack">
      <p className="tg-toast tg-slide"><Check /> Match confirmed: Lost #95 ↔ Found #47. Staff will contact the owner.</p>
      <Records matched />
    </div>
  );
}

export default function TugmaDemo() {
  const stepper = useStepper(STEPS.length, 3600);
  const { step } = stepper;
  const staff = step >= 2;
  return (
    <DemoShell title="Reporting and matching a lost phone on Tugma" steps={STEPS} stepper={stepper}>
      <div className="mock-window tg">
        <div className="tg-nav">
          <span className="tg-brand"><Logo /><span><b>Tugma</b><small>Barangay Sta. Rita lost and found</small></span></span>
          <span className="tg-tabs">
            <span className={!staff ? 'is-on' : ''}>Report an item</span>
            <span className={staff ? 'is-on' : ''}>Records</span>
          </span>
        </div>
        <div className="tg__body" key={step}><Screen step={step} /></div>
      </div>
    </DemoShell>
  );
}
