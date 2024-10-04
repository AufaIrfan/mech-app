"use client";

import { faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { TableContent } from "../table/TableContent";

export default function CardInputCanvas({ plant }) {
  const [onInput, setOnInput] = useState(false);
  return (
    <div className="">
      <button
        onClick={() => setOnInput(!onInput)}
        className={`flex flex-row w-full items-middle gap-2 p-3.5 text-white duration-200 ${
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
            <button className="lg:w-fit mx-auto flex flex-row items-middle gap-2 p-3 px-5 rounded-xl border border-red-400 hover:bg-red-500 hover:text-white text-red-500 text-sm duration-200">
              <FontAwesomeIcon icon={faTrash} className="" />
            </button>
            <button className="grow lg:w-fit mx-auto flex flex-row items-middle gap-2 p-3 px-5 rounded-xl border border-blue/60 hover:bg-blue hover:text-white text-blue text-sm bg-white  duration-200">
              <FontAwesomeIcon icon={faPlusCircle} className="" />
              <p className="">Tambah</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
