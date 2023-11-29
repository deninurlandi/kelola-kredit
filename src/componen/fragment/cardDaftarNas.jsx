export default function CardDaftarNas() {
  return (
    <>
      <div className="w-full p-4 bg-[#211545] font-[Electrolize] text-white">
        <div className="p-2 flex w-full items-center justify-between">
          <div className="relative w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="30"
              className="absolute top-[5px] fill-white"
            >
              <g id="_01_align_center" data-name="01 align center">
                <path d="M24,22.586l-6.262-6.262a10.016,10.016,0,1,0-1.414,1.414L22.586,24ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
              </g>
            </svg>
            <input
              type="text"
              placeholder="Cari Nasabah"
              className="focus:outline-none bg-transparent placeholder:text-white text-lg pl-7 text-white py-[6px] border-slate-500 w-full"
            />
          </div>
          <div className=" flex w-max gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="23"
              height="23"
              className="fill-white"
            >
              <g id="_01_align_center" data-name="01 align center">
                <path d="M23.259,16.2l-2.6-9.371A9.321,9.321,0,0,0,2.576,7.3L.565,16.35A3,3,0,0,0,3.493,20H7.1a5,5,0,0,0,9.8,0h3.47a3,3,0,0,0,2.89-3.8ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm9.165-4.395a.993.993,0,0,1-.8.395H3.493a1,1,0,0,1-.976-1.217l2.011-9.05a7.321,7.321,0,0,1,14.2-.372l2.6,9.371A.993.993,0,0,1,21.165,17.605Z" />
              </g>
            </svg>
            <div className="w-[1px] h-8 bg-white"></div>
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 rounded-full border border-white bg-slate-800"></div>
              <div className="flex flex-col">
                <p className="leading-3 font-medium text-white">Joko W</p>
                <div className="flex items-center text-white">
                  <div className="w-[8px] h-[8px] rounded-full bg-green-700"></div>
                  <h2 className="text-xs px-[6px]">Online</h2>
                </div>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="fill-white"
              >
                <g id="_01_align_center" data-name="01 align center">
                  <circle cx="2" cy="12" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="22" cy="12" r="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <hr className="border-slate-500" />
        <div className="flex justify-between items-center py-6">
          <div className="">
            <h2 className="text-2xl">Daftar Nasabah</h2>
            <p className="text-sm leading-[5px]">
              Here you can see the list of all users
            </p>
          </div>
          <div className="flex gap-3">
            <div className="flex gap-2 items-center bg-slate-600 px-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="15"
                height="15"
                className="fill-white"
              >
                <path d="M24,3c0,.55-.45,1-1,1H1c-.55,0-1-.45-1-1s.45-1,1-1H23c.55,0,1,.45,1,1ZM15,20h-6c-.55,0-1,.45-1,1s.45,1,1,1h6c.55,0,1-.45,1-1s-.45-1-1-1Zm4-9H5c-.55,0-1,.45-1,1s.45,1,1,1h14c.55,0,1-.45,1-1s-.45-1-1-1Z" />
              </svg>
              <p>Filter by</p>
            </div>
            <div className="flex gap-2 items-center bg-slate-600 px-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="15"
                height="15"
                className="fill-white"
              >
                <path d="M11.293,17.707l-3.293,3.293V1c0-.553-.447-1-1-1s-1,.447-1,1V21l-3.293-3.293c-.391-.391-1.023-.391-1.414,0s-.391,1.023,0,1.414l4.293,4.293c.39,.39,.902,.585,1.414,.585s1.024-.195,1.414-.585l4.293-4.293c.391-.391,.391-1.023,0-1.414s-1.023-.391-1.414,0ZM22.707,6.293c.391-.391,.391-1.023,0-1.414L18.414,.586C18.024,.196,17.512,0,17,0s-1.024,.195-1.414,.585l-4.293,4.293c-.391,.391-.391,1.023,0,1.414s1.023,.391,1.414,0l3.293-3.293V23c0,.553,.447,1,1,1s1-.447,1-1V3l3.293,3.293c.391,.391,1.023,.391,1.414,0Z" />
              </svg>
              <p>Sort by</p>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-3">
          <div className="w-1/2 flex flex-wrap gap-3">
            <div className="w-full flex gap-3">
              {/* kotak1 */}
              <div className="w-1/2 p-3 bg-slate-600 rounded-md flex flex-col gap-5 justify-between ">
                <div className="flex justify-between items-center">
                  <p>Active</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    className="fill-white"
                  >
                    <g id="_01_align_center" data-name="01 align center">
                      <circle cx="2" cy="12" r="2" />
                      <circle cx="12" cy="12" r="2" />
                      <circle cx="22" cy="12" r="2" />
                    </g>
                  </svg>
                </div>
                <div>
                  <p className="text-3xl">
                    20 <span className="text-base">(People)</span>
                  </p>
                  <div className="flex gap-2 text-sm justify-start">
                    <p>+ Rp. 5.000.000</p>
                  </div>
                </div>
                <div>
                  <hr />
                  <div className="pt-2 flex gap-2 items-center justify-center">
                    <p>Detail</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      className="fill-white"
                    >
                      <path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* akhir kotak1 */}
              {/* kotak2 */}
              <div className="w-1/2 p-3 bg-slate-600 rounded-md flex flex-col gap-5 justify-between">
                <div className="flex justify-between items-center">
                  <p>Lunas</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    className="fill-white"
                  >
                    <g id="_01_align_center" data-name="01 align center">
                      <circle cx="2" cy="12" r="2" />
                      <circle cx="12" cy="12" r="2" />
                      <circle cx="22" cy="12" r="2" />
                    </g>
                  </svg>
                </div>
                <div>
                  <p className="text-3xl">
                    5 <span className="text-base">(People)</span>
                  </p>
                  <div className="flex gap-2 text-sm justify-start">
                    <p>+ Rp. 5.000.000</p>
                  </div>
                </div>
                <div>
                  <hr />
                  <div className="pt-2 flex gap-2 items-center justify-center">
                    <p>Detail</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      className="fill-white"
                    >
                      <path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* akhir kotak2 */}
            </div>
            <div className="w-full flex gap-3">
              {/* kotak3 */}
              <div className="w-1/2 p-3 bg-slate-600 rounded-md flex flex-col gap-5 justify-between">
                <div className="flex justify-between items-center">
                  <p>Baru</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    className="fill-white"
                  >
                    <g id="_01_align_center" data-name="01 align center">
                      <circle cx="2" cy="12" r="2" />
                      <circle cx="12" cy="12" r="2" />
                      <circle cx="22" cy="12" r="2" />
                    </g>
                  </svg>
                </div>
                <div>
                  <p className="text-3xl">
                    2 <span className="text-base">(People)</span>
                  </p>
                  <div className="flex gap-2 text-sm justify-start">
                    <p>- Rp. 2.000.000</p>
                  </div>
                </div>
                <div>
                  <hr />
                  <div className="pt-2 flex gap-2 items-center justify-center">
                    <p>Detail</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      className="fill-white"
                    >
                      <path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* akhir kotak3 */}
              {/* kotak4 */}
              <div className="w-1/2 p-3 bg-slate-600 rounded-md flex flex-col gap-5 justify-between">
                <div className="flex justify-between items-center">
                  <p>Macet</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    className="fill-white"
                  >
                    <g id="_01_align_center" data-name="01 align center">
                      <circle cx="2" cy="12" r="2" />
                      <circle cx="12" cy="12" r="2" />
                      <circle cx="22" cy="12" r="2" />
                    </g>
                  </svg>
                </div>
                <div>
                  <p className="text-3xl">
                    1 <span className="text-base">(People)</span>
                  </p>
                  <div className="flex gap-2 text-sm justify-start">
                    <p>+ Rp. 1 .000.000</p>
                  </div>
                </div>
                <div>
                  <hr />
                  <div className="pt-2 flex gap-2 items-center justify-center">
                    <p>Detail</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      className="fill-white"
                    >
                      <path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* akhir kotak4 */}
            </div>
          </div>
          <div className="w-1/2 bg-slate-600 rounded-md p-3 overflow-hidden">
            <div className="pb-3 flex justify-between items-center">
              <h2 className="text-lg">Grafik</h2>
              <div className="flex items-center gap-1 bg-slate-700 px-1 rounded-md w-max">
                <p>Month</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Outline"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  className="fill-white"
                >
                  <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                </svg>
              </div>
            </div>
            <div className="relative pb-12 flex flex-col justify-around h-full">
              <div className="w-full">
                <p className="text-sm w-max">100</p>
                <hr className="border-dashed" />
              </div>
              <div className="w-full">
                <p className="text-sm w-max">75</p>
                <hr className="border-dashed" />
              </div>
              <div className="w-full">
                <p className="text-sm w-max">50</p>
                <hr className="border-dashed" />
              </div>
              <div className="w-full">
                <p className="text-sm w-max">25</p>
                <hr className="border-dashed" />
              </div>
              <div className="w-full">
                <p className="text-sm w-max">0</p>
                <hr className="border-dashed" />
              </div>
              <div className="absolute bottom-0 w-full pl-2 h-full flex justify-around pb-5">
                <div className="h-full pb-[23px] flex flex-col items-center">
                  <div className=" h-full flex gap-2 items-end">
                    <div className="w-4 h-[75%] bg-emerald-500"></div>
                    <div className="w-4 h-[25%] bg-red-600"></div>
                  </div>
                  <div>Sept 23</div>
                </div>
                <div className="h-full pb-[23px] flex flex-col items-center">
                  <div className=" h-full flex gap-2 items-end">
                    <div className="w-4 h-[60%] bg-emerald-500"></div>
                    <div className="w-4 h-[32%] bg-red-600"></div>
                  </div>
                  <div>Okt 23</div>
                </div>
                <div className="h-full pb-[23px] flex flex-col items-center">
                  <div className=" h-full flex gap-2 items-end">
                    <div className="w-4 h-[50%] bg-emerald-500"></div>
                    <div className="w-4 h-[40%] bg-red-600"></div>
                  </div>
                  <div>Nov 23</div>
                </div>
                <div className="h-full pb-[23px] flex flex-col items-center">
                  <div className=" h-full flex gap-2 items-end">
                    <div className="w-4 h-[70%] bg-emerald-500"></div>
                    <div className="w-4 h-[22%] bg-red-600"></div>
                  </div>
                  <div>Des 23</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* tabel */}
        <div className="w-full bg-slate-600 p-6 mt-6 rounded-md overflow-x-auto">
          <div className="flex justify-between items-center">
            <p className="text-lg">All nasabah</p>
            <div className="flex items-center gap-1 bg-slate-700 px-1 rounded-md w-max">
              <p>All</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="fill-white"
              >
                <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
              </svg>
            </div>
          </div>

          {/* awal tabel */}
          <table className="  w-full">
            <thead className="">
              <tr className="border-b">
                <td className="py-3 px-12">Nasabah</td>
                <td className="py-3 text-center">Status</td>
                <td className="py-3 text-center">Tanggal</td>
                <td className="py-3 text-center">Pinjaman</td>
                <td className="py-3 text-center">Bunga</td>
                <td className="py-3 text-center">Sisa angsuran</td>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 bg-white border-2 border-slate-950 rounded-full"></div>
                    <div>
                      <p className="text-lg leading-6">Prabowo S</p>
                      <p className="text-sm leading-3">123456789</p>
                    </div>
                  </div>
                </td>
                <td className="py-3">
                  <div className="bg-emerald-500 text-white px-2 py-1 rounded-full text-center bg-opacity-60">
                    Active
                  </div>
                </td>
                <td className="text-sm text-center">12-10-2023</td>
                <td className="text-center">Rp. 500.000</td>
                <td className="text-center">20 %</td>
                <td className="text-center">Rp. 150.000</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 bg-white border-2 border-slate-950 rounded-full"></div>
                    <div>
                      <p className="text-lg leading-6">Prabowo S</p>
                      <p className="text-sm leading-3">123456789</p>
                    </div>
                  </div>
                </td>
                <td className="py-3">
                  <div className="bg-emerald-500 text-white px-2 py-1 rounded-full text-center bg-opacity-60">
                    Active
                  </div>
                </td>
                <td className="text-sm text-center">12-10-2023</td>
                <td className="text-center">Rp. 500.000</td>
                <td className="text-center">20 %</td>
                <td className="text-center">Rp. 150.000</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 bg-white border-2 border-slate-950 rounded-full"></div>
                    <div>
                      <p className="text-lg leading-6">Prabowo S</p>
                      <p className="text-sm leading-3">123456789</p>
                    </div>
                  </div>
                </td>
                <td className="py-3">
                  <div className="bg-emerald-500 text-white px-2 py-1 rounded-full text-center bg-opacity-60">
                    Active
                  </div>
                </td>
                <td className="text-sm text-center">12-10-2023</td>
                <td className="text-center">Rp. 500.000</td>
                <td className="text-center">20 %</td>
                <td className="text-center">Rp. 150.000</td>
              </tr>
              <tr className="border-b">
                <td className="py-3">
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 bg-white border-2 border-slate-950 rounded-full"></div>
                    <div>
                      <p className="text-lg leading-6">Prabowo S</p>
                      <p className="text-sm leading-3">123456789</p>
                    </div>
                  </div>
                </td>
                <td className="py-3">
                  <div className="bg-emerald-500 text-white px-2 py-1 rounded-full text-center bg-opacity-60">
                    Active
                  </div>
                </td>
                <td className="text-sm text-center">12-10-2023</td>
                <td className="text-center">Rp. 500.000</td>
                <td className="text-center">20 %</td>
                <td className="text-center">Rp. 150.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
