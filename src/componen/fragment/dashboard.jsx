export default function Dashboard() {
  return (
    <>
      <div className=" w-full flex h-screen">
        <div className="w-full px-4 pt-3">
          <h2 className="text-xl font-[Electrolize] text-white px-4">
            WELCOME TO DASHBOARD
          </h2>
          <div className="flex w-full sm:flex-nowrap flex-wrap gap-4 px-4 pt-3">
            <div className="sm:w-3/5 w-full  flex flex-col gap-4">
              {/* kotak besar */}
              <div className=" w-full h-80 rounded-[4px] bg-teal-400 p-6 px-8">
                <div className="mt-3">
                  <p className="text-xl font-[Electrolize] text-white">
                    Saldo debbet saat ini dalam Rp.
                  </p>
                  <h2 className="text-5xl font-[Electrolize] font-bold text-white">
                    10.000.000
                  </h2>
                </div>

                <div className="mt-10 flex gap-8">
                  <div className=" w-max flex flex-col items-center">
                    <p className="text-xl font-[Electrolize] text-white">
                      Total nasabah
                    </p>
                    <h2 className="text-3xl font-[Electrolize] font-bold text-white">
                      25
                    </h2>
                  </div>
                  <div className=" w-max flex flex-col items-center">
                    <p className="text-xl font-[Electrolize] text-white">
                      Nasabah aktif
                    </p>
                    <h2 className="text-3xl font-[Electrolize] font-bold text-white">
                      25
                    </h2>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-lg font-[Electrolize] text-white">
                    Update per hari ini{' '}
                    <span className="font-bold"> 1 Januari 2024</span>
                  </p>
                </div>
              </div>

              {/* akhir kotak besar */}
              {/* kotak kecil dibawah kotak besar */}
              <div className="w-full flex gap-4">
                <div className="w-1/2 bg-emerald-500 h-20 rounded-[4px] overflow-hidden">
                  <div className="w-full p-2 flex flex-col items-center justify-center font-[Electrolize]">
                    <p className="text-white text-lg ">Keuntungan</p>
                    <h2 className="text-xl text-white">Rp. 1.000.000</h2>
                  </div>
                </div>
                <div className="w-1/2 bg-red-500 h-20 rounded-[4px]">
                  <div className="w-full p-2 flex flex-col items-center justify-center font-[Electrolize]">
                    <p className="text-white text-lg ">Kerugian</p>
                    <h2 className="text-xl text-white">Rp. 0</h2>
                  </div>
                </div>
              </div>
              {/* akhir kotak kecil dibawah kotak */}
            </div>
            <div className="sm:w-2/5 w-full flex  flex-col gap-4 font-[Electrolize]">
              {/* kotak pertama */}
              <div className="relative flex overflow-hidden w-full bg-cyan-600 rounded-[4px] h-32">
                {/* conten */}
                <div className="absolute w-full  h-[100px] z-50">
                  <div className="h-full flex flex-col pl-4 justify-center">
                    <p className="text-white text-lg ">
                      Pengembalian bulan ini
                    </p>
                    <h2 className="text-xl text-white font-bold ">
                      Rp. 1.000.000
                    </h2>
                  </div>
                </div>
                {/* akhir conten */}
                <div className="absolute bottom-9 right-3 flex gap-2 items-end ">
                  <div className="w-[12px] h-10 bg-slate-400"></div>
                  <div className="w-[12px] h-14 bg-slate-400"></div>
                  <div className="w-[12px] h-20 bg-slate-400"></div>
                  <div className="w-[12px] h-12 bg-slate-400"></div>
                  <div className="w-[12px] h-16 bg-slate-400"></div>
                </div>
                <div className="absolute bottom-0 w-full bg-cyan-400 flex items-center justify-center gap-[6px] h-7 z-50">
                  <h2 className="text-white">Info</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="arrow-circle-down"
                    viewBox="0 0 24 24"
                    width="17"
                    height="17"
                    className="fill-white"
                  >
                    <path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12ZM14.535,6.293l3.586,3.586h0a3,3,0,0,1,0,4.243l-3.586,3.585-.025.024a1,1,0,1,1-1.389-1.438L16.414,13,6,13.007a1,1,0,1,1,0-2L16.413,11,13.121,7.707a1,1,0,1,1,1.414-1.414Z" />
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 left-0 top-0 bg-cyan-500 z-30 opacity-40"></div>
              </div>
              {/* akhir kotak pertama */}
              {/* kotak kedua */}
              <div className="relative flex w-full bg-teal-700 rounded-[4px] overflow-hidden h-32">
                {/* conten */}
                <div className="absolute w-full h-[100px] z-50">
                  <div className="flex flex-col pl-4 justify-center h-full">
                    <p className="text-white text-lg ">
                      Belum dikembalikan bulan ini
                    </p>
                    <h2 className="text-xl text-white font-bold ">
                      Rp. 5.000.000
                    </h2>
                  </div>
                </div>
                {/* akhir conten */}
                <div className="absolute bottom-9 right-3 flex gap-2 items-end ">
                  <div className="w-[12px] h-10 bg-slate-400"></div>
                  <div className="w-[12px] h-14 bg-slate-400"></div>
                  <div className="w-[12px] h-20 bg-slate-400"></div>
                  <div className="w-[12px] h-12 bg-slate-400"></div>
                  <div className="w-[12px] h-16 bg-slate-400"></div>
                </div>
                <div className="absolute bottom-0 w-full bg-teal-400 flex items-center justify-center gap-[6px] h-7 z-50">
                  <h2 className="text-white">Info</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="arrow-circle-down"
                    viewBox="0 0 24 24"
                    width="17"
                    height="17"
                    className="fill-white"
                  >
                    <path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12ZM14.535,6.293l3.586,3.586h0a3,3,0,0,1,0,4.243l-3.586,3.585-.025.024a1,1,0,1,1-1.389-1.438L16.414,13,6,13.007a1,1,0,1,1,0-2L16.413,11,13.121,7.707a1,1,0,1,1,1.414-1.414Z" />
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 left-0 top-0 bg-teal-500 z-30 opacity-40"></div>
              </div>
              {/* akhir kotak kedua */}
              {/* kotak ketiga */}
              <div className="relative flex w-full bg-rose-600 rounded-[4px] overflow-hidden h-32">
                {/* {/* conten */}
                <div className="absolute w-full h-[100px] z-50">
                  <div className="flex h-full flex-col justify-center pl-4">
                    <p className="text-white text-lg">Tunggakan sebelumnya</p>
                    <h2 className="text-xl text-white font-bold">
                      Rp. 5.000.000
                    </h2>
                  </div>
                </div>
                {/* akhir conten */}
                <div className="absolute bottom-9 right-3 flex gap-2 items-end ">
                  <div className="w-[12px] h-10 bg-slate-400"></div>
                  <div className="w-[12px] h-14 bg-slate-400"></div>
                  <div className="w-[12px] h-20 bg-slate-400"></div>
                  <div className="w-[12px] h-12 bg-slate-400"></div>
                  <div className="w-[12px] h-16 bg-slate-400"></div>
                </div>
                <div className="absolute bottom-0 w-full bg-rose-400 flex items-center justify-center gap-[6px] h-7 z-50">
                  <h2 className="text-white">Info</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="arrow-circle-down"
                    viewBox="0 0 24 24"
                    width="17"
                    height="17"
                    className="fill-white"
                  >
                    <path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12ZM14.535,6.293l3.586,3.586h0a3,3,0,0,1,0,4.243l-3.586,3.585-.025.024a1,1,0,1,1-1.389-1.438L16.414,13,6,13.007a1,1,0,1,1,0-2L16.413,11,13.121,7.707a1,1,0,1,1,1.414-1.414Z" />
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 left-0 top-0 bg-rose-500 z-30 opacity-40"></div>
              </div>
              {/* akhir kotak ketiga */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
