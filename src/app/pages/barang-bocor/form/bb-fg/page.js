"use client";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../../../context/loadingContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SubmitButton from "../../../../components/SubmitButton";
import Alert from "../../../../components/Alert";
import FormInput from "../../../../components/FormInput";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { setLoading } = useContext(LoadingContext);
  const [data, setData] = useState({
    date: new Date().toISOString().split("T")[0],
    pallet: "",
    checker: "",
  });
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="main-container">
      <div className="py-4 mb-4 w-full flex flex-row items-center justify-between">
        <Link href="/pages/barang-bocor">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className="text-xl text-dark/70 hover:text-blue"
          />
        </Link>
        <h3 className="text-xl font-bold flex-grow text-center">
          Input Barang Bocor
        </h3>
      </div>
      <div className="w-full p-6 rounded-3xl bg-white flex flex-col gap-4">
        <Alert text="Diisi oleh checker finish good" />
        <FormInput label="Tanggal">
          <input
            type="date"
            value={data.date}
            onChange={(e) => setData({ ...data, date: e.target.value })}
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
        <FormInput label="Checker">
          <textarea
            rows={2}
            value={data.checker}
            onChange={(e) => setData({ ...data, checker: e.target.value })}
            className="form-input"
          />
        </FormInput>
        <SubmitButton
          title="Submit"
          onClick={() => router.push("/pages/barang-bocor/input/bb-fg")}
        />
      </div>
    </div>
  );
}
