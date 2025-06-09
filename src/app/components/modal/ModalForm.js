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
//     <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto p-4">
//   <div className="bg-white rounded-xl shadow-lg w-full max-w-sm max-h-[90vh] overflow-y-auto">
//     {/* modal content here */}
//   </div>
// </div>

    <div
      className={`fixed flex items-middle z-10 top-0 left-0 w-full h-full bg-black/40 p-6`}
    >
      <div className="w-full max-w-full sm:max-w-[90%] md:max-w-[30rem] lg:max-w-[40rem] 
                max-h-[80vh] md:max-h-[70vh] lg:max-h-[40rem] 
                mx-auto p-4 sm:p-6 md:p-8 
                rounded-3xl bg-white 
                flex flex-col gap-4 overflow-y-auto">
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
                optionalBtnAct();
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
