/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from 'react';
import { DataUser } from '../context/dataUser';

export default function AddUser() {
  const { data, setData } = useContext(DataUser);

  const [nama, setNama] = useState('');
  const [pinjaman, setPinjaman] = useState('');
  const [bunga, setBunga] = useState(10);
  const [tanggal, setTanggal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((nama, pinjaman, bunga, tanggal)) {
      const d2 = new Date(tanggal);
      const y = d2.getFullYear();
      const m = d2.getMonth() + 2;
      const d = d2.getDate();

      setData([
        ...data,
        {
          nama,
          id: data.length + 1,
          pinjaman,
          tanggal,
          bunga,
          status: false,
          detail: [
            {
              tanggalTempo: y + '-' + m + '-' + d,
              bunga,
              bayar: '',
              jmlBunga: (pinjaman * bunga) / 100,
              jmlPinjaman: pinjaman + (pinjaman * bunga) / 100,
            },
          ],
        },
      ]);
      localStorage.setItem('data', JSON.stringify(data));
    }
    setNama('');
    setPinjaman('');
    setBunga('');
    setTanggal('');
  };

  useEffect(() => {
    console.log(data);
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);
  return (
    <>
      <div className="w-full flex justify-center py-7">
        <div className=" w-full bg-gradient-to-tl p-5 rounded-lg from-slate-500 to-slate-200 max-w-md flex-col flex  items-center">
          <h2 className=" text-cyan-600 text-2xl font-bold text-center leading-6 mb-4">
            Masukan Data Nasabah <br></br> Dalam Form Berikut
          </h2>

          <form
            action=""
            className="w-full max-w-sm flex flex-col"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col ">
              <label htmlFor="nama" className="font-medium text-lg">
                Nama :
              </label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="border px-3 py-1 outline-cyan-400 rounded-md border-slate-700"
                id="nama"
                name="nama"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label className="font-medium text-lg" htmlFor="pinjaman">
                jumlah pinjaman :
              </label>
              <input
                value={pinjaman}
                onChange={(e) => setPinjaman(parseInt(e.target.value))}
                className="border px-3 py-1 outline-cyan-400 rounded-md border-slate-700"
                type="number"
                id="pinjaman"
                name="pinjaman"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label className="font-medium text-lg" htmlFor="tanggal">
                Tanggal :
              </label>
              <input
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className="border px-3 py-1 outline-cyan-400 rounded-md border-slate-700"
                type="date"
                id="tanggal"
                name="tanggal"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label className="font-medium text-lg" htmlFor="bunga">
                bunga :
              </label>
              <select
                name="bunga"
                value={bunga}
                onChange={(e) => setBunga(e.target.value)}
                id="bunga"
                className="border px-3 py-2 outline-cyan-400 rounded-md border-slate-700"
              >
                <option value="10">10 %</option>
                <option value="15">15 %</option>
                <option value="20">20 %</option>
                <option value="25">25 %</option>
              </select>
            </div>
            <button className="shadow-sm shadow-slate-800 font-semibold bg-gradient-to-tl from-lime-300 to-cyan-500  text-white px-3 py-2 mt-7 rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
