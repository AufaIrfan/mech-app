"use client";
import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [loading, setLoading] = useState(false);
  return (
    <GlobalContext.Provider value={{ loading, setLoading }}>
      {children}
    </GlobalContext.Provider>
  );
}
