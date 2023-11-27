import { useContext, useEffect, useState } from 'react';
import { DataUser } from '../context/dataUser';
import { useParams } from 'react-router-dom';

export default function DetailUser() {
  const { id } = useParams();
  const parsedId = parseInt(id);
  const { data } = useContext(DataUser);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (data.length > 0) {
      const userNew = data.find((item) => item.id === parsedId);
      setUser(userNew);
    }
  }, [data, parsedId]);

  const [open, setOpen] = useState(false);
  const [atention, setAtention] = useState(false);

  const [payNominal, setPayNominal] = useState('');
  const [batas, setBatas] = useState(0);
  const [sisa, setSisa] = useState(0);

  function handlePayCredit(e) {
    e.preventDefault();
    setAtention(false);
    if (payNominal.length > 4 && user.detail) {
      const index = user.detail.length;
      user.detail[index - 1].bayar = parseInt(payNominal);
      const bunga = user.detail[index - 1].bunga;
      const jmlnow = user.detail[index - 1].jmlPinjaman - payNominal;
      setSisa(jmlnow);

      const d2 = new Date(user.detail[index - 1].tanggalTempo);
      const y = d2.getFullYear();
      const m = d2.getMonth() + 2;
      const d = d2.getDate();
      console.log(y, m, d);
      const tanggal =
        m > 12 ? y + 1 + '-' + 1 + '-' + d : y + '-' + m + '-' + d;
      if (jmlnow > 0) {
        user.detail.push({
          tanggalTempo: tanggal,
          bunga: bunga,
          pinjaman: jmlnow,
          jmlBunga: (jmlnow * bunga) / 100,
          jmlPinjaman: jmlnow + (jmlnow * bunga) / 100,
        });
        localStorage.setItem('data', JSON.stringify(data));
        setPayNominal('');
        setOpen(false);
      } else {
        setPayNominal('');
        setOpen(false);
        localStorage.setItem('data', JSON.stringify(data));
        return user;
      }
    } else if (payNominal.length < 5) {
      setTimeout(() => {
        setAtention(true);
      }, 200);
    }
  }

  useEffect(() => {
    if (user.detail) {
      setBatas(user.detail[user.detail.length - 1].jmlPinjaman);
      setSisa(
        user.detail[user.detail.length - 1].jmlPinjaman -
          user.detail[user.detail.length - 1].bayar,
      );
    }
  }, [user, payNominal]);
  console.log(batas);

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="py-5 px-4">
          <table className="mb-5">
            <tbody>
              <tr>
                <td className="font-semibold pr-3">Nama</td>
                <td className="font-semibold pr-3">:</td>
                <td className="capitalize font-semibold">{user.nama}</td>
              </tr>
              <tr>
                <td className="font-semibold pr-3">Pinjaman</td>
                <td className="font-semibold pr-3 ">:</td>
                <td className="font-bold">
                  Rp.{' '}
                  {parseInt(user.pinjaman).toLocaleString('id-ID', {
                    styles: 'currency',
                    currency: 'IDR',
                  })}
                </td>
              </tr>
              <tr>
                <td className="font-semibold pr-3">Tanggal Pinjaman</td>
                <td className="font-semibold pr-3">:</td>
                <td>{user.tanggal}</td>
              </tr>
              <tr>
                <td className="font-semibold pr-3">Bunga</td>
                <td className="font-semibold pr-3">:</td>
                <td>{user.bunga} %</td>
              </tr>
            </tbody>
          </table>

          <table className="border-collapse border border-slate-400">
            <thead className="">
              <tr>
                <th className="px-2 border border-slate-300 py-1 bg-cyan-200">
                  Tanggal Tempo
                </th>
                <th className="px-2 border border-slate-300 py-1 bg-cyan-200">
                  Pokok
                </th>
                <th className="px-2 border border-slate-300 py-1 bg-cyan-200">
                  Bunga
                </th>
                <th className="px-2 border border-slate-300 py-1 bg-cyan-200">
                  Nominal Bunga
                </th>
                <th className="px-2 border border-slate-300 py-1 bg-cyan-200">
                  Jumlah Pinjaman
                </th>
                <th className="px-2 border border-slate-300 py-1 bg-cyan-200">
                  Dibayar
                </th>
              </tr>
            </thead>
            <tbody>
              {user.detail &&
                user.detail.length > 0 &&
                user.detail.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="border py-1 border-slate-300 text-center px-2">
                        {item.tanggalTempo}
                      </td>
                      <td className="border py-1 border-slate-300 text-center px-2">
                        Rp.{' '}
                        {item.pinjaman.toLocaleString('id-ID', {
                          styles: 'currency',
                          currency: 'IDR',
                        })}
                      </td>
                      <td className="border py-1 border-slate-300 text-center px-2">
                        {item.bunga} %
                      </td>
                      <td className="border py-1 border-slate-300 text-center px-2">
                        Rp.{' '}
                        {item.jmlBunga.toLocaleString('id-ID', {
                          styles: 'currency',
                          currency: 'IDR',
                        })}
                      </td>
                      <td className="border py-1 border-slate-300 text-center px-2">
                        Rp.{' '}
                        {item.jmlPinjaman.toLocaleString('id-ID', {
                          styles: 'currency',
                          currency: 'IDR',
                        })}
                      </td>
                      <td className="border py-1 border-slate-300 text-center px-2">
                        {
                          item.bayar
                            ? 'Rp. ' +
                              item.bayar.toLocaleString('id-ID', {
                                styles: 'currency',
                                currency: 'IDR',
                              })
                            : '' // Gantilah pesan ini dengan pesan yang sesuai untuk nilai kosong
                        }
                      </td>
                    </tr>
                  );
                })}

              {sisa === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="text-2xl font-bold font-serif tracking-[10px] text-center bg-green-300"
                  >
                    Pinjaman Lunas
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="relative w-full flex justify-center">
            <button
              onClick={() => setOpen(true)}
              disabled={sisa === 0}
              className={`mt-5 bg-cyan-400 shadow-lg shadow-slate-300 px-5 py-2 text-white font-bold text-lg rounded-xl ${
                sisa === 0 ? 'cursor-not-allowed opacity-60' : ''
              }`}
            >
              Bayar Sekarang
            </button>

            <div
              className={`w-full max-w-sm bg-green-900 p-5 bg-opacity-40 rounded-lg ${
                open ? 'fixed' : 'hidden'
              }`}
            >
              <div className="flex justify-center">
                <div className="text-center text-lg font-semibold text-red-600 bg-white w-max px-2 py-1 rounded-lg shadow-md mb-3">
                  Kewajiban : Rp. {batas.toLocaleString('id-ID')}
                </div>
              </div>
              <hr className="border-2 border-cyan-700" />
              <form
                action=""
                className="flex flex-col"
                onSubmit={(e) => handlePayCredit(e)}
              >
                <label
                  htmlFor="bayar"
                  className="font-semibold text-lg text-slate-700"
                >
                  Nominal Bayar
                </label>
                <input
                  type="number"
                  name="bayar"
                  max={batas}
                  min={batas < 200000 ? batas : 100000}
                  value={payNominal}
                  onChange={(e) => setPayNominal(e.target.value)}
                  className="border border-slate-600 outline-cyan-500 px-3 py-2 rounded-xl"
                />
                <div
                  className={`mt-2 -mb-1 justify-center transition-all duration-150 ${
                    atention ? 'flex' : 'hidden'
                  }`}
                >
                  <div className=" text-red-500 w-44 text-center rounded-lg bg-slate-200">
                    Minimal Bayar 100.000
                  </div>
                </div>

                <div className="w-full flex gap-5 mt-5">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="w-full text-lg bg-red-400 font-semibold text-white px-3 py-2 rounded-xl"
                  >
                    Batal
                  </button>
                  <button className="w-full text-lg font-semibold bg-cyan-500 text-white px-3 py-2 rounded-xl">
                    Bayar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
