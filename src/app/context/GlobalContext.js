"use client";
import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [openModalCnfrm, setOpenModalCnfrm] = useState(false);
  return (
    <GlobalContext.Provider
      value={{ loading, setLoading, openModalCnfrm, setOpenModalCnfrm }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
