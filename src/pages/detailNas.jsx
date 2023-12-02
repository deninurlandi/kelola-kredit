import { useParams } from 'react-router-dom';
import CardDetailNas from '../componen/fragment/cardDetailNas';
import NavLeft from '../componen/fragment/navleft';

export default function DetailNas() {
  const { id } = useParams();
  const parsedId = parseInt(id);
  return (
    <>
      <div className="flex relative">
        <div className="h-screen absolute -left-[197px] transition-all duration-500 md:static">
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
