"use client";

import { faChevronUp, faPlus, faSoap } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import BtnHome from "../../components/button/BtnHome";
import BtnSubmenu from "../../components/button/BtnSubmenu";
import Alert from "../../components/alert/Alert";
import FormInput from "../../components/form/FormInput";
import ModalForm from "../../components/modal/ModalForm";
import { useRouter } from "next/navigation";
import CountInput from "../../components/form/CountInput";
import setLs from "../../hooks/setLs";
import {
  useScriptRepair,
  useScriptmechStock,
  usePostRepair,
} from "../../Api/useScript";
import getLs from "../../hooks/getLs";
import LoadFooter from "../../components/load/loadFooter";
import updateLocalstorage from "../../hooks/updateLocalstorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import capitalize from "../../hooks/capitalize";
import Html5BarcodeScanner from "../../components/scan/Html5BarcodeScanner";

function ModalRepair({ closeModal }) {
  const router = useRouter();
  const checkers = getLs("checkerRepair") || false;
  const [AlertOption, setAlertOption] = useState([
    "blue",
    "Diisi oleh Mekanik",
  ]);
  const { setLoad, setDataRepair } = useContext(GlobalContext);
  const [addChecker, setAddChecker] = useState(false);
  const [readySubmit, setReadySubmit] = useState(true);
  const [sparepart, setSparePart] = useState(0);
  const [data, setData] = useState({
    date: new Date().toISOString().split("T")[0],
    sparepart: "",
    checker: "",
    time: new Date().getHours() + ":" + new Date().getMinutes(),
  });
  const [scannedData, setScannedData] = useState('');

  useEffect(() => {
    setData({ ...data, sparepart: sparepart });
  }, [sparepart]);

  return (
    <ModalForm
      title="Repair Mesin"
      submitAct={() => {
        // if (
        //   data.date &&
        //   data.sparepart &&
        //   data.checker &&
        //   data.checker != "Data empty"
        // ) {
        //   setDataRepair({ data1: data });
        //   setLs("dataRepair", {
        //     data1: data,
        //     data2: { storeData1015: [], storeData1016: [] },
        //   });
        //   addChecker && addCheckerRepair();
        //   cekInputedRepair();
        //   //----------------------------------------------------------
        //   function addCheckerRepair() {
        //     setLoad([true, "Add checker"]);
        //     usePostRepair("postCheckerRepair", [data.checker]);
        //   }
        //   async function cekInputedRepair() {
        //     closeModal();
        //     setLoad([true, "Checking data"]);
        //     const res = await usePostRepair("postOninputRepair", [
        //       data.date + "-" + data.sparepart,
        //     ]);
        //     if (res.result == "data already exists") {
        //       setLoad([false]);
        //       setAlertOption([
        //         "red",
        //         "Sparepart " + data.sparepart + " sudah diinput",
        //       ]);
        //     } else if (res.result == "success") {
        //       setLoad([true, "Success"]);
        //       router.push("/pages/repair/input/replace-spare");
        //     } else {
        //       router.push("/pages/repair");
        //       setLoad([false]);
        //     }
        //   }
        // } else {
        //   setReadySubmit(false);
        // }
      }}
      closeAct={closeModal}
    >
      <Alert type={AlertOption[0]} text={AlertOption[1]} style="mb-2" />
      <div style={{ padding: 20 }}>
        <h1>Barcode / QR Code Scanner</h1>
        <Html5BarcodeScanner onScanSuccess={(data) => setScannedData(data)} />
        <div style={{ marginTop: 20 }}>
          <strong>Scanned Code:</strong>
          <div>{scannedData || 'Waiting for scan...'}</div>
        </div>
      </div>
      <FormInput label="Tanggal">
        <input
          type="date"
          value={data.date}
          onChange={(e) => setData({ ...data, date: e.target.value })}
          className={
            !readySubmit && !data.date ? "form-input-false" : "form-input"
          }
        />
      </FormInput>
      <FormInput label="Isi Perbaikan">
        {/* <CountInput qty={sparepart} setQty={setSparePart} cek={readySubmit} /> */}
        <input
          type="text"
          value={data.repairDesc}
          className={
            !readySubmit && !data.repairDesc ? "form-input-false" : "form-input"
          }
        />
      </FormInput>
      <FormInput label="Keterangan">
        {/* <CountInput qty={sparepart} setQty={setSparePart} cek={readySubmit} /> */}
        <input
          type="text"
          value={data.repairDesc}
          className={
            !readySubmit && !data.repairDesc ? "form-input-false" : "form-input"
          }
        />
      </FormInput>
      <div className="flex gap-x-3 items-end">
        <FormInput label="Checker" style="grow">
          {addChecker ? (
            <textarea
              rows={3}
              className={
                addChecker &&
                  !readySubmit &&
                  (data.checker == "Data empty" || !data.checker)
                  ? "form-input-false"
                  : "form-input"
              }
              value={data.checker}
              onChange={(e) =>
                setData({ ...data, checker: capitalize(e.target.value) })
              }
            />
          ) : (
            <select
              className={
                !addChecker &&
                  !readySubmit &&
                  (data.checker == "Data empty" || !data.checker)
                  ? "form-input-false"
                  : "form-input"
              }
              onChange={(e) => setData({ ...data, checker: e.target.value })}
            >
              <option value="">Pilih Checker</option>
              {checkers.length > 0 ? (
                checkers.map((checker, i) => (
                  <option key={i} value={checker}>
                    {checker}
                  </option>
                ))
              ) : (
                <option>Loading ...</option>
              )}
            </select>
          )}
        </FormInput>
        <button
          onClick={() => {
            setAddChecker(!addChecker), setData({ ...data, checker: "" });
          }}
          className={`group p-3 px-4 border rounded-2xl flex items-middle hover:border-blue duration-200 ${addChecker ? "mb-4" : "mb-2"
            }`}
        >
          {addChecker ? (
            <FontAwesomeIcon
              icon={faChevronUp}
              className={` text-gray-500 group-hover:text-blue duration-200`}
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlus}
              className={` text-gray-500 group-hover:text-blue duration-200`}
            />
          )}
        </button>
      </div>
    </ModalForm>
  );
}
function ModalStock({ closeModal }) {
  const router = useRouter();
  const { setLoad, dataStock, setDataStock } = useContext(GlobalContext);
  const [readySubmit, setReadySubmit] = useState(true);
  const [checkers, setCheckers] = useState(getLs("checkerStock") || false);
  const [sparepart, setSparepart] = useState(0);
  const [data, setData] = useState({
    date: new Date().toISOString().split("T")[0],
    sparepart: "",
    checker: "",
    time: new Date().getHours() + ":" + new Date().getMinutes(),
  });

  useEffect(() => {
    if (!checkers) {
      updateLocalstorage(
        "checkerStock",
        () => useScriptmechStock("getCheckerStock"),
        () => setCheckers(getLs("checkerMech"))
      );
    }
  }, []);

  useEffect(() => {
    setData({ ...data, sparepart: sparepart });
  }, [sparepart]);

  return (
    <ModalForm
      title="Stock Control"
      submitAct={() => {
        if (data.date && data.sparepart && data.checker) {
          setLoad([true]);
          setData({ ...dataStock, data1: data });
          setLs("dataStock", { ...dataStock, data1: data });
          router.push("/pages/repair/input/stock");
        } else {
          setReadySubmit(false);
        }
      }}
      closeAct={closeModal}
    >
      <Alert text="Diisi oleh admin gudang mekanik" style="mb-2" />
      <FormInput label="Tanggal">
        <input
          type="date"
          value={data.date}
          onChange={(e) => setData({ ...data, date: e.target.value })}
          className={
            !readySubmit && !data.date ? "form-input-false" : "form-input"
          }
        />
      </FormInput>
      <FormInput label="Sparepart">
        <CountInput qty={sparepart} setQty={setSparepart} cek={readySubmit} />
      </FormInput>
      <FormInput label="Checker">
        <select
          className={
            !readySubmit && !data.checker ? "form-input-false" : "form-input"
          }
          onChange={(e) => setData({ ...data, checker: e.target.value })}
        >
          <option value="">Pilih Mekanik</option>
          {checkers.length > 1 ? (
            checkers.map((checker, i) => (
              <option key={i} value={checker}>
                {checker}
              </option>
            ))
          ) : (
            <option>Loading ...</option>
          )}
        </select>
      </FormInput>
    </ModalForm>
  );
}

export default function Page() {
  const [modalRepair, setModalRepair] = useState(false);
  const [modalStock, setModalStock] = useState(false);
  const { setGlobalFalse, loadFt, setLoadFt } = useContext(GlobalContext);

  useEffect(() => {
    setGlobalFalse();
    updateLocalstorage(
      "checkerRepair",
      () => useScriptRepair("getCheckerRepair"),
      () => setLoadFt("update checker"),
      () => setLoadFt(false)
    );
    updateLocalstorage(
      "checkerStock",
      () => useFetchBarboc("getCheckerStock"),
      () => setLoadFt("update checker"),
      () => setLoadFt(false)
    );
    updateLocalstorage(
      "damageType",
      () => useFetchBarboc("getDamageType"),
      () => setLoadFt("update damage type"),
      () => setLoadFt(false)
    );
    updateLocalstorage(
      "dBase1015",
      () => useFetchMatDbase("get1015"),
      () => setLoadFt("update dataset"),
      () => setLoadFt(false)
    );
    updateLocalstorage(
      "dBase1016",
      () => useFetchMatDbase("get1016"),
      () => setLoadFt("update dataset"),
      () => setLoadFt(false)
    );
  }, []);

  const closeModal = () => {
    setModalRepair(false);
    setModalStock(false);
  };

  return (
    <div className="main-container">
      <LoadFooter text={loadFt} />
      <BtnHome />
      {modalRepair && <ModalRepair closeModal={closeModal} />}
      {modalStock && <ModalStock closeModal={closeModal} />}
      <div className="text-left w-full py-4">
        <h2 className="text-xl font-bold mb-6">Repair Mekanik</h2>
        <BtnSubmenu
          icon={faSoap}
          title="Mesin Sewing"
          subtitle="Repair"
          onClick={() => {
            setModalRepair(true);
          }}
        />
        <BtnSubmenu
          icon={faSoap}
          title="Mesin Genset"
          subtitle="Repair"
          onClick={() => {
            setModalRepair(true);
          }}
        />
        <BtnSubmenu icon={faSoap} title="Kelistrikan" />
        <BtnSubmenu icon={faSoap} title="Validasi" />
      </div>
    </div>
  );
}
