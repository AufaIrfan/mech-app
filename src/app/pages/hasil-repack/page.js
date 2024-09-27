import HomeButton from "../../components/HomeButton";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import SubmenuButton from "../../components/SubmenuButton";

export default function Page() {
  return (
    <div className="main-container">
      <HomeButton />
      <div className="text-left w-full py-4">
        <h2 className="text-2xl font-bold mb-6">Hasil Repack</h2>
        <SubmenuButton icon={faBoxesStacked} title="Input Hasil Repack" />
        <SubmenuButton icon={faBoxesStacked} title="Data Hasil Repack" />
        <SubmenuButton icon={faBoxesStacked} title="Laporan Hasil Repack" />
      </div>
    </div>
  );
}
