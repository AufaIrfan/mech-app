export default function FormInput({ label, children, style }) {
  return (
    <div className={`mb-2 ${style}`}>
      <div className="mb-2 text-dark/70 text-sm">{label}</div>
      {children}
    </div>
  );
}
