"use client";

import {
  faCircleNotch,
  faExclamationCircle,
  faNoteSticky,
  faPlusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext, useEffect } from "react";
import { TableContent } from "../table/TableContent";
import ModalConfirm from "../modal/ModalConfirm";
import ModalForm from "../modal/ModalForm";
import FormInput from "../form/FormInput";
import CheckboxInput from "../form/CheckboxInput";
import MidInput from "../form/MidInput";
import { GlobalContext } from "../../context/GlobalContext";
import CountInput from "../form/CountInput";
import getLocalstorage from "../../hooks/getLocalstorage";
import setLocalstorage from "../../hooks/setLocalstorage";
import { useFetchBarboc } from "../../Api/useFetch";

export default function CardInputCanvas({ plant, data }) {
  const { setGlobalFalse } = useContext(GlobalContext);
  const [dataset, setDataset] = useState(false);
  const [damageType, setDamageType] = useState(
    getLocalstorage("damageType") || false
  );
  const [onInput, setOnInput] = useState(false);
  const [onInputMid, setOnInputMid] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [addNote, setAddNote] = useState(false);
  const [deleteData, setDeleteData] = useState(false);
  const [modalInput, setModalInput] = useState(false);
  const [qty, setQty] = useState(0);

  async function cekLs() {
    if (!damageType) {
      const fetchDamage = await useFetchBarboc("getDamageType");
      setDamageType(fetchDamage);
      setLocalstorage("damageType", fetchDamage);
    }
  }

  useEffect(() => {
    setDataset(data);
    cekLs();
  }, []);

  return (
    <div>
      {deleteData && (
        <ModalConfirm
          title={`Hapus Data ${plant == "Retur" ? plant : "Plant " + plant}?`}
          yeslabel="Hapus"
          color="red"
          yesAction={() => {
            setOnInput(false);
            setDeleteData(false);
            setGlobalFalse();
          }}
          noAction={() => {
            setDeleteData(false);
            setGlobalFalse();
          }}
        />
      )}

      {modalInput && (
        <ModalForm
          title={plant == "Retur" ? "Input Retur" : "Input Plant " + plant}
          closeAct={() => {
            setModalInput(false);
            setOnInputMid(false);
            setQty(0);
          }}
        >
          <FormInput label="MID">
            <MidInput data={dataset} onchange={setOnInputMid} />
            <div className="flex gap-x-4 gap-y-3 pt-4 pb-2 lg:items-center items-start  lg:flex-row flex-col">
              <div className="flex gap-3 items-center">
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  className="text-red-500 text-lg"
                />
                <p className="text-sm text-red-500">
                  Data not found, apakah MID baru?
                </p>
              </div>
              <div className="flex items-center ">
                <CheckboxInput value="mid baru" />
                <p className="text-sm text-gray-500">Ya, MID baru</p>
              </div>
            </div>
          </FormInput>
          <FormInput label="Deskripsi">
            <input
              type="text"
              className="form-input"
              value={onInputMid}
              disabled
            />
          </FormInput>

          <FormInput label="Qty">
            <CountInput qty={qty} setQty={setQty} />
          </FormInput>
          <div className="flex gap-3 items-end">
            <FormInput label="Kerusakan" style="grow">
              <select className="form-input">
                {damageType ? (
                  damageType.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))
                ) : (
                  <option>Loading...</option>
                )}
              </select>
            </FormInput>

            <button
              className="group p-2 px-4 mb-2 border rounded-2xl flex gap-2 items-middle hover:border-blue  duration-200"
              onClick={() => setAddNote(!addNote)}
            >
              <FontAwesomeIcon
                icon={faNoteSticky}
                className={`text-xl group-hover:text-blue duration-200 ${
                  addNote ? "text-blue " : "text-gray-500"
                }`}
              />
              <p
                className={
                  addNote
                    ? "text-blue"
                    : "text-gray-500 group-hover:text-blue duration-200"
                }
              >
                Note
              </p>
            </button>
          </div>

          {addNote && (
            <FormInput label="Note">
              <textarea rows={3} className="form-input" />
            </FormInput>
          )}
        </ModalForm>
      )}

      <div
        onClick={() => dataset && setOnInput(true)}
        className={` flex flex-row w-full items-middle gap-2 p-3.5 text-white duration-200 ${
          onInput
            ? "rounded-t-2xl bg-blue/80"
            : "rounded-2xl bg-gray-400 hover:bg-blue"
        }`}
      >
        <div className={dataset ? "hidden" : ""}>
          <FontAwesomeIcon icon={faCircleNotch} className="animate-spin" />
        </div>

        <div className={!dataset || onInput ? "hidden" : ""}>
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
        <p className=""> {plant == "Retur" ? "Retur" : "Plant " + plant}</p>
      </div>

      {data && onInput && (
        <div className="flex flex-col gap-3 p-4 rounded-b-2xl bg-white border border-blue/60  duration-200">
          <TableContent />
          <div className="botton-action flex flex-row justify-center w-full gap-2 mx-auto">
            <button
              onClick={() => setDeleteData(true)}
              className="lg:w-fit mx-auto flex flex-row items-middle gap-2 p-3 px-5 rounded-xl border border-red-400 hover:bg-red-500 hover:text-white text-red-500 text-sm duration-200"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button
              onClick={() => {
                setModalInput(true);
              }}
              className="grow lg:w-fit mx-auto flex flex-row items-middle gap-2 p-3 px-5 rounded-xl border border-blue/60 hover:bg-blue hover:text-white text-blue text-sm bg-white  duration-200"
            >
              <FontAwesomeIcon icon={faPlusCircle} />
              <p className="">Tambah</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
