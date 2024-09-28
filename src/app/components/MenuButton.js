import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const MenuButton = ({ icon, title, to, onClick }) => {
  return (
    <Link
      href={to}
      onClick={onClick}
      className="group menu-item col-auto rounded-xl p-5 bg-white hover:bg-blue duration-200"
    >
      <FontAwesomeIcon
        icon={icon}
        className="mb-2 text-3xl text-blue group-hover:text-white"
      />
      <p className="group-hover:text-white">{title}</p>
    </Link>
  );
};

export default MenuButton;
