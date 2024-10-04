"use client";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import ModalConfirm from "../../../../components/modal/ModalConfirm";
import {
  faA,
  faArrowLeftLong,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import CardDetails from "../../../../components/card/CardDetails";
import Alert from "../../../../components/alert/Alert";
import CardInputCanvas from "../../../../components/card/CardPlantCanvas";
import BtnSubmit from "../../../../components/button/BtnSubmit";

export default function Page() {
  const router = useRouter();
  const { setLoading } = useContext(GlobalContext);
  const [details, setDetails] = useState(false);
  const [confirmModalData, setConfirmModalData] = useState({
    color: "",
    title: "",
    yesLabel: "",
    yesAction: () => {},
  });
  const [data, setData] = useState({
    date: new Date().toISOString().split("T")[0],
    pallet: null,
    checker: null,
  });
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="main-container bg-white">
      <ModalConfirm
        color={confirmModalData.color}
        title={confirmModalData.title}
        yesLabel={confirmModalData.yesLabel}
        yesAction={confirmModalData.yesAction}
      />
      <div className="w-full flex flex-col gap-4  pb-[6rem]">
        <div className="pt-4 mb-3 gap-2 w-full flex flex-row items-center justify-between">
          <h3 className=" font-bold flex-grow">Input Barang Bocor</h3>
          <button
            className="flex items-middle gap-2"
            onClick={() => setDetails(!details)}
          >
            <p className="text-sm px-3 py-1 bg-blue rounded-xl text-white">
              FG
            </p>
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
        {details && <CardDetails />}
        <div className="w-full  flex flex-col gap-4 justify-between">
          <div className="flex flex-col gap-4">
            <Alert text={"Diisi oleh checker finish good"} style={"mb-2"} />

            <CardInputCanvas plant="1015" />
            <CardInputCanvas plant="1016" />
          </div>
        </div>
      </div>
      <div className="fixed w-full flex flex-row gap-4 mt-2 bottom-0 bg-white container mx-auto lg:max-w-[50vw] p-6 lg:p-12">
        <BtnSubmit
          title=""
          icon={faArrowLeftLong}
          type="gray-outline"
          style="pl-5 lg:px-16"
          onClick={() => router.push("/pages/barang-bocor")}
        />
        <BtnSubmit
          title="Simpan"
          style="flex-1"
          // onClick={() => {
          //   setConfirmModalData({
          //     color: "blue",
          //     title: "Simpan data ini?",
          //     yesLabel: "Simpan",
          //   });
          //   setOpenConfirmModal(true);
          // }}
        />
      </div>
    </div>
  );
}
