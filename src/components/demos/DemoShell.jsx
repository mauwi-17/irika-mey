// Shared frame for the interactive demos: a stage, clickable steps with a progress bar,
// a play/pause button (WCAG 2.2.2: moving content must be pausable), and a live caption.
import { Pause, Play } from '../Icons.jsx';

export default function DemoShell({ title, steps, stepper, children }) {
  const { ref, step, go, isPlaying, running, toggle, interval } = stepper;

  return (
    <div className="demo" ref={ref} style={{ '--interval': `${interval}ms` }}>
      <div className="demo__head">
        <p className="label label--pink">See it in motion</p>
        <p className="demo__title">{title}</p>
        <button type="button" className="btn btn--ghost btn--sm" onClick={toggle} aria-pressed={!isPlaying}>
          {isPlaying ? <><Pause /> Pause</> : <><Play /> Play</>}
        </button>
      </div>

      <div className="demo__stage">{children}</div>

      <div className="demo__foot">
        <ol className="demo__steps">
          {steps.map((s, i) => (
            <li key={s.label}>
              <button
                type="button"
                onClick={() => go(i)}
                aria-current={i === step ? 'step' : undefined}
                className={i === step && running ? 'is-running' : ''}
              >
                <span className="demo__step-num">{String(i + 1).padStart(2, '0')}</span>
                {s.label}
                {/* key restarts the progress animation on each step */}
                <span className="demo__progress" key={`${step}-${running}`} aria-hidden="true" />
              </button>
            </li>
          ))}
        </ol>
        <p className="demo__caption" aria-live="polite">
          <strong>{steps[step].label}:</strong> {steps[step].caption}
        </p>
        <p className="demo__note">Simplified recreation with sample data. Visit the live site for the real system.</p>
      </div>
    </div>
  );
}
