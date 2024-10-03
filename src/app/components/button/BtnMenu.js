"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
const BtnMenu = ({ icon, title, to, onClick = () => {} }) => {
  const { setLoading } = useContext(GlobalContext);
  return (
    <Link
      href={to}
      onClick={() => {
        setLoading(true);
        onClick();
      }}
      className="group menu-item col-auto rounded-3xl p-5 bg-white hover:bg-blue duration-200"
    >
      <FontAwesomeIcon
        icon={icon}
        className="mb-2 text-3xl text-blue group-hover:text-white"
      />
      <p className="group-hover:text-white">{title}</p>
    </Link>
  );
};

export default BtnMenu;
