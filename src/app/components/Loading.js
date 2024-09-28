"use client";
import { faCircleNotch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoadingContext } from "../context/loadingContext";
import { useContext } from "react";

export default function Loading({ text = "Loading" }) {
  const { loading } = useContext(LoadingContext);
  if (loading) {
    return (
      <div className=" fixed top-0 left-0 bg-black/20 w-full h-full flex items-center justify-center">
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
