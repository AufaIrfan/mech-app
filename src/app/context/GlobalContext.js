"use client";
import React, { createContext, useState, useEffect } from "react";
import getLs from "../hooks/getLs";
import { text } from "@fortawesome/fontawesome-svg-core";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [load, setLoad] = useState([false]);
  const [loadFt, setLoadFt] = useState(false);
  const [dataBBFg, setDataBBFg] = useState(getLs("dataBBFg") || {});
  const [dataBBRpk, setDataBBRpk] = useState(getLs("dataBBRpk") || {});
  const setGlobalFalse = () => {
    setLoad([false]);
  };
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
