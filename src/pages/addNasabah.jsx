import { useContext } from 'react';
import CardAddNas from '../componen/fragment/cardAddNas';
import NavLeft from '../componen/fragment/navleft';
import { DataUser } from '../context/dataUser';

export default function AddNasabah() {
  const { data, setData } = useContext(DataUser);
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
          <CardAddNas onDelete={handleDelete} />
        </div>
      </div>
    </>
  );
}
