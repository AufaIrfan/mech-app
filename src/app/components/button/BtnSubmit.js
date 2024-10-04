"use client";
import { faCheck, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function BtnSubmit({
  title = "Submit",
  icon = "",
  type = "blue",
  style,
  onClick = () => {},
}) {
  const [spinner, setspinner] = useState(false);
  let typeStyle = "";
  switch (type) {
    case "blue":
      typeStyle = "bg-blue hover:bg-blue-hover text-white disabled:bg-blue/80";
      break;
    case "blue-outline":
      typeStyle =
        "border border-blue/70 text-blue hover:border-blue disabled:border-blue/50 disabled:text-blue/70";
      break;
    case "red":
      typeStyle = "bg-red-500 hover:bg-red-600 text-white disabled:bg-red-400";
      break;
    case "red-outline":
      typeStyle =
        "border border-red-400 text-red-500 hover:border-red-600 disabled:border-red-300 disabled:text-red-400";
      break;
    case "gray-outline":
      typeStyle =
        "border border-gray-400 text-gray-500 hover:border-gray-600 hover:text-gray-600 disabled:border-gray-300 disabled:text-gray-400";
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
      className={`rounded-2xl flex flex-row items-center justify-center  p-3 ${typeStyle} ${style}`}
      {...(spinner && { disabled: true })}
    >
      {spinner ? (
        <FontAwesomeIcon icon={faCircleNotch} className="mr-2 animate-spin" />
      ) : (
        <FontAwesomeIcon icon={icon} className="mr-2" />
      )}
      <p className="text-center">{title}</p>
    </button>
  );
}
