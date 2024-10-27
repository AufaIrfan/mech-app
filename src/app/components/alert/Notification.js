"use client";

import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faExclamationTriangle,
  faThumbsUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function Notification() {
  const { notif, setNotif } = useContext(GlobalContext);

  return (
    <div
      className={`${
        notif.show ? "right-1/2 lg:right-10" : "-right-80 lg:-right-80 "
      } fixed translate-x-1/2 lg:translate-x-0 top-10 bottom-auto lg:top-auto lg:bottom-10  transition-all ease-in-out delay-150 duration-1000`}
    >
      <div className="w-[18rem] pt-4 pb-6 px-6 bg-white/95 shadow-lg shadow-black-100 rounded-2xl">
        <div className="flex gap-3 w-full mb-2">
          <div className="flex gap-3 items-center grow">
            {notif.type == "success" && (
              <>
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="text-blue text-md"
                />
                <p className="text-sm font-light text-blue">Success</p>
              </>
            )}
            {notif.type == "alert" && (
              <>
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="text-red-500 text-md"
                />
                <p className="text-sm font-light text-red-500">Alert</p>
              </>
            )}
          </div>
          <button
            className="text-gray-400 hover:text-gray-500 duration-200"
            onClick={() => {
              setNotif({ ...notif, show: false });
            }}
          >
            <FontAwesomeIcon icon={faTimes} className="text-md" />
          </button>
        </div>
        <p className="text-center text-md font-light text-gray-500">
          {notif.text}
        </p>
      </div>
    </div>
  );
}
