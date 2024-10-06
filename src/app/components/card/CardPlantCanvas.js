"use client";

import {
  faMinus,
  faPlus,
  faPlusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { TableContent } from "../table/TableContent";
import ModalConfirm from "../modal/ModalConfirm";
import ModalForm from "../modal/ModalForm";
import FormInput from "../form/FormInput";
import Alert from "../alert/Alert";

export default function CardInputCanvas({ plant }) {
  const [onInput, setOnInput] = useState(false);
  const [deleteData, setDeleteData] = useState(false);
  const [modalInput, setModalInput] = useState(false);
  const [qty, setQty] = useState(0);
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
          }}
          noAction={() => {
            setDeleteData(false);
          }}
        />
      )}

      {modalInput && (
        <ModalForm
          title={plant == "Retur" ? "Input Retur" : "Input Plant " + plant}
          closeAct={() => setModalInput(false)}
        >
          <Alert
            text="Data tidak tersedia? Hubungi admin"
            style="mb-2"
            icon={false}
          />

          <FormInput label="MID">
            <input type="number" className="form-input" />
          </FormInput>
          <FormInput label="Description">
            <input type="text" className="form-input" />
          </FormInput>
          <FormInput label="Qty">
            <div className="grid grid-cols-4 gap-4">
              <button
                onClick={() => setQty(qty - 1)}
                className="font-bold btn-submit btn-submit-blue-outline"
                {...(qty == 0 && { disabled: true })}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>

              <input
                type="number"
                className="form-input text-center col-span-2"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              />
              <button
                onClick={() => setQty(qty + 1)}
                className="font-bold btn-submit btn-submit-blue-outline"
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </FormInput>
          <FormInput label="Note">
            <textarea rows={2} className="form-input" />
          </FormInput>
          <input type="radio" className="" />
        </ModalForm>
      )}

      <button
        onClick={() => setOnInput(true)}
        className={` flex flex-row w-full items-middle gap-2 p-3.5 text-white duration-200 ${
          onInput
            ? "rounded-t-2xl bg-blue/80"
            : "rounded-2xl bg-gray-400 hover:bg-blue"
        }`}
      >
        {!onInput && <FontAwesomeIcon icon={faPlusCircle} className="" />}
        <p className=""> {plant == "Retur" ? "Retur" : "Plant " + plant}</p>
      </button>
      {onInput && (
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
