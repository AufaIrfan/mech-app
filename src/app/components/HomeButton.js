"use client";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext } from "react";
import { LoadingContext } from "../context/loadingContext";

export default function HomeButton() {
  const { setLoading } = useContext(LoadingContext);
  return (
    <Link
      href="/"
      onClick={() => setLoading(true)}
      className="fixed bottom-0 right-0 bg-blue hover:bg-blue-hover rounded-full mb-4 mr-4 w-[4em] h-[4em] flex items-center justify-center"
    >
      <FontAwesomeIcon icon={faHome} className="text-white text-xl" />
    </Link>
  );
}
