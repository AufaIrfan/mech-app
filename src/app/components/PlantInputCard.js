"use client";

import { faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function PlantInputCard({ plant }) {
  const [onInput, setOnInput] = useState(false);
  return (
    <div className="">
      <button
        onClick={() => setOnInput(!onInput)}
        className={`flex flex-row w-full items-middle gap-2 p-4 text-white duration-200 ${
          onInput
            ? "rounded-t-2xl bg-blue/80"
            : "rounded-2xl bg-gray-400 hover:bg-blue"
        }`}
      >
        {!onInput && <FontAwesomeIcon icon={faPlusCircle} className="" />}
        <p className=""> {plant == "Retur" ? "Retur" : "Plant " + plant}</p>
      </button>
      {onInput && (
        <div className="flex flex-col gap-3 p-4 rounded-b-2xl border border-blue/60  duration-200">
          <div className="botton-action flex flex-row justify-center w-fit gap-2 mx-auto">
            <button className="w-full lg:w-fit mx-auto flex flex-row items-middle gap-2 p-3 px-5 rounded-xl border border-red-400 text-red-500 text-sm bg-white hover:bg-red-500 hover:text-white duration-200">
              <FontAwesomeIcon icon={faTrash} className="" />
              <p className="">Hapus</p>
            </button>
            <button className="w-full lg:w-fit mx-auto flex flex-row items-middle gap-2 p-3 px-5 rounded-xl border border-blue/60 text-blue text-sm bg-white hover:bg-blue hover:text-white duration-200">
              <FontAwesomeIcon icon={faPlusCircle} className="" />
              <p className="">Tambah</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
