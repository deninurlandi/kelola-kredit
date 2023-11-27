/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useContext } from 'react';
import { DataUser } from '../context/dataUser';
import { Link } from 'react-router-dom';
import CardUser from '../componen/fragment/cardUser';

export default function Nasabah() {
  const { data } = useContext(DataUser);

  return (
    <>
      <div className="w-full py-10 flex flex-col items-center gap-2">
        {data.map((item, index) => {
          return (
            <CardUser
              key={index}
              id={item.id}
              nama={item.nama}
              initial={item.nama.split('')[0]}
              pinjaman={item.pinjaman.toLocaleString('id-ID', {
                styles: 'currency',
                currency: 'IDR',
              })}
              sisaAngsuran={item.detail[
                item.detail.length - 1
              ].jmlPinjaman.toLocaleString('id-ID', {
                styles: 'currency',
                currency: 'IDR',
              })}
              jatem={item.detail[item.detail.length - 1].tanggalTempo}
            />
          );
        })}
      </div>
    </>
  );
}
