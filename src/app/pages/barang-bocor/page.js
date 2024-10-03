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
import { useRouter } from "next/router";

function ModalBarbocFg({ isOpen }) {
  return (
    <ModalForm
      title="Input Barang Bocor"
      to="/pages/barang-bocor/input/bb-fg"
      isOpen={isOpen}
    >
      <Alert text="Diisi oleh checker finish good" style="mb-2" />
      <FormInput label="Tanggal">
        <input
          type="date"
          // value={data.date}
          onChange={(e) => {}}
          className="form-input"
        />
      </FormInput>
      <FormInput label="Pallet">
        <input
          type="number"
          // value={data.pallet}
          onChange={(e) => {}}
          className="form-input"
        />
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
function ModalBarbocRpk({ isOpen }) {
  return (
    <ModalForm
      title="Input Barang Bocor"
      to="/pages/barang-bocor/input/bb-fg"
      isOpen={isOpen}
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
        <input
          type="number"
          // value={data.pallet}
          onChange={(e) => {}}
          className="form-input"
        />
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
  const { setLoading } = useContext(GlobalContext);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="main-container">
      <BtnHome />
      {modalFg && <ModalBarbocFg isOpen={setModalFg} />}
      {modalRpk && <ModalBarbocRpk isOpen={setModalRpk} />}
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
