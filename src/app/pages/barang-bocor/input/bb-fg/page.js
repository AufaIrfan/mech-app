"use client";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../../../context/loadingContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronDown,
  faEllipsis,
  faI,
  faInfo,
  faInfoCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import SubmitButton from "../../../../components/SubmitButton";
import { useRouter } from "next/navigation";
import Alert from "../../../../components/Alert";
import ContentTable from "../../../../components/ContentTable";
import PlantInputCard from "../../../../components/PlantInputCard";
import InputModal from "../../../../components/InputModal";
import DetailInputCard from "../../../../components/DetailInputCard";

export default function Page() {
  const router = useRouter();
  const { setLoading } = useContext(LoadingContext);
  const [details, setDetails] = useState(false);
  const [data, setData] = useState({
    date: new Date().toISOString().split("T")[0],
    pallet: null,
    checker: null,
  });
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="main-container gap-4 bg-white rounded-b-3xl shadow-sm">
      <div className="pt-4 mb-3 gap-2 w-full flex flex-row items-center justify-between">
        <h3 className=" font-bold flex-grow">Input Barang Bocor</h3>
        <button
          className="flex items-middle gap-2"
          onClick={() => setDetails(!details)}
        >
          <p className="text-sm px-3 py-1 bg-blue rounded-xl text-white">
            27/09/2024
          </p>
          <p className="text-sm px-3 py-1 mr-2 bg-blue rounded-xl text-white">
            2
          </p>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`duration-200 mx-auto ${details && "rotate-180"}`}
          />
        </button>
      </div>
      {details && <DetailInputCard />}
      <div className="w-full min-h-[80vh]  flex flex-col gap-4 justify-between">
        <div className="flex flex-col gap-4">
          <Alert text={"Diisi oleh checker finish good"} style={"mb-2"} />

          <PlantInputCard plant="1015" />
          <PlantInputCard plant="1016" />
        </div>
        <div className="flex flex-row gap-4 mt-2">
          <SubmitButton
            title="Batal"
            type="red-outline"
            onClick={() => router.push("/pages/barang-bocor")}
          />
          <SubmitButton title="Simpan" />
        </div>
      </div>
    </div>
  );
}
