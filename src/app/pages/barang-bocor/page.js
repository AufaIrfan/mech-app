import HomeButton from "../../components/HomeButton";
import { faSoap } from "@fortawesome/free-solid-svg-icons";
import SubmenuButton from "../../components/SubmenuButton";

export default function Page() {
  return (
    <div className="main-container">
      <HomeButton />
      <div className="text-left w-full py-4">
        <h2 className="text-2xl font-bold mb-6">Barang Bocor</h2>
        <SubmenuButton
          icon={faSoap}
          title="Input Barang Bocor"
          subtitle="Finish Good"
        />
        <SubmenuButton
          icon={faSoap}
          title="Input Barang Bocor"
          subtitle="Repack"
        />
        <SubmenuButton icon={faSoap} title="Data Barang Bocor" />
        <SubmenuButton icon={faSoap} title="Validasi" />
      </div>
    </div>
  );
}
