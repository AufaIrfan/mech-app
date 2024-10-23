"use client";

import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import ModalForm from "../modal/ModalForm";
import FormInput from "../form/FormInput";
import getLs from "../../hooks/getLs";
import CountInput from "../form/CountInput";
import { faNoteSticky, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TableContent({ dataContent, setDataContent }) {
  const [openEdit, setOpenEdit] = useState(false);
  const [addNote, setAddNote] = useState(false);
  const [editData, setEditData] = useState(false);
  const [editDataQty, setEditDataQty] = useState(0);
  const damageType = getLs("damageType");

  return (
    <>
      {openEdit && (
        <ModalForm
          title={"Edit Data " + editData[1]}
          btnLabel="Edit data"
          open={openEdit}
          closeAct={() => {
            setOpenEdit(false);
            setEditData(false);
            setAddNote(false);
          }}
          optionalBtn={true}
          optionalBtnIcon={faTrash}
          optionalBtnStyle="btn-submit-red-outline px-5"
          optionalBtnAct={() => {
            setDataContent(
              dataContent.filter((item, index) => index !== editData[0] && item)
            );
            setOpenEdit(false);
          }}
          submitAct={() => [
            setOpenEdit(false),
            setDataContent(
              dataContent.filter((item, index) =>
                index == editData[0]
                  ? [
                      (item[0] = editData[1]),
                      (item[1] = editData[2]),
                      (item[2] = editData[3]),
                      (item[3] = editDataQty),
                      (item[4] = editData[5]),
                      (item[5] = editData[6]),
                      (item[6] = editData[7]),
                    ]
                  : item
              )
            ),
          ]}
        >
          <FormInput label="MID">
            <input
              type="number"
              className="form-input"
              value={editData[2]}
              disabled
            />
          </FormInput>
          <FormInput label="Deskripsi">
            <input
              type="text"
              className="form-input"
              value={editData[3]}
              onChange={(e) => {
                editData[3] = e.target.value;
                setEditData({ ...editData });
              }}
              {...(!editData[7] && { disabled: true })}
            />
          </FormInput>
          <FormInput label="Qty">
            <CountInput qty={editDataQty} setQty={setEditDataQty} />
          </FormInput>
          <div className="flex gap-3 items-end">
            <FormInput label="Kerusakan" style="grow">
              <select
                className="form-input"
                onChange={(e) => {
                  editData[5] = e.target.value;
                  setEditData({ ...editData });
                }}
                value={editData[5]}
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
              onClick={() => setAddNote(!addNote)}
              className="group p-2 px-4 mb-2 border rounded-2xl flex gap-2 items-middle hover:border-blue  duration-200"
            >
              <FontAwesomeIcon
                icon={faNoteSticky}
                className={`text-xl group-hover:text-blue duration-200 ${
                  editData[6] != "" || addNote ? "text-blue " : "text-gray-500"
                }`}
              />
              <p
                className={
                  editData[6] != "" || addNote
                    ? "text-blue"
                    : "text-gray-500 group-hover:text-blue duration-200"
                }
              >
                Note
              </p>
            </button>
          </div>

          {(addNote || editData[6] != "") && (
            <FormInput label="Note">
              <textarea
                rows={3}
                className="form-input"
                value={editData[6]}
                onChange={(e) => {
                  editData[6] = e.target.value;
                  setEditData({ ...editData });
                }}
              />
            </FormInput>
          )}
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
            {dataContent.map((item, index) => (
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
                    className="font-medium text-blue hover:underline "
                    onClick={() => [
                      setOpenEdit(true),
                      setEditData([index, ...item]),
                      setEditDataQty(item[3]),
                      item[5] != "" ? setAddNote(true) : setAddNote(false),
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
