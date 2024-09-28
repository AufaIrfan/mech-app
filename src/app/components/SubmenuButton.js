"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext } from "react";
import { LoadingContext } from "../context/loadingContext";

export default function SubmenuButton({
  to = "/404",
  icon,
  title,
  subtitle,
  onClick = () => {},
}) {
  const { setLoading } = useContext(LoadingContext);
  return (
    <Link
      href={to}
      onClick={() => {
        setLoading(true);
        onClick();
      }}
      className="group flex flex-row w-full gap-4 mb-4 lg:mb-6 bg-white hover:bg-blue rounded-3xl p-4 items-center shadow-sm duration-200"
    >
      <div className="flex w-[3em] h-[3em] rounded-2xl bg-slate justify-center items-center">
        <FontAwesomeIcon icon={icon} className="text-blue text-xl" />
      </div>
      <div>
        <p className="text-left group-hover:text-white">{title}</p>
        {subtitle && (
          <p className="text-sm text-left text-blue/70 group-hover:text-white">
            {subtitle}
          </p>
        )}
      </div>
    </Link>
  );
}
