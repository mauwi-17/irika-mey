// WearWhat in motion, recreated from the real app's flow:
//   Add clothing: upload -> detect color -> remove background -> save to wardrobe
//   Get dressed:  pick occasion -> generate pairs (color, weather, preference)
//                 -> pick the highest % -> wear it, done.
// Clothes are drawn as simple SVG shapes instead of real wardrobe photos.
import DemoShell from './DemoShell.jsx';
import { useStepper } from '../../hooks/useStepper';
import { Check, Heart } from '../Icons.jsx';

const STEPS = [
  { label: 'Add clothing', caption: 'Upload a photo of a clothing item. WearWhat detects its color, removes the background, then saves it to your wardrobe with its type and occasions.' },
  { label: 'Occasion', caption: 'To get dressed, pick an occasion: casual, formal, date, party, or sport.' },
  { label: 'Generate', caption: 'WearWhat generates recommended pairs, scored by color harmony (30%), today’s weather (40%), and your preferences (30%).' },
  { label: 'Pick the best', caption: 'Recommendations are ranked by percentage. Pick the highest one, 86% here.' },
  { label: 'Wear it', caption: 'Tap “Wear this outfit” and you’re done. It’s saved to your history.' },
];

/* ---- simple clothing shapes ---- */
const SHAPES = {
  shirt: 'M8 5 16 2q4 5 8 0l8 3 6 8-6 4-2-2v21H10V15l-2 2-6-4Z',
  pants: 'M10 2h20l3 36h-9l-4-23-4 23H7Z',
  shoes: 'M3 26q0-9 6-9l6 2q6 5 18 7 5 1 5 6v2H3Z',
  hat: 'M6 27q1-15 14-15t14 15h4v4H2v-4Z',
  cami: 'M13 3v7q-5 4-5 11v15h24V21q0-7-5-11V3l-2 7q-5 3-10 0Z',
  skirt: 'M13 5h14l9 31H4Z',
  flats: 'M3 28q1-7 9-7h14q10 0 11 7v3H3Z',
  bag: 'M7 15h26l3 21H4Z',
  blouse: 'M9 6 16 3l4 8 4-8 7 3 7 9-6 4-2-3v18H10V16l-2 3-6-4Z',
};
function Piece({ shape, color, bg }) {
  return (
    <span className="wr-tile" style={{ background: bg }}>
      <svg viewBox="0 0 40 40" aria-hidden="true">
        {shape === 'bag' && <path d="M14 15q0-9 6-9t6 9" fill="none" stroke={color} strokeWidth="2.5" />}
        <path d={SHAPES[shape]} fill={color} />
      </svg>
    </span>
  );
}

const OUTFIT_A = [
  { shape: 'shirt', color: '#9aa0aa', bg: '#5d636d', cat: 'Tops', label: 'Top · Gray' },
  { shape: 'pants', color: '#8a5434', bg: '#6b3f25', cat: 'Bottoms', label: 'Bottom · Cocoa' },
  { shape: 'shoes', color: '#3d8a8f', bg: '#0c0f12', cat: 'Shoes', label: 'Footwear · Teal' },
  { shape: 'hat', color: '#9b8672', bg: '#4a3d33', cat: 'Accessories', label: 'Accessories · Taupe' },
];
const OUTFIT_B = [
  { shape: 'cami', color: '#f4ede2', bg: '#dcd6cc' },
  { shape: 'skirt', color: '#a3a274', bg: '#8b8a5e' },
  { shape: 'flats', color: '#eed98f', bg: '#d8c27a' },
  { shape: 'bag', color: '#2a2420', bg: '#0b0a09' },
];
const OCCASIONS = ['Casual', 'Formal', 'Date', 'Party', 'Sport'];

function Header({ title, back }) {
  return (
    <>
      {back && <p className="wr-back">← Back</p>}
      <p className="wr-title">{title}</p>
    </>
  );
}

function OccasionScreen() {
  return (
    <>
      <Header title="What to wear?" back />
      <p className="wr-muted">Pick an occasion for today.</p>
      <ul className="wr-occasions">
        {OCCASIONS.map((o) => <li key={o} className={o === 'Date' ? 'is-picked' : ''}>{o}</li>)}
      </ul>
      <p className="wr-cta wr-slide">✦ Generate outfit</p>
    </>
  );
}

function AddScreen() {
  const stages = ['Upload', 'Detect color', 'Remove BG', 'Save'];
  const types = ['Tops', 'Bottoms', 'Shoes', 'Outerwear', 'Dress', 'Accessories'];
  const occasions = ['Casual', 'Formal', 'Date Night', 'Party', 'Sports'];
  const picked = ['Formal', 'Date Night', 'Party'];
  return (
    <>
      <Header title="Add Clothing" back />
      <div className="wr-upload">
        <span className="wr-photo"><Piece shape="blouse" color="#efe6d6" bg="#fff" /><i className="wr-scan" aria-hidden="true" /></span>
        <span className="wr-detected">Detected: <span style={{ background: '#efe6d6' }} /> Cream</span>
      </div>
      <ol className="wr-stages">
        {stages.map((s, i) => (
          <li key={s} style={{ '--d': `${i * 700}ms` }}><i>{i + 1}</i>{s}</li>
        ))}
      </ol>
      <p className="wr-label">Clothing type</p>
      <ul className="wr-tags">{types.map((t) => <li key={t} className={t === 'Tops' ? 'is-on' : ''}>{t}</li>)}</ul>
      <p className="wr-label">Occasion · select all that apply</p>
      <ul className="wr-tags">
        {occasions.map((o) => (
          <li key={o} className={picked.includes(o) ? 'is-on' : ''} style={{ animationDelay: `${600 + picked.indexOf(o) * 250}ms` }}>{o}</li>
        ))}
      </ul>
      <p className="wr-wear wr-save">Save to wardrobe</p>
    </>
  );
}

function GenerateScreen() {
  const rules = [
    ['Color harmony', '30%', 'Colors that go well together'],
    ['Weather fit', '40%', 'Suits today’s 31°C, overcast'],
    ['Preference', '30%', 'Your hearted pieces score higher'],
  ];
  return (
    <>
      <Header title="What to wear?" back />
      <p className="wr-chip">For <b>Date night</b></p>
      <p className="wr-filter"><Check /> Using items tagged “Date Night”</p>
      <p className="wr-label">Generating recommended pairs…</p>
      <ul className="wr-rules">
        {rules.map(([t, w, d], i) => (
          <li key={t} style={{ animationDelay: `${i * 450}ms` }}>
            <span className="wr-weight" style={{ animationDelay: `${i * 450 + 300}ms` }}>{w}</span>
            <div><b>{t}</b><small>{d}</small></div>
          </li>
        ))}
      </ul>
    </>
  );
}

function CompareScreen({ worn = false }) {
  return (
    <>
      <p className="wr-chip">For <b>Date night</b></p>
      <div className="wr-outfits">
        <div className="wr-outfit is-picked">
          <span className="wr-pct">86% · Top pick</span>
          <div className="wr-grid">{OUTFIT_A.map((p) => <Piece key={p.shape} {...p} />)}</div>
          <span className="wr-actions"><Heart className={worn ? 'wr-hearted' : ''} /></span>
        </div>
        <div className="wr-outfit">
          <span className="wr-pct wr-pct--low">74%</span>
          <div className="wr-grid">{OUTFIT_B.map((p) => <Piece key={p.shape} {...p} />)}</div>
          <span className="wr-actions"><Heart /></span>
        </div>
      </div>
      <p className="wr-label">Items in this outfit</p>
      <ul className="wr-items">
        {OUTFIT_A.map((p, i) => (
          <li key={p.label} style={{ animationDelay: `${i * 120}ms` }}>
            <Piece {...p} /><div><b>{p.cat}</b><small>{p.label}</small></div>
          </li>
        ))}
      </ul>
      <p className="wr-score">Compatibility score: <em>86%</em></p>
      <p className={`wr-wear ${worn ? 'is-done wr-press' : ''}`}>{worn ? <><Check /> Done! Saved to history</> : 'Wear this outfit'}</p>
    </>
  );
}

function Screen({ step }) {
  if (step === 0) return <AddScreen />;
  if (step === 1) return <OccasionScreen />;
  if (step === 2) return <GenerateScreen />;
  return <CompareScreen worn={step === 4} />;
}

export default function WearWhatDemo() {
  const stepper = useStepper(STEPS.length, 3800);
  return (
    <DemoShell title="Getting dressed with WearWhat" steps={STEPS} stepper={stepper}>
      <div className="ww-stage">
        <div className="phone">
          <div className="phone__notch" aria-hidden="true" />
          <div className="wr">
            <div className="wr-top">
              <span className="wr-logo">WearWhat</span>
              <span className="wr-pill"><span className="wr-cloud wr-cloud--sm" aria-hidden="true" />31°C</span>
            </div>
            <div className="wr-screen" key={stepper.step}><Screen step={stepper.step} /></div>
            <nav className="wr-nav" aria-hidden="true">
              {['Home', 'Wardrobe', '+', 'Favorites', 'Profile'].map((n, i) => (
                <span key={n} className={`${n === '+' ? 'wr-plus' : ''} ${i === 0 ? 'is-on' : ''}`}>{n}</span>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </DemoShell>
  );
}
