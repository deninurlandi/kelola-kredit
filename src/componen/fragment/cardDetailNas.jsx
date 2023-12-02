/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import { DataUser } from '../../context/dataUser';

export default function CardDetailNas(props) {
  const { id } = props;
  const { data } = useContext(DataUser);

  const [user, setUser] = useState({});

  useEffect(() => {
    if (data.length > 0) {
      const userNew = data.find((item) => item.id === id);
      setUser(userNew);
    }
  }, [data, id]);

  const [payNominal, setPayNominal] = useState('');
  const [payDate, setPayDate] = useState('');
  const [batas, setBatas] = useState(0);
  const [sisa, setSisa] = useState(0);

  function handlePayCredit(e) {
    e.preventDefault();
    if (payNominal.length > 4 && user.detail) {
      const index = user.detail.length;
      user.detail[index - 1].bayar = parseInt(payNominal);
      user.detail[index - 1].tanggalBayar = payDate;
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
        user.kondisi = 'active';
        localStorage.setItem('data', JSON.stringify(data));
        setPayNominal('');
        setPayDate('');
      } else {
        user.kondisi = 'Lunas';
        setPayNominal('');
        setPayDate('');

        localStorage.setItem('data', JSON.stringify(data));
        return user;
      }
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

  return (
    <>
      <div className="p-4 w-full bg-[#211545] text-white font-[Electrolize]">
        <div className="w-full flex gap-4">
          <div className="w-full p-4 bg-slate-600 rounded-md">
            <h2 className="text-lg mb-3">Data Nasabah</h2>

            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="py-3">Nama</td>
                  <td className="py-3 text-center">:</td>
                  <td className="py-3 pl-7">{user.nama}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Tanggal</td>
                  <td className="py-3 text-center">:</td>
                  <td className="py-3 pl-7">{user.tanggal}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">
                    No <span className="uppercase">{user.jaminan}</span>
                  </td>
                  <td className="py-3 text-center">:</td>
                  <td className="py-3 pl-7">{user.noJaminan}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Pinjaman</td>
                  <td className="py-3 text-center">:</td>
                  <td className="py-3 pl-7">
                    Rp.{' '}
                    {parseInt(user.pinjaman).toLocaleString('id-ID', {
                      styles: 'currency',
                      currency: 'IDR',
                    })}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Bunga</td>
                  <td className="py-3 text-center">:</td>
                  <td className="py-3 pl-7">{user.bunga} %</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Status</td>
                  <td className="py-3 text-center">:</td>
                  <td className="py-3 pl-7 capitalize">{user.kondisi}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full max-w-md p-4 bg-slate-600 rounded-md">
            <p className="px-3 py-1 mb-4 w-max rounded-sm bg-slate-400">
              {sisa === 0
                ? 'Pinjaman Lunas'
                : 'Jumlah Wajib Bayar : Rp. ' + batas.toLocaleString('id-ID')}
            </p>
            <div className="mb-4">
              <h2 className="text-lg">Form Bayar Pinjaman</h2>
              <p className="text-sm leading-3">isi form ini dengan benar</p>
            </div>
            <form action="" onSubmit={(e) => handlePayCredit(e)}>
              <div className="mb-3">
                <label htmlFor="bayar">Jumlah Bayar :</label>
                <input
                  type="number"
                  id="bayar"
                  max={batas}
                  min={batas < 200000 ? batas : 100000}
                  value={payNominal}
                  disabled={sisa === 0}
                  minLength={5}
                  onChange={(e) => setPayNominal(e.target.value)}
                  placeholder="Masukan nomimal bayar"
                  className={`w-full max-w-md p-2 outline-none bg-transparent border rounded-md ${
                    sisa === 0 ? 'cursor-not-allowed opacity-60' : ''
                  }`}
                />
              </div>
              <div className="mb-5">
                <label htmlFor="tanggal">Tanggal Bayar</label>
                <input
                  type="date"
                  id="tanggal"
                  value={payDate}
                  disabled={sisa === 0}
                  required
                  minLength={5}
                  onChange={(e) => setPayDate(e.target.value)}
                  placeholder="Masukan nomimal bayar"
                  className={`w-full max-w-md p-2 outline-none bg-transparent border rounded-md ${
                    sisa === 0 ? 'cursor-not-allowed opacity-60' : ''
                  }`}
                />
              </div>
              <div>
                <button
                  disabled={sisa === 0}
                  className={`px-4 py-2 w-full bg-cyan-400 text-lg rounded-lg shadow-sm shadow-slate-200 border border-slate-500 ${
                    sisa === 0 ? 'cursor-not-allowed opacity-60' : ''
                  }`}
                >
                  Bayar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full p-4 mt-4 bg-slate-600 rounded-md overflow-x-auto">
          <h2 className="text-lg">Detail Pinjaman</h2>
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <td className="py-3 px-1 text-center">Tanggal Tempo</td>
                <td className="py-3 px-1 text-center">Tanggal Bayar</td>
                <td className="py-3 px-1 text-center">Pinjaman</td>
                <td className="py-3 px-1 text-center">Bunga</td>
                <td className="py-3 px-1 text-center">Nominal Bunga</td>
                <td className="py-3 px-1 text-center">Jumlah Pinjaman</td>
                <td className="py-3 px-1 text-center">Bayar</td>
              </tr>
            </thead>
            <tbody>
              {user.detail &&
                user.detail.length > 0 &&
                user.detail.map((item, index) => {
                  return (
                    <tr className="border-b" key={index}>
                      <td className="py-3 px-1 text-center">
                        {item.tanggalTempo}
                      </td>
                      <td className="py-3 px-1 text-center">
                        {item.tanggalBayar}
                      </td>
                      <td className="py-3 px-1 text-center">
                        {item.pinjaman.toLocaleString('id-ID', {
                          styles: 'currency',
                          currency: 'IDR',
                        })}
                      </td>
                      <td className="py-3 px-1 text-center">{item.bunga} %</td>
                      <td className="py-3 px-1 text-center">
                        Rp.{' '}
                        {item.jmlBunga.toLocaleString('id-ID', {
                          styles: 'currency',
                          currency: 'IDR',
                        })}{' '}
                      </td>
                      <td className="py-3 px-1 text-center">
                        Rp.{' '}
                        {item.jmlPinjaman.toLocaleString('id-ID', {
                          styles: 'currency',
                          currency: 'IDR',
                        })}{' '}
                      </td>
                      <td className="py-3 px-1 text-center">
                        {
                          item.bayar
                            ? 'Rp. ' +
                              item.bayar.toLocaleString('id-ID', {
                                styles: 'currency',
                                currency: 'IDR',
                              })
                            : '' // Gantilah pesan ini dengan pesan yang sesuai untuk nilai kosong
                        }{' '}
                      </td>
                    </tr>
                  );
                })}
              {sisa === 0 && (
                <tr>
                  <td colSpan={7} className="border-b text-xl tracking-[10px]">
                    <p className="text-center">PINJAMAN LUNAS</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
