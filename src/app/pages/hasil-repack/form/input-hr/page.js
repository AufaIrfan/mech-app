"use client";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../../../context/loadingContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SubmitButton from "../../../../components/SubmitButton";
import Alert from "../../../../components/Alert";
import FormInput from "../../../../components/FormInput";

export default function Page() {
  const { setLoading } = useContext(LoadingContext);
  const [data, setData] = useState({
    plant: "1015",
    hrdate: "",
    delvdate: "",
    pallet: "",
    group: "",
    checker: "",
  });
  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="main-container">
      <div className="py-4 mb-4 w-full flex flex-row items-center justify-between">
        <Link href="/pages/hasil-repack">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className="text-xl text-dark/70 hover:text-blue"
          />
        </Link>
        <h3 className="text-xl font-bold flex-grow text-center">
          Input Hasil Repack
        </h3>
      </div>
      <div className="w-full p-6 rounded-3xl bg-white flex flex-col gap-4">
        <FormInput label="Plant">
          <select
            className="form-input"
            onChange={(e) => setData({ ...data, plant: e.target.value })}
          >
            <option value="1015">1015</option>
            <option value="1016">1016</option>
          </select>
        </FormInput>
        <FormInput label="Tanggal Hasil Repack">
          <input
            type="date"
            value={data.hrdate}
            onChange={(e) => setData({ ...data, hrdate: e.target.value })}
            className="form-input"
          />
        </FormInput>
        <FormInput label="Tanggal Kirim">
          <input
            type="date"
            value={data.delvdate}
            onChange={(e) => setData({ ...data, delvdate: e.target.value })}
            className="form-input"
          />
        </FormInput>
        <FormInput label="Pallet">
          <input
            type="number"
            value={data.pallet}
            onChange={(e) => setData({ ...data, pallet: e.target.value })}
            className="form-input"
          />
        </FormInput>
        <FormInput label="Group">
          <select
            className="form-input appearance-none"
            onChange={(e) => setData({ ...data, group: e.target.value })}
          >
            <option value="">Group</option>
            <option value="N">N</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </FormInput>
        <FormInput label="Checker">
          <select
            className="form-input appearance-none"
            onChange={(e) => setData({ ...data, checker: e.target.value })}
          >
            <option value="">Checker</option>
            <option value="Supriyatna">Supriyatna</option>
            <option value="Adit">Adit</option>
            <option value="Ansori">Ansori</option>
            <option value="Hasan">Hasan</option>
            <option value="Zaen">Zaen</option>
            <option value="Zidan">Zidan</option>
          </select>
        </FormInput>

        <SubmitButton title="Submit" />
      </div>
    </div>
  );
}
