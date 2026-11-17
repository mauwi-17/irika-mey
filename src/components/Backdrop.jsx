// Decorative background: three slow-drifting aurora glows (#fe7295 pink + violet) and film grain.
// aria-hidden because it carries no information for screen readers.
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="aurora aurora--a" />
      <div className="aurora aurora--b" />
      <div className="aurora aurora--c" />
      <div className="grain" />
    </div>
  );
}
