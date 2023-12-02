import NavLeft from '../componen/fragment/navleft';
import CardDaftarNas from '../componen/fragment/cardDaftarNas';
import { useContext, useEffect, useState } from 'react';
import { DataUser } from '../context/dataUser';

export default function DaftarNasBeta() {
  const { data, setData } = useContext(DataUser);
  const [all, setAll] = useState(0);
  const [baru, setBaru] = useState(0);
  const [priceNew, setPriceNew] = useState(0);
  const [aktif, setAktif] = useState(0);
  const [lunas, setLunas] = useState(0);
  useEffect(() => {
    setAll(data.length);
    const filterNew = data.filter((item) => item.kondisi === 'new');
    const filterAktif = data.filter((item) => item.kondisi === 'aktif');
    const filterLunas = data.filter((item) => item.kondisi === 'lunas');
    setLunas(filterLunas.length);
    setBaru(filterNew.length);
    setAktif(filterAktif.length);
    setPriceNew(filterNew.reduce((a, b) => a + b.pinjaman, 0));
  }, [data]);

  function handleDelete(id) {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData));
  }

  return (
    <>
      <div className="flex relative">
        <div className="h-screen absolute -left-[197px] transition-all duration-500 md:static">
          <NavLeft />
        </div>
        <div className="w-full h-screen bg-[#211545] overflow-y-auto">
          <CardDaftarNas
            all={all}
            baru={baru}
            priceNew={priceNew}
            aktif={aktif}
            lunas={lunas}
            onDelete={handleDelete}
          />
        </div>
        <div className="w-[300px] h-screen hidden xl:block bg-[#211545]"></div>
      </div>
    </>
  );
}
