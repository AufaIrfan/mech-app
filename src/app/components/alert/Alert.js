import {
  faExclamationCircle,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Alert({ text, type, style, icon = true }) {
  return (
    <div
      className={`flex flex-row items-end justify-center rounded-2xl p-4 ${style} ${
        type === "red" ? "bg-red-200 text-red-500" : "bg-blue/20 text-blue"
      }`}
    >
      {icon && (
        <FontAwesomeIcon
          icon={type === "red" ? faTriangleExclamation : faExclamationCircle}
          className="mr-3 text-xl"
        />
      )}
      <p className="text-sm text-center">{text}</p>
    </div>
  );
}
