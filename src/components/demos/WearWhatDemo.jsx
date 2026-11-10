// WearWhat in motion: Upload -> Weather -> Recommendation -> Wear it, inside a phone frame.
// Colors follow WearWhat's own green + warm orange brand.
import DemoShell from './DemoShell.jsx';
import { useStepper } from '../../hooks/useStepper';
import { Check, Heart, Sun, Upload } from '../Icons.jsx';

const STEPS = [
  { label: 'Upload', caption: 'Snap a photo of a clothing item. K-Means clustering detects its dominant colors automatically.' },
  { label: 'Weather', caption: 'Live weather from the OpenWeatherMap API filters out anything too warm, too light, or not rain-ready.' },
  { label: 'Recommend', caption: 'Each outfit is scored: 40% weather fit, 30% category preference, 30% color harmony.' },
  { label: 'Wear it!', caption: 'Save the outfits you love. Favorites and history help it learn your style over time.' },
];

const Shirt = ({ color }) => (
  <svg viewBox="0 0 40 40" aria-hidden="true"><path fill={color} d="M8 5 16 2q4 5 8 0l8 3 6 8-6 4-2-2v21H10V15l-2 2-6-4Z" /></svg>
);
const Pants = ({ color }) => (
  <svg viewBox="0 0 40 40" aria-hidden="true"><path fill={color} d="M10 2h20l3 36h-9l-4-23-4 23H7Z" /></svg>
);
const Shoes = ({ color }) => (
  <svg viewBox="0 0 40 40" aria-hidden="true"><path fill={color} d="M3 26q0-9 6-9l6 2q6 5 18 7 5 1 5 6v2H3Z" /></svg>
);

const COLORS = [
  { name: 'Blush pink', hex: '#E9A6C3' },
  { name: 'Cream', hex: '#F4E9DC' },
  { name: 'Berry', hex: '#B5577F' },
];
const SCORES = [
  { label: 'Weather fit', value: 38, max: 40 },
  { label: 'Preference', value: 27, max: 30 },
  { label: 'Color harmony', value: 28, max: 30 },
];

function Screen({ step }) {
  if (step === 0) {
    return (
      <>
        <p className="ww-label">Add to wardrobe</p>
        <div className="ww-photo">
          <Shirt color="#E9A6C3" />
          <span className="ww-scan" aria-hidden="true" />
          <span className="ww-upload"><Upload /> Top · Casual</span>
        </div>
        <p className="ww-label">Detected colors</p>
        <ul className="ww-swatches">
          {COLORS.map((c, i) => (
            <li key={c.hex} style={{ animationDelay: `${600 + i * 220}ms` }}>
              <span style={{ background: c.hex }} />{c.name}<small>{c.hex}</small>
            </li>
          ))}
        </ul>
      </>
    );
  }
  if (step === 1) {
    return (
      <>
        <p className="ww-label">Today in Olongapo</p>
        <div className="ww-weather ww-pop">
          <Sun className="ww-sun" />
          <div><b>31°C</b><small>Sunny · 10% rain</small></div>
        </div>
        <p className="ww-label">Filters applied</p>
        <ul className="ww-filters">
          {['Light fabrics', 'Short sleeves OK', 'No jacket needed'].map((f, i) => (
            <li key={f} style={{ animationDelay: `${300 + i * 200}ms` }}><Check />{f}</li>
          ))}
        </ul>
      </>
    );
  }
  if (step === 2) {
    const total = SCORES.reduce((a, s) => a + s.value, 0);
    return (
      <>
        <p className="ww-label">Today&apos;s pick · Casual</p>
        <div className="ww-outfit">
          <Shirt color="#E9A6C3" /><Pants color="#F4E9DC" /><Shoes color="#B5577F" />
        </div>
        <ul className="ww-scores">
          {SCORES.map((s, i) => (
            <li key={s.label}>
              <span>{s.label}</span><b>{s.value}/{s.max}</b>
              <i style={{ '--w': `${(s.value / s.max) * 100}%`, animationDelay: `${i * 180}ms` }} />
            </li>
          ))}
        </ul>
        <p className="ww-match">Match score <b>{total}%</b></p>
      </>
    );
  }
  return (
    <>
      <p className="ww-label">Outfit saved</p>
      <div className="ww-saved">
        <div className="ww-outfit ww-outfit--sm">
          <Shirt color="#E9A6C3" /><Pants color="#F4E9DC" /><Shoes color="#B5577F" />
        </div>
        <Heart className="ww-heart" />
      </div>
      <p className="ww-label">History</p>
      <ul className="ww-history">
        <li><span>Today</span>Blush top · Cream pants</li>
        <li><span>Mon</span>Denim · White tee</li>
        <li><span>Sun</span>Floral dress</li>
      </ul>
    </>
  );
}

export default function WearWhatDemo() {
  const stepper = useStepper(STEPS.length);
  return (
    <DemoShell title="Getting dressed with WearWhat" steps={STEPS} stepper={stepper}>
      <div className="ww-stage">
        <div className="phone">
          <div className="phone__notch" aria-hidden="true" />
          <div className="ww">
            <p className="ww-brand">WearWhat</p>
            <div className="ww-screen" key={stepper.step}><Screen step={stepper.step} /></div>
          </div>
        </div>
      </div>
    </DemoShell>
  );
}
