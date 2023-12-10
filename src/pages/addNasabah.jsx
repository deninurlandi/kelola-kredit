import { useContext } from 'react';
import CardAddNas from '../componen/fragment/cardAddNas';
import NavLeft from '../componen/fragment/navleft';
import { DataUser } from '../context/dataUser';
import { SliderNav } from '../context/slidenav';

export default function AddNasabah() {
  const { slider } = useContext(SliderNav);
  const { data, setData } = useContext(DataUser);
  function handleDelete(id) {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData));
  }
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
          <CardAddNas onDelete={handleDelete} />
        </div>
      </div>
    </>
  );
}
