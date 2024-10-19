"use client";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BtnSubmit from "../button/BtnSubmit";

export default function ModalForm({
  children,
  title,
  btnLabel = "Submit",
  closeAct,
  submitAct = () => {},
  optionalBtn = false,
  optionalBtnLabel,
  optionalBtnIcon,
  optionalBtnStyle,
  optionalBtnAct = () => {},
}) {
  return (
    <div
      className={`fixed flex items-middle z-10 top-0 left-0 w-full h-full bg-black/40 p-6`}
    >
      <div className="max-w-full md:max-w-[30rem] mx-auto p-6 rounded-3xl bg-white flex flex-col gap-2">
        <div className="mb-2 flex flex-row justify-between items-center">
          <p className="font-bold text-lg truncate pr-3">{title}</p>
          <button
            onClick={() => closeAct()}
            className="w-10 h-10 rounded-full flex items-middle hover:bg-gray-200 duration-200"
          >
            <FontAwesomeIcon icon={faTimes} className="text-lg" />
          </button>
        </div>
        {children}
        <div className="flex gap-3">
          {optionalBtn && (
            <BtnSubmit
              title={optionalBtnLabel}
              icon={optionalBtnIcon}
              style={optionalBtnStyle + " mt-2"}
              onClick={() => {
                submitAct();
              }}
            />
          )}
          <BtnSubmit
            title={btnLabel}
            style="btn-submit-blue mt-2 grow"
            onClick={() => {
              submitAct();
            }}
          />
        </div>
      </div>
    </div>
  );
}
