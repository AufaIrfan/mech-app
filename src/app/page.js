"use client";

import Image from "next/image";
import logo from "../app/img/logo.png";
import MenuButton from "./components/MenuButton";
import {
  faBoxesStacked,
  faBoxOpen,
  faChartSimple,
  faScissors,
  faSoap,
  faSquarePollHorizontal,
  faTable,
  faViruses,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { LoadingContext } from "./context/loadingContext";

export default function Home() {
  const { setLoading } = useContext(LoadingContext);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <main className="main-container">
      <div className="header-content flex flex-row gap-1.5 lg:gap-2 items-center justify-center rounded-3xl bg-blue min-w-full mb-6 p-4 py-6 lg:p-10">
        <Image
          src={logo}
          alt="Next.js Logo"
          className="w-[55px] lg:w-[70px] pr-2"
          priority
        />
        <h2 className="text-white text-2xl lg:text-3xl font-bold">
          Repack App
        </h2>
        <p className="text-blue text-xs lg:text-sm rounded-md px-1 bg-white">
          2.0
        </p>
        <p className="text-blue text-xs lg:text-sm rounded-md px-1 bg-white hidden lg:block">
          Beta
        </p>
      </div>

      <div className="menu-content w-full">
        <h3 className="text-lg font-bold mb-3">Menu</h3>
        <div className="menu-list grid grid-cols-2 gap-4 lg:gap-6">
          <MenuButton
            icon={faSoap}
            title="Barang Bocor"
            to="/pages/barang-bocor"
          />
          <MenuButton
            icon={faBoxesStacked}
            title="Hasil Repack"
            to="/pages/hasil-repack"
          />
          <MenuButton
            icon={faScissors}
            title="Scrapping"
            to="/pages/scrapping"
          />
          <MenuButton
            icon={faBoxOpen}
            title="Packaging"
            to="/pages/packaging"
          />
          <MenuButton
            icon={faSquarePollHorizontal}
            title="Stock Control"
            to="/pages/stock-control"
          />
          <MenuButton
            icon={faViruses}
            title="Data Quality"
            to="/pages/data-quality"
          />
          <MenuButton icon={faTable} title="Sheets" to="/pages/sheets" />
          <MenuButton icon={faChartSimple} title="Report" to="/pages/report" />
        </div>
      </div>
    </main>
  );
}
