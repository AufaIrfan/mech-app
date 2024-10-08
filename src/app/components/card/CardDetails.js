import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardDetails({ data }) {
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
              <td className="pt-1.5">Tanggal</td>
              <td className="pt-1.5 ps-4">
                {new Date(data.date).toLocaleDateString()}
              </td>
            </tr>
            <tr className="">
              <td className="pt-1.5">Pallet</td>
              <td className="pt-1.5 ps-4">{data.pallet}</td>
            </tr>
            <tr className="">
              <td className="pt-1.5 ">Checker</td>
              <td className="pt-1.5 ps-4">{data.checker}</td>
            </tr>
            <tr className="">
              <td className="pt-1.5 ">Mulai hitung</td>
              <td className="pt-1.5 ps-4">{data.time}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
