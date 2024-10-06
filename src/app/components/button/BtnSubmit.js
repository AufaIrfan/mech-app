"use client";
import { faCheck, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function BtnSubmit({
  title = "Submit",
  spinAct = true,
  icon = "",
  style,
  onClick = () => {},
}) {
  const [spinner, setSpinner] = useState(false);
  return (
    <button
      onClick={() => {
        spinAct && setSpinner(true);
        onClick();
      }}
      className={`btn-submit ${style}`}
      {...(spinner && { disabled: true })}
    >
      {spinner ? (
        <FontAwesomeIcon icon={faCircleNotch} className="animate-spin" />
      ) : (
        icon && <FontAwesomeIcon icon={icon} />
      )}
      {title != "" && <p className="text-center mx-2">{title}</p>}
    </button>
  );
}
