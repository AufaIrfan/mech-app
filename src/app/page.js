"use client";

import {
  faBoxOpen,
  faChartSimple,
  faClockRotateLeft,
  faDroplet,
  faScissors,
  faScrewdriverWrench,
  faSquarePollHorizontal,
  faTable,
  faToolbox,
  faViruses,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./context/GlobalContext";
import BtnMenu from "./components/button/BtnMenu";
import CardHome from "./components/card/CardHome";

export default function Home() {
  const { setGlobalFalse } = useContext(GlobalContext);
  useEffect(() => setGlobalFalse(), []);
  return (
    <main className="main-container">
      <CardHome />
      <div className="menu-content w-full">
        <h3 className="text-lg font-bold mb-3">Menu</h3>
        <div className="menu-list grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          <BtnMenu
            icon={faScrewdriverWrench}
            title="Repair"
            to="/pages/repair"
          />
          <BtnMenu
            icon={faClockRotateLeft}
            title="History"
            to="/pages/hasil-repack"
          />
          {/* <BtnMenu icon={faScissors} title="Scrapp" to="/pages/scrapp" />
          <BtnMenu icon={faBoxOpen} title="Packaging" to="/pages/packaging" />
          <BtnMenu icon={faDroplet} title="SFG" to="/pages/sfg" /> */}
          <BtnMenu
            icon={faSquarePollHorizontal}
            title="Stock Control"
            to="/pages/stock-control"
          />
          <BtnMenu
            icon={faViruses}
            title="Report"
            to="/pages/data-quality"
          />
          <BtnMenu icon={faTable} title="Sheets" to="/pages/sheets" />
          <BtnMenu icon={faChartSimple} title="Report" to="/pages/report" />
          <BtnMenu
            icon={faToolbox}
            title="Maintenance"
            to="/pages/packaging"
            notif={5}
          />
        </div>
      </div>
    </main>
  );
}
