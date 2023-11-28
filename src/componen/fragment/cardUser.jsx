import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
export default function CardUser(props) {
  const { initial, nama, pinjaman, sisaAngsuran, jatem, id } = props;
  return (
    <>
      <div className="w-full max-w-2xl p-4 shadow-slate-300 rounded-3xl border border-slate-400 bg-gradient-to-bl from-cyan-300 to-pink-300 shadow-md ">
        <div className="">
          <div className="flex gap-4 items-center">
            <div className="w-24 h-24 bg-slate-400 rounded-full flex items-center justify-center text-6xl font-bold text-sky-600 border shadow-md capitalize">
              {initial}
            </div>
            <div>
              <h1 className="text-4xl text-sky-600 underline underline-offset-4 mb-1 capitalize">
                {nama}
              </h1>
              <table>
                <tbody>
                  <tr className="leading-4">
                    <td className="font-medium">Pinjaman</td>
                    <td className="pr-5 font-medium">:</td>
                    <td className="font-semibold">Rp. {pinjaman}</td>
                  </tr>
                  <tr>
                    <td className="pr-5 font-medium">Sisa Angsuran</td>
                    <td className="font-medium">:</td>
                    <td className="font-semibold">Rp. {sisaAngsuran}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-end items-center gap-5">
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="15"
                height="15"
                className="fill-red-600"
              >
                <path d="M23.64,18.1L14.24,2.28c-.47-.8-1.3-1.28-2.24-1.28s-1.77,.48-2.23,1.28L.36,18.1h0c-.47,.82-.47,1.79,0,2.6s1.31,1.3,2.24,1.3H21.41c.94,0,1.78-.49,2.24-1.3s.46-1.78-.01-2.6Zm-10.64-.1h-2v-2h2v2Zm0-4h-2v-6h2v6Z" />
              </svg>
              <div className="font-medium">Jatuh Tempo : {jatem} </div>
            </div>
            <Link to={'/detailUser/' + id}>
              <button className="px-6 py-[6px] text-white bg-gradient-to-tl to-sky-500 from-green-500 rounded-xl font-semibold text-xl shadow">
                Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
