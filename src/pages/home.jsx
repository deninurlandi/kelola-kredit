import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="relative w-full p-6 py-16 flex flex-col items-center bg-cyan-300 rounded-b-[40px]">
        <h1 className="text-3xl font-bold">Hallo Brother</h1>
        <h2 className="text-xl font-medium">
          Mari kelola bisnis kreditmu disini
        </h2>
        <div className="w-full max-w-3xl px-10 absolute -bottom-5">
          <form action="">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border text-lg px-3 py-2 outline-sky-400 rounded-md border-slate-700"
            />
          </form>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex mt-14 gap-8 justify-center">
          <Link to="/addUser">
            <div className="w-24">
              <div className="rounded-full bg-slate-200 border shadow-md border-slate-500 w-24 h-24 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="60"
                  height="60"
                  className="fill-cyan-500 "
                >
                  <circle cx="9" cy="6" r="6" />
                  <path d="M13.043,14H4.957A4.963,4.963,0,0,0,0,18.957V24H18V18.957A4.963,4.963,0,0,0,13.043,14Z" />
                  <polygon points="21 10 21 7 19 7 19 10 16 10 16 12 19 12 19 15 21 15 21 12 24 12 24 10 21 10" />
                </svg>
              </div>
              <div className="mt-2 bg-cyan-500 rounded-md">
                <h2 className="py-1 text-slate-100 text-center font-medium text-lg leading-5">
                  Tambah Nasabah
                </h2>
              </div>
            </div>
          </Link>
          <Link to="/daftarNasabah">
            <div className="w-24">
              <div className="rounded-full bg-slate-200 border shadow-md border-slate-500 w-24 h-24 flex justify-center items-center">
                <svg
                  id="Layer_1"
                  height="60"
                  viewBox="0 0 24 24"
                  width="60"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  className="fill-cyan-500"
                >
                  <path d="m11 17.5a6.5 6.5 0 0 1 11-4.684v-9.816a3 3 0 0 0 -3-3h-12a5.006 5.006 0 0 0 -5 5v14a5.006 5.006 0 0 0 5 5h10.5a6.5 6.5 0 0 1 -6.5-6.5zm-4-10.5a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 -1-1zm16.707 16.707a1 1 0 0 1 -1.414 0l-2.407-2.407a4.457 4.457 0 0 1 -2.386.7 4.5 4.5 0 1 1 4.5-4.5 4.457 4.457 0 0 1 -.7 2.386l2.407 2.407a1 1 0 0 1 0 1.414z" />
                </svg>
              </div>
              <div className="mt-2 bg-cyan-500 rounded-md">
                <h2 className="py-1 text-slate-100 text-center font-medium text-lg leading-5">
                  Lihat Nasabah
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
