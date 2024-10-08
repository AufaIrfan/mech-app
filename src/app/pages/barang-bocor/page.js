"use client";

import { faSoap } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import BtnHome from "../../components/button/BtnHome";
import BtnSubmenu from "../../components/button/BtnSubmenu";
import Alert from "../../components/alert/Alert";
import FormInput from "../../components/form/FormInput";
import BtnSubmit from "../../components/button/BtnSubmit";
import ModalForm from "../../components/modal/ModalForm";
import { useRouter } from "next/navigation";
import CountInput from "../../components/form/CountInput";

function ModalBarbocFg({ closeModal }) {
  const router = useRouter();
  const { setLoad, dataBBFg, setDataBBFg } = useContext(GlobalContext);
  const [pallet, setPallet] = useState(0);
  const [readySubmit, setReadySubmit] = useState(true);
  const [data, setData] = useState({
    date: new Date().toISOString().split("T")[0],
    pallet: pallet,
    checker: "",
    time: new Date().toLocaleTimeString(),
  });
  useEffect(() => setData({ ...data, pallet: pallet }), [pallet]);
  return (
    <ModalForm
      title="Barang Bocor Finish Good"
      submitAct={() => {
        if (data.date && data.pallet && data.checker) {
          setLoad(true);
          setDataBBFg({ ...dataBBFg, data1: data });
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
          onChange={(e) => setData({ ...data, checker: e.target.value })}
          className={
            !readySubmit && !data.checker ? "form-input-false" : "form-input"
          }
        />
      </FormInput>
    </ModalForm>
  );
}
function ModalBarbocRpk({ closeModal }) {
  const [pallet, setPallet] = useState(0);
  return (
    <ModalForm
      title="Barang Bocor Repack"
      to="/pages/barang-bocor/input/bb-fg"
      closeAct={closeModal}
    >
      <Alert text="Diisi oleh checker repack" style="mb-2" />
      <FormInput label="Tanggal">
        <input
          type="date"
          // value={data.date}
          onChange={(e) => {}}
          className="form-input"
        />
      </FormInput>
      <FormInput label="Pallet">
        <CountInput qty={pallet} setQty={setPallet} />
      </FormInput>
      <FormInput label="Checker">
        <textarea
          rows={2}
          // value={data.checker}
          onChange={(e) => {}}
          className="form-input"
        />
      </FormInput>
    </ModalForm>
  );
}

export default function Page() {
  const [modalFg, setModalFg] = useState(false);
  const [modalRpk, setModalRpk] = useState(false);
  const { setGlobalFalse } = useContext(GlobalContext);
  useEffect(() => setGlobalFalse(), []);
  const closeModal = () => {
    setModalFg(false);
    setModalRpk(false);
  };
  return (
    <div className="main-container">
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
