"use client";
import { faCheck, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function BtnSubmit({ title, icon, style, onClick = () => {} }) {
  return (
    <button onClick={() => onClick()} className={`btn-submit ${style}`}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {title && <p className="text-center">{title}</p>}
    </button>
  );
}
