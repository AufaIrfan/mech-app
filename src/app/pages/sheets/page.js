"use client";
import {
  faSquarePollHorizontal,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import BtnHome from "../../components/button/BtnHome";
import BtnSubmenu from "../../components/button/BtnSubmenu";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { setGlobalFalse } = useContext(GlobalContext);
  useEffect(() => setGlobalFalse(), []);
  return (
    <div className="main-container">
      <BtnHome />
      <div className="text-left w-full py-4">
        <h2 className="text-xl font-bold mb-6">Sheets</h2>
        <BtnSubmenu
          icon={faTable}
          title="Data Barang Bocor"
          onClick={() => {
            window.open(
              "https://docs.google.com/spreadsheets/d/1omQhkQyOApBwRMCE63hLx6TeyeIlTiqDtKaFsf6UBLk",
              "_blank"
            );
          }}
        />
        <BtnSubmenu
          icon={faTable}
          title="Material Database"
          onClick={() => {
            window.open(
              "https://docs.google.com/spreadsheets/d/1Vk0KiWTk614XharLMoBu0880iwbsQnBhdYwEvoulWi0",
              "_blank"
            );
          }}
        />
      </div>
    </div>
  );
}
