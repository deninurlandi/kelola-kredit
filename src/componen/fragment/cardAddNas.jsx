/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import { DataUser } from '../../context/dataUser';
import { Link } from 'react-router-dom';

export default function CardAddNas() {
  const { data, setData } = useContext(DataUser);
  const [isOpen, setIsOpen] = useState(false);

  const [nama, setNama] = useState('');
  const [pinjaman, setPinjaman] = useState('');
  const [bunga, setBunga] = useState(10);
  const [tanggal, setTanggal] = useState('');
  const [atention, setAtention] = useState(false);
  const [jaminan, setJaminan] = useState('ktp');
  const [noJaminan, setNoJaminan] = useState('');
  const [idNas, setIdNas] = useState(0);
  function handleIdNas(id) {
    setIsOpen(!isOpen);
    setIdNas(id);
  }

  function handleDelete(id) {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    setIsOpen(!isOpen);
    localStorage.setItem('data', JSON.stringify(newData));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nama && pinjaman && bunga && tanggal) {
      const d2 = new Date(tanggal);
      const y = d2.getFullYear();
      const m = d2.getMonth() + 2;
      const d = d2.getDate();

      setData([
        ...data,
        {
          nama,
          id: new Date().getTime(),
          pinjaman,
          tanggal,
          jaminan,
          noJaminan,
          kondisi: 'new',
          bunga,
          status: false,
          detail: [
            {
              tanggalTempo:
                m > 12 ? y + 1 + '-' + 1 + '-' + d : y + '-' + m + '-' + d,
              bunga,
              bayar: '',
              pokok: pinjaman,
              jmlBunga: (pinjaman * bunga) / 100,
              jmlPinjaman: pinjaman + (pinjaman * bunga) / 100,
            },
          ],
        },
      ]);
      localStorage.setItem('data', JSON.stringify(data));
      setAtention(true);
      setTimeout(() => {
        setAtention(false);
      }, 1500);
    }
    setNama('');
    setPinjaman('');
    setBunga('');
    setTanggal('');
    setJaminan('ktp');
    setNoJaminan('');
  };
  const list = data.filter((item) => item.kondisi === 'new');

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return (
    <>
      <div className="w-full p-4 bg-[#211545] font-[Electrolize] text-white">
        <h2 className="text-xl">Form Add Nasabah</h2>
        <div className="w-full flex gap-4 flex-wrap sm:flex-nowrap">
          <div className="bg-slate-600 w-full sm:max-w-sm p-4 rounded-md">
            <form action="" className=" w-full" onSubmit={handleSubmit}>
              <div className="flex flex-col mb-4">
                <label htmlFor="nama">Nama :</label>
                <input
                  type="text"
                  id="nama"
                  required
                  value={nama}
                  minLength={3}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Masukan nama"
                  className="w-full max-w-sm p-1 outline-none bg-transparent border-b"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="date">Tanggal :</label>
                <input
                  type="date"
                  value={tanggal}
                  required
                  onChange={(e) => setTanggal(e.target.value)}
                  id="date"
                  className="w-full max-w-sm p-1 outline-none bg-transparent border-b"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="pinjaman">Pinjaman :</label>
                <input
                  type="number"
                  value={pinjaman}
                  min={200000}
                  required
                  onChange={(e) => setPinjaman(parseInt(e.target.value))}
                  id="pinjaman"
                  placeholder="Masukan jumlah pinjaman"
                  className="w-full max-w-sm p-1 outline-none bg-transparent border-b"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="bunga">Bunga :</label>
                <select
                  name="bunga"
                  value={bunga}
                  onChange={(e) => setBunga(e.target.value)}
                  id="bunga"
                  className="bg-transparent outline-none border-b p-1"
                >
                  <option value="10" className="bg-transparent">
                    10%
                  </option>
                  <option value="15" className="bg-transparent">
                    15%
                  </option>
                  <option value="20" className="bg-transparent">
                    20%
                  </option>
                  <option value="25" className="bg-transparent">
                    25%
                  </option>
                </select>
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="jaminan">Jaminan :</label>
                <select
                  name="jaminan"
                  required
                  value={jaminan}
                  onChange={(e) => setJaminan(e.target.value)}
                  className="bg-transparent outline-none border-b p-1"
                  id="jaminan"
                >
                  <option value="ktp">KTP</option>
                  <option value="sim">SIM</option>
                  <option value="kk">KK</option>
                </select>
              </div>
              <div className="flex flex-col mb-1">
                <label htmlFor="nojaminan">No Jaminan :</label>
                <input
                  type="number"
                  value={noJaminan}
                  required
                  onChange={(e) => setNoJaminan(parseInt(e.target.value))}
                  className="w-full max-w-sm p-1 outline-none bg-transparent border-b"
                  placeholder="Masukan no jaminan"
                />
              </div>
              <div
                className={`w-full flex justify-center transition-all duration-700 ${
                  atention ? `opacity-100` : `opacity-0`
                }`}
              >
                <div className="w-max bg-green-400 shadow-md shadow-slate-500 mb-1 px-2 text-white rounded-xl">
                  Tambah Nasabah Sukses{' '}
                </div>
              </div>
              <button className="px-4 py-2 w-full bg-cyan-400 text-lg rounded-lg shadow-sm shadow-slate-200 border border-slate-500">
                Tambah
              </button>
            </form>
          </div>
          <div className="w-full p-4 bg-slate-600 rounded-md overflow-x-auto">
            <div className="flex justify-between">
              <h2 className="text-lg">Daftar Nasabah Baru</h2>
              <div className="flex gap-2 items-center w-max bg-slate-700 px-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  className="fill-white"
                >
                  <path d="M11.293,17.707l-3.293,3.293V1c0-.553-.447-1-1-1s-1,.447-1,1V21l-3.293-3.293c-.391-.391-1.023-.391-1.414,0s-.391,1.023,0,1.414l4.293,4.293c.39,.39,.902,.585,1.414,.585s1.024-.195,1.414-.585l4.293-4.293c.391-.391,.391-1.023,0-1.414s-1.023-.391-1.414,0ZM22.707,6.293c.391-.391,.391-1.023,0-1.414L18.414,.586C18.024,.196,17.512,0,17,0s-1.024,.195-1.414,.585l-4.293,4.293c-.391,.391-.391,1.023,0,1.414s1.023,.391,1.414,0l3.293-3.293V23c0,.553,.447,1,1,1s1-.447,1-1V3l3.293,3.293c.391,.391,1.023,.391,1.414,0Z" />
                </svg>
                <p>Sort by</p>
              </div>
            </div>
            <div className="w-full">
              <table className="  w-full">
                <thead className="">
                  <tr className="border-b">
                    <td className="py-3 px-12">Nasabah</td>
                    <td className="py-3 text-center">Status</td>
                    <td className="py-3 text-center">Tanggal</td>
                    <td className="py-3 text-center">Pinjaman</td>
                    <td className="py-3 text-center">Bunga</td>
                    <td className="py-3 text-center">Action</td>
                  </tr>
                </thead>
                <tbody>
                  {/* map ada disini */}
                  {list.map((item, index) => {
                    return (
                      <tr className="border-b" key={index}>
                        <td className="py-3">
                          <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 bg-white border-2 border-slate-950 rounded-full"></div>
                            <div>
                              <p className="text-lg capitalize leading-6">
                                {item.nama}
                              </p>
                              <p className="text-sm leading-3">
                                {item.noJaminan}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3">
                          <div
                            className={`text-white px-2 py-1 rounded-full text-center bg-opacity-50 ${
                              item.kondisi === 'new'
                                ? 'bg-emerald-500'
                                : item.kondisi === 'active'
                                ? 'bg-sky-500'
                                : 'bg-green-600'
                            }`}
                          >
                            {item.kondisi}
                          </div>
                        </td>
                        <td className="text-sm text-center">{item.tanggal}</td>
                        <td className="text-center">
                          Rp.{' '}
                          {item.pinjaman.toLocaleString('id-ID', {
                            styles: 'currency',
                            currency: 'IDR',
                          })}
                        </td>
                        <td className="text-center">{item.bunga} %</td>
                        <td className="">
                          <div className="flex gap-2 justify-center">
                            <div
                              onClick={() => handleIdNas(item.id)}
                              className="cursor-pointer hover:scale-105 w-max px-4 py-1 bg-red-500 rounded-lg"
                            >
                              Delete
                            </div>
                            <Link to={/detailnas/ + item.id}>
                              <div className="cursor-pointer hover:scale-105 w-max px-4 py-1 bg-cyan-500 rounded-lg">
                                Detail
                              </div>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {isOpen && (
                <div className="fixed bg-slate-300 bg-opacity-80 inset-0">
                  <div className="w-full h-screen flex justify-center items-center">
                    <div className="p-4 text-xl text-white bg-slate-700 rounded-md shadow">
                      <h2>Apakah anda yakin mau menghapusnya? </h2>
                      <div className="flex gap-3 mt-3">
                        <button
                          onClick={() => setIsOpen(!isOpen)}
                          type="button"
                          className="hover:scale-105 w-1/2 tracking-wider py-2 text-lg font-semibold text-white bg-sky-400 shadow rounded-md"
                        >
                          Batal
                        </button>
                        <button
                          onClick={() => handleDelete(idNas)}
                          className="hover:scale-105 w-1/2 tracking-wider py-2 text-lg font-semibold text-white bg-red-400 shadow rounded-md"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
