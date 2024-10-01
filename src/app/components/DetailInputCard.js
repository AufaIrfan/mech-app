import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DetailInputCard() {
  return (
    <div className="w-full p-6 rounded-3xl bg-blue/20 text-blue text-sm">
      <div className="flex flex-row gap-2 items-center mb-2">
        <FontAwesomeIcon icon={faInfoCircle} className="" />
        <p className=" font-bold">Details</p>
      </div>

      <div className="relative overflow-x-auto">
        <table className="text-left rtl:text-righ text-blue">
          <tbody>
            <tr className="">
              <td className="pt-2">Tanggal</td>
              <td className="pt-2 ps-4">27/09/2024</td>
            </tr>
            <tr className="">
              <td className="pt-2">Pallet</td>
              <td className="pt-2 ps-4">2</td>
            </tr>
            <tr className="">
              <td className="pt-2 ">Checker</td>
              <td className="pt-2 ps-4">Hasan</td>
            </tr>
            <tr className="">
              <td className="pt-2 ">Mulai hitung</td>
              <td className="pt-2 ps-4">12.30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
