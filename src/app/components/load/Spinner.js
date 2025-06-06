"use client";
import { faCircleNotch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Spinner({ style, text = "loading" }) {
  return (
    <div className="flex flex-row items-center justify-center p-4 px-6 bg-white rounded-xl">
      <FontAwesomeIcon
        icon={faCircleNotch}
        className="text-blue text-3xl animate-spin mr-3"
      />
      <p>{text}</p>
      <p className="ml-1 animate-pulse">...</p>
    </div>
  );
}
