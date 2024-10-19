"use client";

import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import ModalForm from "../modal/ModalForm";
import FormInput from "../form/FormInput";
import getLocalstorage from "../../hooks/getLocalstorage";
import CountInput from "../form/CountInput";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export function TableContent({ data, setData }) {
  const [openEdit, setOpenEdit] = useState(false);
  const [editData, setEditData] = useState({});
  const [damageType, setDamageType] = useState(getLocalstorage("damageType"));
  useEffect(() => {
    console.log(editData);
  }, [editData]);
  return (
    <>
      {openEdit && (
        <ModalForm
          title={"Edit Data " + editData.data[0]}
          btnLabel="Edit data"
          open={openEdit}
          closeAct={() => {
            setOpenEdit(false);
            setEditData({});
          }}
          optionalBtn={true}
          optionalBtnIcon={faTrash}
          optionalBtnStyle="btn-submit-red-outline px-5"
          submitAct={() => setOpenEdit(false)}
        >
          <FormInput label="MID">
            <input
              type="number"
              className="form-input"
              value={editData.data[1]}
              disabled
            />
          </FormInput>
          <FormInput label="Deskripsi">
            <input
              type="text"
              className="form-input"
              value={editData.data[2]}
              onChange={(e) => {
                editData.data[2] = e.target.value;
                setEditData({ ...editData });
              }}
              {...(!editData.data[6] && { disabled: true })}
            />
          </FormInput>
          <FormInput label="Qty">
            <CountInput qty={editData.data[3]} setQty={() => {}} />
          </FormInput>
          <div className="flex gap-3 items-end">
            <FormInput label="Kerusakan" style="grow">
              <select
                className="form-input"
                onChange={(e) => {
                  editData.data[4] = e.target.value;
                  setEditData({ ...editData });
                }}
              >
                {damageType ? (
                  damageType.map((item, index) => (
                    <option
                      key={index}
                      value={item}
                      selected={editData.data[4] == item}
                    >
                      {item}
                    </option>
                  ))
                ) : (
                  <option>Loading...</option>
                )}
              </select>
            </FormInput>

            {/* <button
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
            </button> */}
          </div>
          {/* <FormInput label="Deskripsi">
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
          )} */}
        </ModalForm>
      )}
      <div className="overflow-x-auto">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>MID</Table.HeadCell>
            <Table.HeadCell>Desc</Table.HeadCell>
            <Table.HeadCell>Qty</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.map((item, index) => (
              <Table.Row
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="pr-0 font-medium text-gray-900 dark:text-white">
                  {item[1]}
                </Table.Cell>
                <Table.Cell className="truncate overflow-hidden max-w-[25vw] pr-0">
                  {item[2]}
                </Table.Cell>
                <Table.Cell className="pr-0">{item[3]}</Table.Cell>
                <Table.Cell className="pl-0">
                  <a
                    href="#"
                    className="font-medium text-blue hover:underline "
                    onClick={() => [
                      setOpenEdit(true),
                      setEditData({ index, data: item }),
                    ]}
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
