import NavLeft from '../componen/fragment/navleft';
import Dashboard from '../componen/fragment/dashboard';

export default function HomeBeta() {
  return (
    <>
      <div className="flex relative">
        <div className="h-screen absolute -left-[197px] transition-all duration-500 md:static">
          <NavLeft />
        </div>
        <div className="w-full h-screen bg-[#211545] overflow-auto">
          <h2 className="text-xl font-[Electrolize] text-white px-4 pt-3">
            WELCOME TO DASHBOARD
          </h2>
          <Dashboard />
        </div>
        <div className="w-72 hidden xl:block"></div>
      </div>
    </>
  );
}
