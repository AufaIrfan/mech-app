import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BtnSubmit from "../button/BtnSubmit";

export default function ModalConfirm({
  title,
  yeslabel,
  color,
  yesAction,
  noAction,
}) {
  return (
    <div
      className={`flex fixed flex-col items-middle bg-black/40 p-6 lg:p-12 top-0 left-0 w-full h-full z-10`}
    >
      <div className="bg-white max-w-[25rem] w-full p-6 flex flex-col gap-3 rounded-3xl text-center">
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className={`${
            color == "blue" ? "text-blue/60" : "text-red-400"
          } text-5xl mb-2`}
        />
        <p className="font-bold">{title}</p>
        <div className="flex flex-row gap-3 mt-3">
          <BtnSubmit
            style="w-full btn-submit-gray-outline"
            title="Tidak"
            spinAct={false}
            onClick={noAction}
          />
          <BtnSubmit
            style={`w-full btn-submit-${color}`}
            title={"Ya, " + yeslabel}
            onClick={yesAction}
          />
        </div>
      </div>
    </div>
  );
}
