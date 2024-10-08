"use client";
import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [load, setLoad] = useState(false);
  const [dataBBFg, setDataBBFg] = useState({ data1: {}, data2: [] });
  const setGlobalFalse = () => {
    setLoad(false);
  };
  return (
    <GlobalContext.Provider
      value={{ setGlobalFalse, load, setLoad, dataBBFg, setDataBBFg }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
