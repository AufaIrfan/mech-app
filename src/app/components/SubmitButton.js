"use client";
import { faCheck, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function SubmitButton({
  title = "Submit",
  type = "blue",
  style,
  onClick = () => {},
}) {
  const [spinner, setspinner] = useState(false);
  let typeStyle = "";
  switch (type) {
    case "blue":
      typeStyle =
        "bg-blue hover:bg-blue-hover text-white disabled:bg-blue/80 p-3";
      break;
    case "blue-outline":
      typeStyle =
        "border border-blue/70 text-blue hover:border-blue disabled:border-blue/50 disabled:text-blue/70 p-2.5";
      break;
    case "red":
      typeStyle =
        "bg-red-500 hover:bg-red-600 text-white disabled:bg-red-400 p-3";
      break;
    case "red-outline":
      typeStyle =
        "border border-red-400 text-red-500 hover:border-red-600 disabled:border-red-300 disabled:text-red-400 p-2.5";
      break;

    default:
      break;
  }
  return (
    <button
      onClick={() => {
        setspinner(true);
        onClick();
      }}
      className={`w-full rounded-2xl flex flex-row items-center justify-center  ${typeStyle}`}
      {...(spinner && { disabled: true })}
    >
      {spinner && (
        <FontAwesomeIcon icon={faCircleNotch} className="mr-2 animate-spin" />
      )}
      <p className="text-center">{title}</p>
    </button>
  );
}
