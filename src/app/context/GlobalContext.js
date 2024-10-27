"use client";
import React, { createContext, useEffect, useState } from "react";
import getLs from "../hooks/getLs";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [notif, setNotif] = useState({ show: false, type: "", text: "" });
  const [load, setLoad] = useState([false]); // [show, text]
  const [loadFt, setLoadFt] = useState(false);
  const [dataBBFg, setDataBBFg] = useState(getLs("dataBBFg") || {});
  const [dataBBRpk, setDataBBRpk] = useState(getLs("dataBBRpk") || {});
  const setGlobalFalse = () => {
    setLoad([false]);
  };
  useEffect(() => {
    if (notif.show) {
      setTimeout(() => {
        setNotif({ ...notif, show: false });
      }, 5000);
    }
  }, [notif]);
  return (
    <GlobalContext.Provider
      value={{
        setGlobalFalse,
        load,
        setLoad,
        dataBBFg,
        setDataBBFg,
        dataBBRpk,
        setDataBBRpk,
        loadFt,
        setLoadFt,
        notif,
        setNotif,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
