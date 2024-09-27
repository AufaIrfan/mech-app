import HomeButton from "../../components/HomeButton";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import SubmenuButton from "../../components/SubmenuButton";

export default function Page() {
  return (
    <div className="main-container">
      <HomeButton />
      <div className="text-left w-full py-4">
        <h2 className="text-2xl font-bold mb-6">Sheets</h2>
        <SubmenuButton icon={faTable} title="Data Barang Bocor" />
        <SubmenuButton icon={faTable} title="Data Hasil Repack" />
        <SubmenuButton icon={faTable} title="Laporan Hasil Repack" />
      </div>
    </div>
  );
}
