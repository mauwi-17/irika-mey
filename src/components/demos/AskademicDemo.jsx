// Askademic in motion, recreated from the real system's student screens:
// sign in -> faculty directory (live availability) -> pick a date & time slot
// -> add topic & notes -> request submitted (pending faculty approval).
// Uses Askademic's own navy + light palette. All names, emails, and reference
// numbers are SAMPLE data, not real accounts.
import DemoShell from './DemoShell.jsx';
import { useStepper } from '../../hooks/useStepper';
import { Check, Clock, Lock } from '../Icons.jsx';

const STEPS = [
  { label: 'Sign in', caption: 'Students and faculty sign in with their Gordon College account. The badge shows which role is signing in.' },
  { label: 'Find faculty', caption: 'The Faculty Directory shows each instructor’s real-time availability and their next open schedule. You can only book an instructor who has set a schedule.' },
  { label: 'Pick a slot', caption: 'Choose a day and time slot. Each day shows how many slots are left, and days with no hours or blocked dates can’t be picked.' },
  { label: 'Add details', caption: 'Pick a consultation topic and add optional notes, then submit the request.' },
  { label: 'Submitted', caption: 'The request gets a reference number and stays pending until the instructor approves it. Students track it in My Appointments.' },
];

const FACULTY = [
  { initials: 'AS', name: 'Prof. A. Santos', next: null },
  { initials: 'RR', name: 'Prof. R. Reyes', next: 'Wed, Nov 18 · 8 AM' },
  { initials: 'CC', name: 'Ms. C. Cruz', next: 'Sat, Nov 21 · 8 AM', pick: true },
];

const DAYS = [
  { d: 'Today', n: 17, s: 'No hours' },
  { d: 'Wed', n: 18, s: 'No hours' },
  { d: 'Thu', n: 19, s: 'No hours' },
  { d: 'Fri', n: 20, s: 'No hours' },
  { d: 'Sat', n: 21, s: '3 left', pick: true },
  { d: 'Sun', n: 22, s: 'No hours' },
  { d: 'Mon', n: 23, s: 'Blocked', off: true },
];

function Logo({ size = '' }) {
  return <span className={`ak-logo ${size}`} aria-hidden="true"><i /><i /></span>;
}

function SignIn() {
  return (
    <div className="ak-center">
      <div className="ak-login">
        <Logo size="ak-logo--lg" />
        <p className="ak-h1">Askademic</p>
        <p className="ak-muted">Gordon College · Olongapo City</p>
        <span className="ak-role">🎓 Student account</span>
        <label className="ak-field"><span>Student / Faculty ID or Email</span><em>student@gordoncollege.edu.ph</em></label>
        <label className="ak-field"><span>Password</span><em className="ak-dots"><Lock /> ••••••••••</em></label>
        <span className="ak-btn ak-btn--wide ak-press">Sign In</span>
      </div>
    </div>
  );
}

function AppShell({ children, dim = false }) {
  return (
    <div className="ak-app">
      <aside className="ak-side" aria-hidden="true"><Logo /><i /><i /><i className="is-on" /><i /><i /></aside>
      <div className="ak-main">
        <div className="ak-head"><div><p className="ak-h2">Faculty Directory</p><p className="ak-muted">Tuesday, November 17</p></div><span className="ak-bell" aria-hidden="true">🔔<b>3</b></span></div>
        <div className={`ak-content ${dim ? 'is-dim' : ''}`}>
          <p className="ak-muted">View real-time availability and book a consultation slot</p>
          <p className="ak-search">Search instructor…</p>
          <ul className="ak-list">
            {FACULTY.map((f, i) => (
              <li key={f.name} className={f.pick ? 'is-pick' : ''} style={{ animationDelay: `${i * 140}ms` }}>
                <span className="ak-av"><span className="ak-av__c">{f.initials}</span><small className="ak-av__ok"><i /> Available</small></span>
                <div>
                  <b>{f.name}</b><small>CCS</small>
                  <small className="ak-next"><Clock /> {f.next ? `Next: ${f.next}` : 'No schedule set'}</small>
                </div>
                <span className={`ak-btn ak-btn--sm ${f.next ? '' : 'is-disabled'} ${f.pick ? 'ak-pulse' : ''}`}>Book</span>
              </li>
            ))}
          </ul>
        </div>
        {children}
      </div>
    </div>
  );
}

function Modal({ details = false }) {
  return (
    <div className="ak-modal ak-slide">
      <p className="ak-modal__bar">Request appointment with <span>Ms. C. Cruz</span></p>
      <div className="ak-modal__body">
        {!details ? (
          <>
            <p className="ak-label">Select date</p>
            <ul className="ak-days">
              {DAYS.map((x) => (
                <li key={x.n} className={`${x.pick ? 'is-pick' : ''} ${x.off ? 'is-off' : ''}`}>
                  <small>{x.d}</small><b>{x.n}</b><small>{x.s}</small>
                </li>
              ))}
            </ul>
            <p className="ak-date">Saturday, Nov 21, 2026</p>
            <p className="ak-ok">3 slots remaining for Saturday</p>
            <p className="ak-label">Select time slot</p>
            <span className="ak-slot ak-pop">8:00 AM – 9:00 AM</span>
          </>
        ) : (
          <>
            <p className="ak-picked"><Check /> Sat, Nov 21 · 8:00 – 9:00 AM</p>
            <p className="ak-label">Consultation topic</p>
            <p className="ak-select ak-pop">Subject concern ▾</p>
            <p className="ak-label">Optional messages / notes</p>
            <p className="ak-notes ak-type">Clarify the chapter 3 requirements</p>
            <div className="ak-actions"><span className="ak-btn ak-btn--wide ak-press">Submit Request</span><span className="ak-btn ak-btn--ghost">Cancel</span></div>
          </>
        )}
      </div>
    </div>
  );
}

function Submitted() {
  const rows = [
    ['Faculty', 'Ms. C. Cruz'],
    ['Day', 'Saturday'],
    ['Time', '8:00 AM – 9:00 AM'],
    ['Room', 'Room TBA'],
    ['Topic', 'Subject concern'],
  ];
  return (
    <div className="ak-modal ak-done ak-slide">
      <span className="ak-check ak-pop"><Check /></span>
      <p className="ak-h2">Request Submitted!</p>
      <p className="ak-muted">Your request is now pending faculty approval.</p>
      <dl className="ak-receipt">
        <div className="ak-ref"><dt>Reference no.</dt><dd>REQ-7F3A21C9</dd></div>
        {rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
      </dl>
      <span className="ak-btn ak-btn--wide">View in My Appointments →</span>
    </div>
  );
}

function Screen({ step }) {
  if (step === 0) return <SignIn />;
  if (step === 1) return <AppShell />;
  return (
    <AppShell dim>
      <div className="ak-overlay">
        {step === 2 && <Modal />}
        {step === 3 && <Modal details />}
        {step === 4 && <Submitted />}
      </div>
    </AppShell>
  );
}

export default function AskademicDemo() {
  const stepper = useStepper(STEPS.length, 3800);
  return (
    <DemoShell title="Booking a consultation on Askademic" steps={STEPS} stepper={stepper}>
      <div className="mock-window ak">
        <div className="mock-window__bar"><i /><i /><i /><span>askademic · gordon college</span></div>
        <div className="ak__body" key={stepper.step}><Screen step={stepper.step} /></div>
      </div>
    </DemoShell>
  );
}
