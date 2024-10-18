import { useEffect, useState } from "react";

export default function MidInput({
  data,
  disable = false,
  onchange = () => {},
  cekmid = () => {},
}) {
  const [dataset, setDataset] = useState(false);
  useEffect(() => setDataset(data.slice(1)), []);

  return (
    <>
      <input
        list="mid"
        name="mid"
        type="number"
        className="form-input"
        onChange={(e) => {
          onchange(e.target.value);
          cekmid(e.target.value);
        }}
        {...(disable && { disabled: true })}
      />
      <datalist id="mid">
        {dataset &&
          dataset.map((item, index) => (
            <option key={index} value={item[1]}>
              {item[2]}
            </option>
          ))}
      </datalist>
    </>
  );
}
