"use client";
import { faSquarePollHorizontal } from "@fortawesome/free-solid-svg-icons";
import BtnHome from "../../components/button/BtnHome";
import BtnSubmenu from "../../components/button/BtnSubmenu";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function Page() {
  const { setGlobalFalse } = useContext(GlobalContext);
  useEffect(() => setGlobalFalse(), []);
  return (
    <div className="main-container">
      <BtnHome />
      <div className="text-left w-full py-4">
        <h2 className="text-xl font-bold mb-6">Stock Control</h2>
        <BtnSubmenu
          icon={faSquarePollHorizontal}
          title="Stock Overview"
          subtitle="Plant 1015"
          onClick={() => {}}
        />
        <BtnSubmenu
          icon={faSquarePollHorizontal}
          title="Stock Overview"
          subtitle="Plant 1016"
          onClick={() => {}}
        />
        <BtnSubmenu
          icon={faSquarePollHorizontal}
          title="Stock Overview"
          subtitle="SFG"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
