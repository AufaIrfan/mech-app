"use client";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CountInput({ qty, setQty, cek }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <button
        onClick={() => setQty(Number(qty) - 1)}
        className="font-bold btn-submit btn-submit-blue-outline"
        {...(qty == 0 && { disabled: true })}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>

      <input
        type="number"
        className={`text-center col-span-2 ${
          !cek && !qty ? "form-input-false" : "form-input"
        }`}
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
      />
      <button
        onClick={() => setQty(Number(qty) + 1)}
        className="font-bold btn-submit btn-submit-blue-outline"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}
