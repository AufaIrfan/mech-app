"use client";
import React, { createContext, useState, useEffect } from "react";
import getLocalstorage from "../hooks/getLocalstorage";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [load, setLoad] = useState(false);
  const [dataBBFg, setDataBBFg] = useState(getLocalstorage("dataBBFg") || {});
  const [dataBBRpk, setDataBBRpk] = useState(
    getLocalstorage("dataBBRpk") || {}
  );
  const setGlobalFalse = () => {
    setLoad(false);
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
