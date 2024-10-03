export default function FormInput({ label, children }) {
  return (
    <div className="mb-2">
      <div className="mb-2 text-dark/70 text-sm">{label}</div>
      {children}
    </div>
  );
}
