// Askademic in motion: a mini recreation of the Post -> Browse -> Request -> Review -> Track flow.
// Uses Askademic's own blue palette so it reads as "their app" inside the pink portfolio.
import DemoShell from './DemoShell.jsx';
import { useStepper } from '../../hooks/useStepper';
import { Check, Clock, XMark } from '../Icons.jsx';

const STEPS = [
  { label: 'Post', caption: 'Faculty set their availability, and the board updates for every student in real time.' },
  { label: 'Browse', caption: 'Students check the live schedule board to see which slots are actually open.' },
  { label: 'Request', caption: 'A student requests a slot in one tap. No chats, emails, or walk-ins.' },
  { label: 'Review', caption: 'The instructor approves or declines. Approved slots lock, so there is no double-booking.' },
  { label: 'Track', caption: 'Both sides follow the status from Pending to Completed, and the consultation is recorded.' },
];

const FACULTY = [
  { id: 'santos', name: 'Prof. Santos', dept: 'Computer Science', initials: 'PS' },
  { id: 'reyes', name: 'Prof. Reyes', dept: 'Information Tech.', initials: 'PR' },
  { id: 'cruz', name: 'Prof. Cruz', dept: 'Mathematics', initials: 'PC' },
];

// Status chips always pair an icon + text with the color (never color alone).
const STATUS = {
  available: { text: 'Available', Icon: Check },
  busy: { text: 'Busy', Icon: XMark },
  pending: { text: 'Pending', Icon: Clock },
  approved: { text: 'Approved', Icon: Check },
  completed: { text: 'Completed', Icon: Check },
};
function Status({ kind, className = '' }) {
  const { text, Icon } = STATUS[kind];
  return <span className={`ak-status ak-status--${kind} ${className}`}><Icon />{text}</span>;
}

const SLOTS = [
  { time: '9:00 AM', taken: true },
  { time: '10:30 AM', taken: false, pick: true },
  { time: '1:00 PM', taken: false },
  { time: '3:30 PM', taken: true },
];

function Panel({ step }) {
  if (step === 0) {
    return (
      <div className="ak-panel">
        <p className="ak-panel__label">Faculty view · My status</p>
        <div className="ak-toggle-row">
          <span>Prof. Santos</span>
          <span className="ak-switch is-on" role="img" aria-label="Status switched to available"><i /></span>
        </div>
        <Status kind="available" className="ak-pop" />
        <p className="ak-hint">Visible to students now</p>
      </div>
    );
  }
  if (step === 1) {
    return (
      <div className="ak-panel">
        <p className="ak-panel__label">Prof. Santos · Today</p>
        <ul className="ak-slots">
          {SLOTS.map((s) => (
            <li key={s.time} className={`${s.taken ? 'is-taken' : ''} ${s.pick ? 'is-pick' : ''}`}>
              {s.time}<small>{s.taken ? 'Taken' : 'Open'}</small>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  if (step === 2) {
    return (
      <div className="ak-panel">
        <p className="ak-panel__label">Student view · New request</p>
        <div className="ak-request ak-slide">
          <p><b>Prof. Santos</b> · 10:30 AM</p>
          <p className="ak-hint">Topic: Thesis chapter 2 feedback</p>
          <Status kind="pending" />
        </div>
        <span className="ak-btn ak-btn--done"><Check /> Request sent</span>
      </div>
    );
  }
  if (step === 3) {
    return (
      <div className="ak-panel">
        <p className="ak-panel__label">Faculty view · Requests</p>
        <div className="ak-request">
          <p><b>J. Dela Cruz</b> · 10:30 AM</p>
          <p className="ak-hint">Thesis chapter 2 feedback</p>
          <div className="ak-actions">
            <span className="ak-btn ak-btn--approve ak-press"><Check /> Approve</span>
            <span className="ak-btn ak-btn--ghost">Decline</span>
          </div>
        </div>
        <Status kind="approved" className="ak-pop" />
      </div>
    );
  }
  return (
    <div className="ak-panel">
      <p className="ak-panel__label">Consultation status</p>
      <ol className="ak-timeline">
        {['pending', 'approved', 'completed'].map((k, i) => (
          <li key={k} style={{ animationDelay: `${i * 260}ms` }}><Status kind={k} /></li>
        ))}
      </ol>
      <p className="ak-recorded ak-pop"><Check /> Consultation recorded</p>
    </div>
  );
}

export default function AskademicDemo() {
  const stepper = useStepper(STEPS.length);
  const { step } = stepper;

  return (
    <DemoShell title="Booking a consultation on Askademic" steps={STEPS} stepper={stepper}>
      <div className="mock-window ak">
        <div className="mock-window__bar"><i /><i /><i /><span>askademic · faculty board</span></div>
        <div className="ak__body">
          <div className="ak-board">
            <p className="ak-panel__label">Live faculty board</p>
            <ul>
              {FACULTY.map((f) => {
                const kind = f.id === 'reyes' ? 'busy' : 'available';
                const highlight = f.id === 'santos' && step <= 1;
                return (
                  <li key={f.id} className={`ak-row ${highlight ? 'is-highlight' : ''}`}>
                    <span className="ak-avatar" aria-hidden="true">{f.initials}</span>
                    <span className="ak-row__name">{f.name}<small>{f.dept}</small></span>
                    {/* Santos flips Busy -> Available on the Post step */}
                    <Status kind={f.id === 'santos' && step === 0 ? 'available' : kind}
                      className={f.id === 'santos' && step === 0 ? 'ak-pop' : ''} />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="ak__side" key={step}>
            <Panel step={step} />
          </div>
        </div>
      </div>
    </DemoShell>
  );
}
