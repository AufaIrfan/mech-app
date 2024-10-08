"use client";
import { faCircleNotch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function Load({ text = "loading" }) {
  const { load } = useContext(GlobalContext);
  if (load) {
    return (
      <div className=" fixed top-0 left-0 bg-black/20 w-full h-full flex items-center justify-center z-20">
        <div className="flex flex-row items-center justify-center p-4 px-6 bg-white rounded-xl">
          <FontAwesomeIcon
            icon={faCircleNotch}
            className="text-blue text-3xl animate-spin mr-3"
          />
          <p>{text}</p>
          <p className="ml-1 animate-pulse">...</p>
        </div>
      </div>
    );
  }
}
