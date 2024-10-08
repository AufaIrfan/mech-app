"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { faL } from "@fortawesome/free-solid-svg-icons";
const BtnMenu = ({ icon, title, to, notif = 0, onClick = () => {} }) => {
  const { setLoad } = useContext(GlobalContext);
  return (
    <Link
      href={to}
      onClick={() => {
        setLoad(true);
        onClick();
      }}
      className="relative group menu-item col-auto rounded-3xl p-5 bg-white hover:bg-blue duration-200"
    >
      <FontAwesomeIcon
        icon={icon}
        className="mb-2 text-3xl text-blue group-hover:text-white"
      />
      <p className="group-hover:text-white">{title}</p>
      {notif > 0 && (
        <div className="absolute top-4 right-4 text-xs  rounded-full w-6 aspect-square flex items-middle bg-red-500 group-hover:bg-white">
          <p className="text-white group-hover:text-blue">{notif}</p>
        </div>
      )}
    </Link>
  );
};

export default BtnMenu;
