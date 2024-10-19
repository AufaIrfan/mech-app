import { useEffect, useState } from "react";

export default function MidInput({
  data,
  disable = false,
  onchange = () => {},
  cekmid = () => {},
  readysubmit,
}) {
  const [dataset, setDataset] = useState(false);
  const [mid, setMid] = useState(0);
  useEffect(() => {
    setDataset(data.slice(1));
    setMid(0);
  }, []);

  return (
    <>
      <input
        list="mid"
        name="mid"
        type="number"
        className={!mid && !readysubmit ? "form-input-false" : "form-input"}
        onChange={(e) => {
          onchange(e.target.value);
          setMid(e.target.value);
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
