import NavLeft from '../componen/fragment/navleft';
import CardDaftarNas from '../componen/fragment/cardDaftarNas';
import { useContext, useEffect, useState } from 'react';
import { DataUser } from '../context/dataUser';
import { SliderNav } from '../context/slidenav';

export default function DaftarNasBeta() {
  const { slider } = useContext(SliderNav);
  const { data } = useContext(DataUser);
  const [all, setAll] = useState(0);
  const [baru, setBaru] = useState(0);
  const [priceNew, setPriceNew] = useState(0);
  const [priceLunas, setPriceLunas] = useState(0);
  const [priceActive, setPriceActive] = useState(0);
  const [priceAll, setPriceAll] = useState(0);
  const [aktif, setAktif] = useState(0);
  const [lunas, setLunas] = useState(0);
  useEffect(() => {
    setAll(data.length);
    const filterNew = data.filter((item) => item.kondisi === 'new');
    const filterAktif = data.filter((item) => item.kondisi === 'active');
    const filterLunas = data.filter((item) => item.kondisi === 'Lunas');
    setLunas(filterLunas.length);
    setBaru(filterNew.length);
    setAktif(filterAktif.length);
    setPriceActive(
      filterAktif.reduce(
        (a, b) => a + (-b.pinjaman + b.detail.reduce((a, b) => a + b.bayar, 0)),
        0,
      ),
    );
    setPriceLunas(
      filterLunas.reduce(
        (a, b) => a + (-b.pinjaman + b.detail.reduce((a, b) => a + b.bayar, 0)),
        0,
      ),
    );
    setPriceNew(filterNew.reduce((a, b) => a - b.pinjaman, 0));
  }, [data]);
  useEffect(() => {
    setPriceAll(priceNew + priceLunas + priceActive);
  }, [data, priceNew, priceLunas, priceActive]);

  return (
    <>
      <div className="flex relative">
        <div
          className={`${
            slider ? 'left-0' : '-left-[225px]'
          } h-screen absolute z-[99] transition-all duration-500 md:static`}
        >
          <NavLeft />
        </div>
        <div className="w-full h-screen bg-[#211545] overflow-y-auto">
          <CardDaftarNas
            all={all}
            baru={baru}
            priceNew={priceNew}
            aktif={aktif}
            lunas={lunas}
            priceAll={priceAll}
            priceLunas={priceLunas}
            priceActive={priceActive}
          />
        </div>
        <div className="w-[300px] h-screen hidden xl:block bg-[#211545]"></div>
      </div>
    </>
  );
}
