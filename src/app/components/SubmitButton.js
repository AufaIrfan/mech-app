"use client";
import { faCheck, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function SubmitButton({ title = "Submit", onClick = () => {} }) {
  const [spinner, setspinner] = useState(false);
  return (
    <button
      onClick={() => {
        setspinner(true);
        onClick();
      }}
      className="w-full p-4 mt-2 rounded-2xl flex flex-row items-center justify-center bg-blue hover:bg-blue-hover text-white"
    >
      {spinner && (
        <FontAwesomeIcon icon={faCircleNotch} className="mr-2 animate-spin" />
      )}
      <p className="text-center">{title}</p>
    </button>
  );
}
