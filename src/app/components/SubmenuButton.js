import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SubmenuButton({ icon, title, subtitle, onClick }) {
  return (
    <button className="group flex flex-row w-full gap-4 mb-4 lg:mb-6 bg-white hover:bg-blue rounded-xl p-4 items-center shadow-sm duration-200">
      <div className="flex w-[3em] h-[3em] rounded-lg bg-slate justify-center items-center">
        <FontAwesomeIcon icon={icon} className="text-blue text-xl" />
      </div>
      <div>
        <p className="text-left group-hover:text-white">{title}</p>
        {subtitle && (
          <p className="text-sm text-left text-blue/70 group-hover:text-white">
            {subtitle}
          </p>
        )}
      </div>
    </button>
  );
}
