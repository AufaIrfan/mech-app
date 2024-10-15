"use client";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import ModalConfirm from "../../../../components/modal/ModalConfirm";
import {
  faArrowLeftLong,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import CardDetails from "../../../../components/card/CardDetails";
import Alert from "../../../../components/alert/Alert";
import CardInputCanvas from "../../../../components/card/CardPlantCanvas";
import BtnSubmit from "../../../../components/button/BtnSubmit";
import formatDate from "../../../../hooks/fortmatDate";
import removeLocalstorage from "../../../../hooks/removeLocalstorage";
import getLocalstorage from "../../../../hooks/getLocalstorage";
import { useFetchMatDbase } from "../../../../Api/useFetch";
import setLocalstorage from "../../../../hooks/setLocalstorage";

export default function Page() {
  const router = useRouter();
  const { setGlobalFalse, dataBBFg } = useContext(GlobalContext);
  const [dbase1015, setDbase1015] = useState(
    getLocalstorage("dBase1015") || false
  );
  const [dbase1016, setDbase1016] = useState(
    getLocalstorage("dBase1016") || false
  );
  const [damageType, setDamageType] = useState(
    getLocalstorage("damageType") || false
  );
  const [details, setDetails] = useState(false);
  const [simpanConfirm, setSimpanConfirm] = useState(false);
  const [batalConfirm, setBatalConfirm] = useState(false);
  const [dataDisplay, setDataDisplay] = useState({
    date: "",
    pallet: "",
    checker: "",
    time: "",
  });

  useEffect(() => {
    if (
      Object.keys(dataBBFg).length == 0 ||
      Object.keys(dataBBFg.data1).length == 0
    ) {
      router.push("/pages/barang-bocor");
    } else {
      setGlobalFalse();
      cekLs();
      setDataDisplay({
        date: dataBBFg.data1.date,
        pallet: dataBBFg.data1.pallet,
        checker: dataBBFg.data1.checker,
        time: dataBBFg.data1.time,
      });
    }
  }, []);

  async function cekLs() {
    if (!dbase1015 || !dbase1016) {
      const fetchDamage = await useFetchMatDbase("getDamageType");
      const fetch1015 = await useFetchMatDbase("get1015");
      const fetch1016 = await useFetchMatDbase("get1016");
      if (!fetchDamage) setDamageType(fetchDamage);
      setLocalstorage("damageType", fetchDamage);
      if (!dbase1015) setDbase1015(fetch1015);
      setLocalstorage("dBase1015", fetch1015);
      if (!dbase1015) setDbase1015(fetch1015);
      setLocalstorage("dBase1015", fetch1015);
      if (!dbase1016) setDbase1016(fetch1016);
      setLocalstorage("dBase1016", fetch1016);
    }
  }

  const closeModal = () => {
    setSimpanConfirm(false);
    setBatalConfirm(false);
    setDel1015Confirm(false);
    setDel1016Confirm(false);
  };

  return (
    <div className="main-container bg-white">
      {simpanConfirm && (
        <ModalConfirm
          title="Simpan Data ?"
          yeslabel="Simpan"
          color="blue"
          yesAction={() => {}}
          noAction={() => {
            closeModal();
          }}
        />
      )}
      {batalConfirm && (
        <ModalConfirm
          title="Data akan dihapus, tetap keluar?"
          yeslabel="Keluar"
          color="red"
          yesAction={() => {
            removeLocalstorage("dataBBFg");
            router.push("/pages/barang-bocor");
          }}
          noAction={() => {
            closeModal();
          }}
        />
      )}

      <div className="w-full flex flex-col gap-4  pb-[6rem]">
        <div className="pt-4 mb-3 gap-2 w-full flex flex-row items-center justify-between">
          <h3 className="w-fit font-bold">Input Barang Bocor</h3>
          <button
            className="flex items-center gap-2 justify-end"
            onClick={() => setDetails(!details)}
          >
            <p className="text-sm px-3 py-1 bg-blue rounded-xl text-white">
              {formatDate(new Date(dataDisplay.date))}
            </p>
            <p className="text-sm px-3 py-1 bg-blue rounded-xl text-white">
              {dataDisplay.pallet}
            </p>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`duration-200 ${details && "rotate-180"}`}
            />
          </button>
        </div>
        {details && <CardDetails data={dataDisplay} />}
        <div className="w-full  flex flex-col gap-4 justify-between">
          <div className="flex flex-col gap-4">
            <Alert text={"Diisi oleh checker finish good"} style={"mb-2"} />
            <CardInputCanvas plant="1015" data={dbase1015} />
            <CardInputCanvas plant="1016" data={dbase1016} />
          </div>
        </div>
      </div>
      <div className="fixed w-full flex flex-row gap-4 mt-2 bottom-0 bg-white container mx-auto lg:max-w-[60vw] p-6 lg:px-12 ">
        <BtnSubmit
          title=""
          spinAct={false}
          icon={faArrowLeftLong}
          style="px-5 lg:px-16 btn-submit-gray-outline"
          onClick={() => {
            setBatalConfirm(true);
          }}
        />
        <BtnSubmit
          title="Simpan"
          spinAct={false}
          style="grow btn-submit-blue"
          onClick={() => {
            setSimpanConfirm(true);
          }}
        />
      </div>
    </div>
  );
}
