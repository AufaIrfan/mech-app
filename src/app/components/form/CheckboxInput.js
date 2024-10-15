export default function CheckboxInput({ label, value, onChange }) {
  return (
    <div className="flex flex-row gap-3 items-center">
      <input
        type="checkbox"
        id="checkbox"
        name="checkbox"
        value={value}
        onChange={onChange}
        className="rounded-full p-2"
      />
      <label className="m-0">{label}</label>
    </div>
  );
}
