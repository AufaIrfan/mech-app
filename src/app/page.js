import Image from "next/image";
import logo from "../app/img/logo.png";
import MenuButton from "./components/MenuButton";
import {
  faBoxesStacked,
  faBoxOpen,
  faChartSimple,
  faScissors,
  faSoap,
  faSquare,
  faSquarePollHorizontal,
  faTable,
  faViruses,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="main-container">
      <div className="header-content flex flex-row gap-1.5 lg:gap-2 items-center justify-center rounded-xl bg-blue min-w-full p-4 py-6 lg:p-10">
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
          <MenuButton icon={faSoap} title="Barang Bocor" />
          <MenuButton icon={faBoxesStacked} title="Hasil Repack" />
          <MenuButton icon={faScissors} title="Scrapping" />
          <MenuButton icon={faBoxOpen} title="Packaging" />
          <MenuButton icon={faSquarePollHorizontal} title="Stock Control" />
          <MenuButton icon={faViruses} title="Data Quality" />
          <MenuButton icon={faTable} title="Sheets" />
          <MenuButton icon={faChartSimple} title="Report" />
        </div>
      </div>
    </main>
  );
}
