"use client";
import React, { createContext, useEffect, useState } from "react";
import getLs from "../hooks/getLs";
import { createRepairs } from "../components/action/serverAction";

export const MechContext = createContext();

export function MechProvider({ children }) {
  const [notif, setNotif] = useState({ show: false, type: "", text: "" });
  const [load, setLoad] = useState([false]); // [show, text]
  const [loadFt, setLoadFt] = useState(false);
  const [dataRepair, setDataRepair] = useState(getLs("dataRepair") || {});
  const [dataStock, setDataStock] = useState(getLs("dataStock") || {});
  const setMechFalse = () => {
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
    <MechContext.Provider
      value={{
        setMechFalse,
        load,
        setLoad,
        dataRepair,
        setDataRepair,
        dataStock,
        setDataStock,
        loadFt,
        setLoadFt,
        notif,
        setNotif,
        createRepairs
      }}
    >
      {children}
    </MechContext.Provider>
  );
}
