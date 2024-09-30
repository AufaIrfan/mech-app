"use client";
import HomeButton from "../../components/HomeButton";
import { faSoap } from "@fortawesome/free-solid-svg-icons";
import SubmenuButton from "../../components/SubmenuButton";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../../context/loadingContext";

export default function Page() {
  const { setLoading } = useContext(LoadingContext);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="main-container">
      <HomeButton />
      <div className="text-left w-full py-4">
        <h2 className="text-2xl font-bold mb-6">Barang Bocor</h2>
        <SubmenuButton
          to="/pages/barang-bocor/form/bb-fg"
          icon={faSoap}
          title="Input Barang Bocor"
          subtitle="Finish Good"
        />
        <SubmenuButton
          to="/pages/barang-bocor/form/bb-rpk"
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
