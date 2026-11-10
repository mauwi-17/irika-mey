// Tugma in motion: Encode -> Normalize -> Compare -> Rank -> Protect.
// Shows the rule-based matcher and the privacy-by-design idea with sample reports.
import DemoShell from './DemoShell.jsx';
import { useStepper } from '../../hooks/useStepper';
import { Check, Lock } from '../Icons.jsx';

const STEPS = [
  { label: 'Encode', caption: 'Barangay staff encode lost and found reports on behalf of residents.' },
  { label: 'Normalize', caption: 'A synonym layer cleans up descriptions, so different words for the same thing still match.' },
  { label: 'Compare', caption: 'Rule-based similarity scoring compares each field. It is transparent, with no AI model needed.' },
  { label: 'Rank', caption: 'Matches are grouped into confidence tiers, so staff know which ones to check first.' },
  { label: 'Protect', caption: 'Personal identifiers are only visible to authorized staff and are never posted publicly.' },
];

const LOST = { item: 'Cellphone', color: 'Black', brand: 'Samsung', place: 'Covered ct.' };
const FOUND = { item: 'Phone', color: 'black', brand: 'SAMSUNG', place: 'Covered court' };
const NORMAL = { item: 'phone', color: 'black', brand: 'samsung', place: 'covered court' };
const FIELDS = [
  { key: 'item', label: 'Item' },
  { key: 'color', label: 'Color' },
  { key: 'brand', label: 'Brand' },
  { key: 'place', label: 'Place' },
];

function Report({ title, data, normalized, owner, masked }) {
  return (
    <div className="tg-report">
      <p className="tg-report__title">{title}</p>
      <dl>
        {FIELDS.map((f) => (
          <div key={f.key}>
            <dt>{f.label}</dt>
            <dd className={normalized && data[f.key] !== NORMAL[f.key] ? 'tg-changed' : ''}>
              {normalized ? NORMAL[f.key] : data[f.key]}
            </dd>
          </div>
        ))}
        {owner && (
          <div>
            <dt>Owner</dt>
            <dd className={masked ? 'tg-masked' : ''}>
              {masked ? <><Lock /> J*** D*** C***</> : owner}
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
}

function Panel({ step }) {
  if (step === 0) {
    return <p className="tg-note tg-type">Staff encoding 2 reports<span className="tg-caret" aria-hidden="true" /></p>;
  }
  if (step === 1) {
    return (
      <ul className="tg-chips">
        {['cellphone → phone', 'Samsung → samsung', 'covered ct. → covered court'].map((c, i) => (
          <li key={c} style={{ animationDelay: `${i * 220}ms` }}>{c}</li>
        ))}
      </ul>
    );
  }
  if (step === 2) {
    return (
      <div className="tg-compare">
        <ul>
          {FIELDS.map((f, i) => (
            <li key={f.key} style={{ animationDelay: `${i * 200}ms` }}><Check />{f.label} match</li>
          ))}
        </ul>
        <div className="tg-bar"><i style={{ '--w': '92%' }} /></div>
        <p className="tg-score">Similarity <b>92%</b></p>
      </div>
    );
  }
  if (step === 3) {
    return (
      <ul className="tg-tiers">
        <li className="is-active"><b>High</b> Very likely the same item</li>
        <li><b>Medium</b> Worth checking</li>
        <li><b>Low</b> Probably different</li>
      </ul>
    );
  }
  return (
    <p className="tg-note tg-private"><Lock /> Identifiers visible to authorized barangay staff only</p>
  );
}

export default function TugmaDemo() {
  const stepper = useStepper(STEPS.length);
  const { step } = stepper;
  return (
    <DemoShell title="Matching a lost phone with Tugma" steps={STEPS} stepper={stepper}>
      <div className="mock-window tg">
        <div className="mock-window__bar"><i /><i /><i /><span>tugma · barangay sta. rita</span></div>
        <div className="tg__body">
          <div className="tg-reports">
            <Report title="Lost report" data={LOST} normalized={step >= 1}
              owner="Juan Dela Cruz" masked={step === 4} />
            <span className={`tg-link ${step >= 2 ? 'is-on' : ''}`} aria-hidden="true">⟷</span>
            <Report title="Found report" data={FOUND} normalized={step >= 1} />
          </div>
          <div className="tg__panel" key={step}><Panel step={step} /></div>
        </div>
      </div>
    </DemoShell>
  );
}
