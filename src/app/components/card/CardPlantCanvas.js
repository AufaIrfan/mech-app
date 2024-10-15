"use client";

import {
  faChevronCircleDown,
  faChevronDown,
  faCircleNotch,
  faEllipsis,
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

export default function CardInputCanvas({ plant, data }) {
  const { setGlobalFalse } = useContext(GlobalContext);
  const [dataset, setDataset] = useState(false);
  const [onInput, setOnInput] = useState(false);
  const [addNote, setAddNote] = useState(false);
  const [deleteData, setDeleteData] = useState(false);
  const [modalInput, setModalInput] = useState(false);
  const [qty, setQty] = useState(0);
  useEffect(() => setDataset(data), []);
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
            setQty(0);
          }}
        >
          <FormInput label="MID">
            <MidInput data={dataset} />
          </FormInput>
          <FormInput label="Deskripsi">
            <input
              type="text"
              className="form-input"
              value={"asdsad"}
              disabled
            />
          </FormInput>

          <FormInput label="Qty">
            <CountInput qty={qty} setQty={setQty} />
          </FormInput>
          <div className="flex gap-5 items-end">
            <FormInput label="Kerusakan" style="grow">
              <select className="form-input">
                <option value="asdsad">asdsasdasdsad</option>
              </select>
            </FormInput>

            <button
              className=" p-2 w-[3em] mb-2 rounded-2xl"
              onClick={() => setAddNote(!addNote)}
            >
              <FontAwesomeIcon
                icon={faNoteSticky}
                className={`text-2xl hover:text-blue duration-200 ${
                  addNote ? "text-blue " : "text-gray-500"
                }`}
              />
            </button>
          </div>

          {addNote && (
            <FormInput label="Note">
              <textarea rows={3} className="form-input" />
            </FormInput>
          )}
          {/* <CheckboxInput label="MID Baru" value="mid baru" /> */}
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
