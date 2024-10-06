"use client";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import BtnSubmit from "../button/BtnSubmit";

export default function ModalForm({ children, title, to, closeAct }) {
  const router = useRouter();
  return (
    <div
      className={`fixed z-10 pt-[10vh] top-0 left-0 w-full h-full bg-black/40 p-6`}
    >
      <div className="w-full lg:max-w-[30vw] mx-auto p-6 rounded-3xl bg-white flex flex-col gap-2">
        <div className="mb-2 flex flex-row justify-between items-center">
          <p className="font-bold text-lg">{title}</p>
          <button
            onClick={() => closeAct()}
            className="w-10 h-10 rounded-full flex items-middle hover:bg-gray-200 duration-200"
          >
            <FontAwesomeIcon icon={faTimes} className="text-lg" />
          </button>
        </div>
        {children}
        <BtnSubmit
          title="Submit"
          style="btn-submit-blue mt-2"
          onClick={() => {
            router.push(to);
          }}
        />
      </div>
    </div>
  );
}
