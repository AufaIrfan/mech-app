import Link from "next/link";

export default function NotFound() {
  return (
    <div className="main-container justify-center gap-3">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p>Halaman ini belum tersedia</p>
      <Link
        href="/"
        className="text-white bg-blue hover:bg-blue-hover px-6 py-2 rounded-xl mt-4"
      >
        Back to home
      </Link>
    </div>
  );
}
