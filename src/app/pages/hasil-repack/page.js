"use client";

import HomeButton from "../../components/HomeButton";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
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
        <h2 className="text-2xl font-bold mb-6">Hasil Repack</h2>
        <SubmenuButton
          to="/pages/hasil-repack/form/input-hr"
          icon={faBoxesStacked}
          title="Input Hasil Repack"
        />
        <SubmenuButton icon={faBoxesStacked} title="Data Hasil Repack" />
        <SubmenuButton icon={faBoxesStacked} title="Laporan Hasil Repack" />
      </div>
    </div>
  );
}
