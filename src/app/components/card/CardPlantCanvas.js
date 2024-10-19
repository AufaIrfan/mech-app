"use client";

import {
  faCircleCheck,
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

export default function CardInputCanvas({
  plant,
  data,
  storedData,
  setStoredData,
}) {
  const { setGlobalFalse } = useContext(GlobalContext);
  const [dataset, setDataset] = useState(false);
  const [damageType, setDamageType] = useState(
    getLocalstorage("damageType") || false
  );
  const [onInput, setOnInput] = useState(false);
  const [readySubmit, setReadySubmit] = useState(true);
  const [addNote, setAddNote] = useState(false);
  const [deleteData, setDeleteData] = useState(false);
  const [modalInput, setModalInput] = useState(false);
  const [alertMaintain, setAlertMaintain] = useState(false);
  const [mid, setMid] = useState(false);
  const [desc, setDesc] = useState(false);
  const [qty, setQty] = useState(0);
  const [damage, setDamage] = useState(false);
  const [note, setNote] = useState("");
  const [needMaintain, setNeedMaintain] = useState(false);
  const [maintainDesc, setMaintainDesc] = useState(false);
  const [storeData, setStoreData] = useState([]);

  async function cekLs() {
    if (!damageType) {
      const fetchDamage = await useFetchBarboc("getDamageType");
      setDamageType(fetchDamage);
      setLocalstorage("damageType", fetchDamage);
    }
  }

  function cekMid(e) {
    let mid = data.find((item) => item[1] == e);
    if (mid) {
      setDesc(mid[2]);
      setNeedMaintain(false);
      setMaintainDesc(false);
    } else {
      setDesc(false);
      setNeedMaintain(true);
    }
  }

  function closeModal() {
    setModalInput(false);
    setAlertMaintain(false);
    setReadySubmit(true);
    setMid(false);
    setDesc(false);
    setQty(0);
    setDamage(damageType[0]);
    setNote("");
    setNeedMaintain(false);
    setMaintainDesc(false);
    setAddNote(false);
  }

  useEffect(() => {
    setDataset(data);
    setDamage(damageType[0]);
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
            setStoredData([]);
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
            closeModal();
          }}
          submitAct={() => {
            if (mid && desc && qty && damage) {
              if (!needMaintain && !maintainDesc) {
                setStoredData([
                  ...storedData,
                  [plant, mid, desc, qty, damage, note, maintainDesc],
                ]);
                closeModal();
              } else if (needMaintain && maintainDesc) {
                setStoredData([
                  ...storedData,
                  [plant, mid, desc, qty, damage, note, maintainDesc],
                ]);
                closeModal();
                console.log("need maintain");
              } else {
                setAlertMaintain(true);
                setReadySubmit(false);
                console.log("mid baru has ben checked");
              }
            } else {
              setReadySubmit(false);
            }
          }}
        >
          <FormInput label="MID">
            <div className="flex gap-3 items-center relative">
              <MidInput
                data={dataset}
                onchange={setMid}
                cekmid={cekMid}
                readysubmit={readySubmit}
              />
              {!needMaintain ? (
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-green-500 text-xl px-2 py-2 lg:px-4 absolute right-2 bg-white rounded-2xl"
                />
              ) : (
                <button
                  className="absolute right-2 px-2 pb-0 pt-1 lg:px-4 bg-white rounded-2xl"
                  onClick={() => setAlertMaintain(!alertMaintain)}
                >
                  <FontAwesomeIcon
                    icon={faExclamationCircle}
                    className="text-red-500 text-xl"
                  />
                </button>
              )}
            </div>
            {needMaintain && alertMaintain && (
              <div className="flex gap-x-4 gap-y-3 pt-4 pb-2 lg:items-center items-start  lg:flex-row flex-col">
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon
                    icon={faExclamationCircle}
                    className="text-red-500 text-lg"
                  />
                  <p className="text-sm text-red-400">
                    Not found, apakah MID baru?
                  </p>
                </div>
                <div className="flex items-center ">
                  <CheckboxInput
                    value="mid baru"
                    onChange={(e) =>
                      e.target.checked
                        ? setMaintainDesc(e.target.value)
                        : setMaintainDesc(false)
                    }
                  />
                  <p className="text-sm text-gray-500">Ya, MID baru</p>
                </div>
              </div>
            )}
          </FormInput>
          <FormInput label="Deskripsi">
            <input
              type="text"
              className={`${
                !desc && !readySubmit ? "form-input-false" : "form-input"
              }`}
              value={desc || ""}
              onChange={(e) => setDesc(e.target.value)}
              {...(desc && !needMaintain && { disabled: true })}
            />
          </FormInput>

          <FormInput label="Qty">
            <CountInput qty={qty} setQty={setQty} cek={readySubmit} />
          </FormInput>
          <div className="flex gap-3 items-end">
            <FormInput label="Kerusakan" style="grow">
              <select
                className="form-input"
                onChange={(e) => setDamage(e.target.value)}
              >
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
              <textarea
                rows={3}
                className="form-input"
                onChange={(e) => setNote(e.target.value)}
              />
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
          <TableContent data={storedData} setData={setStoredData} />
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
