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
import getLs from "../../../../hooks/getLs";
import { useFetchMatDbase, usePostBarboc } from "../../../../Api/useFetch";
import setLs from "../../../../hooks/setLs";
import mergeMid from "../../../../hooks/mergeMid";
import formatDataBB from "../../../../hooks/formatDataBB";

export default function Page() {
  const router = useRouter();
  const { setGlobalFalse, dataBBFg, setLoad, setNotif } =
    useContext(GlobalContext);
  const [dbase1015, setDbase1015] = useState(getLs("dBase1015") || false);
  const [dbase1016, setDbase1016] = useState(getLs("dBase1016") || false);
  const [details, setDetails] = useState(false);
  const [simpanConfirm, setSimpanConfirm] = useState(false);
  const [batalConfirm, setBatalConfirm] = useState(false);
  const [dataDisplay, setDataDisplay] = useState({
    date: "",
    pallet: "",
    checker: "",
    time: "",
  });

  const [storeData1015, setStoreData1015] = useState(
    (getLs("dataBBFg") && getLs("dataBBFg").data2.storeData1015) || []
  );
  const [storeData1016, setStoreData1016] = useState(
    (getLs("dataBBFg") && getLs("dataBBFg").data2.storeData1016) || []
  );

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

  useEffect(() => {
    setLs("dataBBFg", {
      ...dataBBFg,
      data2: {
        storeData1015,
        storeData1016,
      },
    });
  }, [storeData1015, storeData1016]);

  async function cekLs() {
    if (!dbase1015 || !dbase1016) {
      const fetch1015 = await useFetchMatDbase("get1015");
      const fetch1016 = await useFetchMatDbase("get1016");
      if (!dbase1015) setDbase1015(fetch1015);
      setLs("dBase1015", fetch1015);
      if (!dbase1015) setDbase1015(fetch1015);
      setLs("dBase1015", fetch1015);
      if (!dbase1016) setDbase1016(fetch1016);
      setLs("dBase1016", fetch1016);
    }
  }

  const closeModal = () => {
    setSimpanConfirm(false);
    setBatalConfirm(false);
  };

  return (
    <div className="main-container bg-white">
      {simpanConfirm && (
        <ModalConfirm
          title="Simpan Data ?"
          yeslabel="Simpan"
          color="blue"
          yesAction={async () => {
            let lsStoreD = getLs("dataBBFg");
            if (lsStoreD.data2.storeData1015.length > 0) {
              setLoad([true]);
              let merge1015 = mergeMid(lsStoreD.data2.storeData1015);
              let format1015 = formatDataBB(
                lsStoreD.data1,
                merge1015,
                new Date()
              );
              setSimpanConfirm(false);
              await usePostBarboc("postInputedDataFg", format1015);
              await usePostBarboc("deleteOninputFg", [
                lsStoreD.data1.date + "-" + lsStoreD.data1.pallet,
              ]);
              // removeLocalstorage("dataBBFg");
              setNotif({
                show: true,
                type: "success",
                text: "Data berhasil disimpan",
              });
              router.push("/pages/barang-bocor");
            }
          }}
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
          yesAction={async () => {
            closeModal();
            setLoad([true]);
            await usePostBarboc("deleteOninputFg", [
              dataBBFg.data1.date + "-" + dataBBFg.data1.pallet,
            ]);
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
            <CardInputCanvas
              plant={1015}
              dbase={dbase1015}
              storedData={storeData1015}
              setStoredData={setStoreData1015}
            />
            <CardInputCanvas
              plant={1016}
              dbase={dbase1016}
              storedData={storeData1016}
              setStoredData={setStoreData1016}
            />
          </div>
        </div>
      </div>
      <div className="fixed w-full flex flex-row gap-4 mt-2 bottom-0 bg-white container mx-auto xl:max-w-[60vw] p-6 xl:px-12 ">
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
