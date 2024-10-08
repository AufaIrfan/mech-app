import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading() {
  return (
    <div className="bg-slate-body w-full min-h-screen flex items-center justify-center z-20">
      <div className="flex flex-row items-center justify-center p-4 px-6 bg-white rounded-xl">
        <FontAwesomeIcon
          icon={faCircleNotch}
          className="text-blue text-3xl animate-spin mr-3"
        />
        <p>Loading</p>
        <p className="ml-1 animate-pulse">...</p>
      </div>
    </div>
  );
}
