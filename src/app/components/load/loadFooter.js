import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoadFooter({ text = "loading" }) {
  return (
    <div
      className={`${
        text == false ? "hidden" : "flex"
      } fixed bottom-0 left-0 mb-4 ml-4 bg-white gap-2 text-xs items-center rounded-xl py-2 px-4`}
    >
      <FontAwesomeIcon
        icon={faCircleNotch}
        className="animate-spin text-blue"
      />
      <p className="lowercase">{text}</p>
    </div>
  );
}
