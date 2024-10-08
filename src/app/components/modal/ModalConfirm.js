import {
  faExclamationCircle,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
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
        {color == "blue" ? (
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className={`text-blue text-5xl mb-2`}
          />
        ) : (
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className={`text-red-500 text-5xl mb-2`}
          />
        )}
        <p className="">{title}</p>
        <div className="flex flex-row gap-3 mt-3">
          <BtnSubmit
            style="w-full btn-submit-gray-outline"
            title="Tidak"
            spinAct={false}
            onClick={noAction}
          />
          <BtnSubmit
            style={`w-full ${
              color == "blue" ? "btn-submit-blue" : "btn-submit-red"
            }`}
            title={"Ya, " + yeslabel}
            onClick={yesAction}
          />
        </div>
      </div>
    </div>
  );
}
