"use client";

import { faSoap } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import BtnHome from "../../components/button/BtnHome";
import BtnSubmenu from "../../components/button/BtnSubmenu";
import Alert from "../../components/alert/Alert";
import FormInput from "../../components/form/FormInput";
import ModalForm from "../../components/modal/ModalForm";
import { useRouter } from "next/navigation";
import CountInput from "../../components/form/CountInput";
import capitalize from "../../hooks/capitalize";
import setLocalstorage from "../../hooks/setLocalstorage";
import { useFetchBarboc, useFetchMatDbase } from "../../Api/useFetch";
import getLocalstorage from "../../hooks/getLocalstorage";
import LoadFooter from "../../components/load/loadFooter";
import updateLocalstorage from "../../hooks/updateLocalstorage";

function ModalBarbocFg({ closeModal }) {
  const router = useRouter();
  const { setLoad, dataBBFg, setDataBBFg } = useContext(GlobalContext);
  const [readySubmit, setReadySubmit] = useState(true);
  const [pallet, setPallet] = useState(0);
  const [data, setData] = useState({
    date: new Date().toISOString().split("T")[0],
    pallet: "",
    checker: "",
    time: new Date().getHours() + ":" + new Date().getMinutes(),
  });

  useEffect(() => {
    setData({ ...data, pallet: pallet });
  }, [pallet]);

  return (
    <ModalForm
      title="Barang Bocor Finish Good"
      submitAct={() => {
        if (data.date && data.pallet && data.checker) {
          setLoad(true);
          setDataBBFg({ ...dataBBFg, data1: data });
          setLocalstorage("dataBBFg", { ...dataBBFg, data1: data });
          router.push("/pages/barang-bocor/input/bb-fg");
        } else {
          setReadySubmit(false);
        }
      }}
      closeAct={closeModal}
    >
      <Alert text="Diisi oleh checker finish good" style="mb-2" />
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
      <FormInput label="Pallet">
        <CountInput qty={pallet} setQty={setPallet} cek={readySubmit} />
      </FormInput>
      <FormInput label="Checker">
        <textarea
          rows={2}
          value={data.checker}
          onChange={(e) =>
            setData({ ...data, checker: capitalize(e.target.value) })
          }
          className={
            !readySubmit && !data.checker ? "form-input-false" : "form-input"
          }
        />
      </FormInput>
    </ModalForm>
  );
}
function ModalBarbocRpk({ closeModal }) {
  const router = useRouter();
  const { setLoad, dataBBRpk, setDataBBRpk } = useContext(GlobalContext);
  const [readySubmit, setReadySubmit] = useState(true);
  const [checkers, setCheckers] = useState(
    getLocalstorage("checkerRpk") || false
  );
  const [pallet, setPallet] = useState(0);
  const [data, setData] = useState({
    date: new Date().toISOString().split("T")[0],
    pallet: "",
    checker: "",
    time: new Date().getHours() + ":" + new Date().getMinutes(),
  });

  useEffect(() => {
    if (!checkers) {
      updateLocalstorage(
        "checkerRpk",
        () => useFetchBarboc("getCheckerRpk"),
        () => setCheckers(getLocalstorage("checkerRpk"))
      );
    }
  }, []);

  useEffect(() => {
    setData({ ...data, pallet: pallet });
  }, [pallet]);

  return (
    <ModalForm
      title="Barang Bocor Repack"
      submitAct={() => {
        if (data.date && data.pallet && data.checker) {
          setLoad(true);
          setDataBBRpk({ ...dataBBRpk, data1: data });
          setLocalstorage("dataBBRpk", { ...dataBBRpk, data1: data });
          router.push("/pages/barang-bocor/input/bb-rpk");
        } else {
          setReadySubmit(false);
        }
      }}
      closeAct={closeModal}
    >
      <Alert text="Diisi oleh checker Repack" style="mb-2" />
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
      <FormInput label="Pallet">
        <CountInput qty={pallet} setQty={setPallet} cek={readySubmit} />
      </FormInput>
      <FormInput label="Checker">
        <select
          className={
            !readySubmit && !data.checker ? "form-input-false" : "form-input"
          }
          onChange={(e) => setData({ ...data, checker: e.target.value })}
        >
          <option value="">Pilih Checker</option>
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
  const [modalFg, setModalFg] = useState(false);
  const [modalRpk, setModalRpk] = useState(false);
  const { setGlobalFalse, loadFt, setLoadFt } = useContext(GlobalContext);

  useEffect(() => {
    setGlobalFalse();
    updateLocalstorage(
      "checkerRpk",
      () => useFetchBarboc("getCheckerRpk"),
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
    setModalFg(false);
    setModalRpk(false);
  };

  return (
    <div className="main-container">
      <LoadFooter text={loadFt} />
      <BtnHome />
      {modalFg && <ModalBarbocFg closeModal={closeModal} />}
      {modalRpk && <ModalBarbocRpk closeModal={closeModal} />}
      <div className="text-left w-full py-4">
        <h2 className="text-xl font-bold mb-6">Barang Bocor</h2>
        <BtnSubmenu
          icon={faSoap}
          title="Input Barang Bocor"
          subtitle="Finish Good"
          onClick={() => {
            setModalFg(true);
          }}
        />
        <BtnSubmenu
          icon={faSoap}
          title="Input Barang Bocor"
          subtitle="Repack"
          onClick={() => {
            setModalRpk(true);
          }}
        />
        <BtnSubmenu icon={faSoap} title="Data Barang Bocor" />
        <BtnSubmenu icon={faSoap} title="Validasi" />
      </div>
    </div>
  );
}
