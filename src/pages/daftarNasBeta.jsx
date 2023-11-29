import NavLeft from '../componen/fragment/navleft';
import CardDaftarNas from '../componen/fragment/cardDaftarNas';

export default function DaftarNasBeta() {
  return (
    <>
      <div className="flex relative">
        <div className="h-screen absolute -left-[197px] transition-all duration-500 md:static">
          <NavLeft />
        </div>
        <div className="w-full h-screen bg-[#211545] overflow-y-auto">
          <CardDaftarNas />
        </div>
        <div className="w-[300px] h-screen hidden xl:block bg-slate-400"></div>
      </div>
    </>
  );
}
