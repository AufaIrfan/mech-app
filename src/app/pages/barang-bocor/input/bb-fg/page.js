"use client";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../../../context/loadingContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import SubmitButton from "../../../../components/SubmitButton";
import { useRouter } from "next/navigation";
import Alert from "../../../../components/Alert";
import ContentTable from "../../../../components/ContentTable";

export default function Page() {
  const router = useRouter();
  const { setLoading } = useContext(LoadingContext);
  const [input1015, setInput1015] = useState(false);
  const [data, setData] = useState({
    date: new Date().toISOString().split("T")[0],
    pallet: null,
    checker: null,
  });
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="main-container">
      <div className="py-4 mb-4 w-full flex flex-row items-center justify-between">
        <h3 className="text-xl font-bold flex-grow text-center">
          Input Barang Bocor
        </h3>
      </div>
      <div className="w-full p-6 rounded-3xl bg-white flex flex-col gap-4 mb-3">
        <div className="flex flex-row items-middle text-blue gap-2">
          <p className="text-sm p-2 px-4 rounded-full bg-blue/20">
            12 September 2024
          </p>
          <p className="text-sm p-2 px-4 rounded-full bg-blue/20">Pallet 1</p>
        </div>
      </div>
      <div className="w-full p-6 rounded-3xl bg-white flex flex-col gap-4">
        <Alert text={"Diisi oleh checker finisg good"} type="danger" />

        <div className="mt-4">
          <button
            onClick={() => setInput1015(!input1015)}
            className={`flex flex-row w-full items-middle gap-2 p-4 text-white duration-200 ${
              input1015
                ? "rounded-t-2xl bg-blue/80"
                : "rounded-2xl bg-gray-400 hover:bg-blue"
            }`}
          >
            <p className="">Plant 1015</p>
            {!input1015 && <FontAwesomeIcon icon={faPlusCircle} className="" />}
          </button>
          {input1015 && (
            <div className="flex flex-col gap-3 p-4 rounded-b-2xl border border-blue/60 mb-4 duration-200">
              <div className="w-fit mx-auto flex flex-row items-middle gap-2 p-3 px-5 rounded-xl border border-blue/60 text-blue text-sm">
                <p className="">Tambah</p>
                <FontAwesomeIcon icon={faPlusCircle} className="" />
              </div>
            </div>
          )}
        </div>
        <div className="">
          <div className="flex flex-row items-middle gap-2 p-4 rounded-t-2xl bg-blue/80 text-white">
            <p className="">Plant 1016</p>
          </div>
          <div className="flex flex-col gap-3 p-4 rounded-b-2xl border border-blue/60 mb-4">
            <div className="">{/* <ContentTable /> */}</div>
            <div className="w-fit mx-auto flex flex-row items-middle gap-2 p-3 px-5 rounded-xl border border-blue/60 text-blue text-sm">
              <p className="">Tambah</p>
              <FontAwesomeIcon icon={faPlusCircle} className="" />
            </div>
          </div>
        </div>
        <SubmitButton title="Simpan" />
        <SubmitButton
          title="Batal"
          type="red-outline"
          onClick={() => router.push("/pages/barang-bocor")}
        />
      </div>
    </div>
  );
}
