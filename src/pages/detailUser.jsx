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

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="py-5 px-4">
          <table className="mb-5">
            <tbody>
              <tr>
                <td className="font-semibold pr-3">Nama</td>
                <td className="font-semibold pr-3">:</td>
                <td>{user.nama}</td>
              </tr>
              <tr>
                <td className="font-semibold pr-3">Pinjaman</td>
                <td className="font-semibold pr-3">:</td>
                <td>
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
                <td>
                  {user.detail && user.detail.length > 0
                    ? user.detail[0].tanggal
                    : 'Tanggal tidak tersedia'}
                </td>
              </tr>
              <tr>
                <td className="font-semibold pr-3">Bunga</td>
                <td className="font-semibold pr-3">:</td>
                <td>{user.bunga} %</td>
              </tr>
            </tbody>
          </table>

          <table className="border-colapse border border-slate-400">
            <thead className="">
              <tr>
                <th className="px-2 border border-slate-300">Tanggal</th>
                <th className="px-2 border border-slate-300">Pinjaman</th>
                <th className="px-2 border border-slate-300">Bunga</th>
                <th className="px-2 border border-slate-300">Nominal Bunga</th>
                <th className="px-2 border border-slate-300">
                  Jumlah Pinjaman
                </th>
                <th className="px-2 border border-slate-300">Dibayar</th>
              </tr>
            </thead>
            <tbody>
              {user.detail &&
                user.detail.length > 0 &&
                user.detail.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="border border-slate-300 text-center px-2">
                        {item.tanggal}
                      </td>
                      <td className="border border-slate-300 text-center px-2">
                        Rp.{' '}
                        {user.pinjaman.toLocaleString('id-ID', {
                          styles: 'currency',
                          currency: 'IDR',
                        })}
                      </td>
                      <td className="border border-slate-300 text-center px-2">
                        {item.bunga} %
                      </td>
                      <td className="border border-slate-300 text-center px-2">
                        Rp.{' '}
                        {item.jmlBunga.toLocaleString('id-ID', {
                          styles: 'currency',
                          currency: 'IDR',
                        })}
                      </td>
                      <td className="border border-slate-300 text-center px-2">
                        Rp.{' '}
                        {item.jmlPinjaman.toLocaleString('id-ID', {
                          styles: 'currency',
                          currency: 'IDR',
                        })}
                      </td>
                      <td className="border border-slate-300 text-center px-2">
                        {item.bayar}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
