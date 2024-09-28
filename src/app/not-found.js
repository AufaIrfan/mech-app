"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "./context/loadingContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  const { setLoading } = useContext(LoadingContext);
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="main-container justify-center gap-3">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p>Halaman ini belum tersedia</p>
      <Link
        href="/"
        onClick={() => {
          setSpinner(true);
        }}
        className="text-white flex flex-row bg-blue hover:bg-blue-hover px-6 py-2 rounded-xl mt-4 items-center gap-2"
      >
        {spinner && (
          <FontAwesomeIcon icon={faCircleNotch} className="animate-spin" />
        )}
        <p>Back to home</p>
      </Link>
    </div>
  );
}
