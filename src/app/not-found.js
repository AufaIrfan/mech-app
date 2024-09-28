"use client";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { LoadingContext } from "./context/loadingContext";

export default function NotFound() {
  const { setLoading } = useContext(LoadingContext);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="main-container justify-center gap-3">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p>Halaman ini belum tersedia</p>
      <Link
        href="/"
        onClick={setLoading(true)}
        className="text-white bg-blue hover:bg-blue-hover px-6 py-2 rounded-xl mt-4"
      >
        Back to home
      </Link>
    </div>
  );
}
