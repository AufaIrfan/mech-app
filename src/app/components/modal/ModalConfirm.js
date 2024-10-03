import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import BtnSubmit from "../button/BtnSubmit";

export default function ModalConfirm({ color, title, yesLabel, yesAction }) {
  const { openConfirmModal, setOpenConfirmModal } = useContext(GlobalContext);
  return (
    <div
      className={`${
        openConfirmModal ? "flex" : "hidden"
      } fixed flex-col items-middle bg-black/60 p-6 lg:p-12 top-0 left-0 w-full h-full z-10`}
    >
      <div className="bg-white max-w-[25rem] w-full p-6 flex flex-col gap-3 rounded-3xl text-center">
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className={`${
            color == "blue" ? "text-blue/60" : "text-red-400"
          } text-4xl`}
        />
        <p className="font-bold">{title}</p>
        <div className="flex flex-row gap-3 mt-3">
          <BtnSubmit
            title="Tidak"
            type="gray-outline"
            // onClick={setOpenConfirmModal(false)}
          />
          <BtnSubmit title={`Ya, ${yesLabel}`} type={color} />
        </div>
      </div>
    </div>
  );
}
