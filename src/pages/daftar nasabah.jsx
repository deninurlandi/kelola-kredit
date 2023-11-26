/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useContext } from 'react';
import { DataUser } from '../context/dataUser';
import { Link } from 'react-router-dom';

export default function Nasabah() {
  const { data } = useContext(DataUser);

  return (
    <>
      <div className="w-full flex justify-center py-7">
        <table className="max-w-xl w-full">
          <thead>
            <tr className="text-xl font-semibold">
              <th></th>
              <th>Nama</th>
              <th>Pinjaman</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="py-1">
                    <div className="w-12 h-12 bg-slate-400 rounded-full flex items-center justify-center text-3xl font-medium uppercase text-green-200">
                      {item.nama.split('')[0]}
                    </div>
                  </td>
                  <td className="text-xl font-semibold">
                    <div className="mx-2 py-1 text-center capitalize px-2 bg-gray-300 text-slate-700 rounded">
                      {item.nama}
                    </div>
                  </td>
                  <td className="text-xl font-semibold">
                    <div className="mr-2 py-1 px-1 text-center bg-red-400 text-white rounded">
                      Rp{' '}
                      {item.pinjaman.toLocaleString('id-ID', {
                        styles: 'currency',
                        currency: 'IDR',
                      })}
                    </div>
                  </td>

                  <td className="text-xl font-semibold text-green-400">
                    <div className="py-1 px-1 text-center bg-orange-400 text-white rounded">
                      {item.status ? 'Lunas' : 'Blm lunas'}
                    </div>
                  </td>

                  <td className="text-xl font-semibold text-green-400">
                    <Link to={'/detailUser/' + item.id}>
                      <div className="ml-2 text-center py-1 px-2 bg-green-400 text-white rounded">
                        Detail
                      </div>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
