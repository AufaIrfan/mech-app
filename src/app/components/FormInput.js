export default function FormInput({ label, children }) {
  return (
    <div className="mb-3">
      <div className="mb-3 text-dark/70">{label}</div>
      {children}
    </div>
  );
}
