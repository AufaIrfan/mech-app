import Image from "next/image";
import logo from "../../img/logo.png";
export default function CardHome() {
  return (
    <div className="header-content flex flex-row gap-1.5 lg:gap-2 items-center justify-center rounded-3xl bg-blue min-w-full mb-6 p-4 py-6 lg:p-10">
      <Image
        src={logo}
        alt="Next.js Logo"
        className="w-[55px] lg:w-[70px] pr-2"
        priority
      />
      <h2 className="text-white text-2xl lg:text-3xl font-bold">Mech App</h2>
      <p className="text-blue text-xs lg:text-sm rounded-md px-1 bg-white">
        1.0
      </p>
      <p className="text-blue text-xs lg:text-sm rounded-md px-1 bg-white hidden lg:block">
        Beta
      </p>
    </div>
  );
}
