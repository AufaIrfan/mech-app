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
    <div className="main-container gap-4">
      <div className="pt-4 mb-2 gap-2 w-full flex flex-row items-center justify-between">
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
      {details && (
        <div className="w-full p-6 rounded-3xl bg-blue/20 text-blue ">
          <div className="flex flex-row gap-2 items-center mb-2">
            <FontAwesomeIcon icon={faInfoCircle} className="" />
            <p className=" font-bold">Details</p>
          </div>

          <div className="relative overflow-x-auto">
            <table className="text-sm text-left rtl:text-righ text-blue">
              <tbody>
                <tr className="">
                  <td className="pt-2">Tanggal</td>
                  <td className="pt-2 ps-4">27/09/2024</td>
                </tr>
                <tr className="">
                  <td className="pt-2">Pallet</td>
                  <td className="pt-2 ps-4">2</td>
                </tr>
                <tr className="">
                  <td className="pt-2 ">Checker</td>
                  <td className="pt-2 ps-4">Hasan</td>
                </tr>
                <tr className="">
                  <td className="pt-2 ">Mulai hitung</td>
                  <td className="pt-2 ps-4">12.30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div className="w-full min-h-[80vh] p-6 rounded-3xl bg-white  flex flex-col gap-4 justify-between">
        <div className="flex flex-col gap-4">
          <Alert
            text={"Diisi oleh checker finish good"}
            type="danger"
            style={"mb-3"}
          />

          <PlantInputCard plant="1015" />
          <PlantInputCard plant="1016" />
          <PlantInputCard plant="Retur" />
          <button
            data-modal-target="crud-modal"
            data-modal-toggle="crud-modal"
            className="block text-blue bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Toggle modal
          </button>
        </div>
        <div className="flex flex-row gap-4">
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
