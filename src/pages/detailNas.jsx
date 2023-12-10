import { useParams } from 'react-router-dom';
import CardDetailNas from '../componen/fragment/cardDetailNas';
import NavLeft from '../componen/fragment/navleft';
import { useContext } from 'react';
import { SliderNav } from '../context/slidenav';

export default function DetailNas() {
  const { slider } = useContext(SliderNav);
  const { id } = useParams();
  const parsedId = parseInt(id);
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
          <CardDetailNas id={parsedId} />
        </div>
        <div className="w-[300px] h-screen hidden xl:block bg-[#211545]"></div>
      </div>
    </>
  );
}
