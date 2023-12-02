import { Link } from 'react-router-dom';

export default function NavLeft() {
  return (
    <>
      <div className="w-max h-screen bg-[#24154C] opacity-90">
        <div className="flex flex-col h-full gap-9">
          <div className="">
            <div className="px-4 pt-7 flex gap-4 items-center">
              <div className="w-11 h-11 rounded-md bg-white"></div>
              <div>
                <div className="text-white text-xl font-medium">
                  Joko Widodo
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-[10px] h-[10px] rounded-full bg-green-700"></div>
                  <h2 className="text-white text-sm">Online</h2>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <Link to={'/homeBeta'}>
              <div className="px-4 py-2 flex gap-3 items-center hover:bg-[#2e1e5b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  className="w-5 fill-white"
                >
                  <path d="m16,22v2h-8v-2c0-2.206,1.794-4,4-4s4,1.794,4,4Zm-4-14c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm12,1.685v9.315c0,2.757-2.243,5-5,5h-1v-2c0-3.309-2.691-6-6-6s-6,2.691-6,6v2h-1c-2.757,0-5-2.243-5-5v-9.315c0-1.664.823-3.214,2.203-4.146L9.203.815c1.699-1.146,3.895-1.146,5.594,0l7,4.724c1.38.932,2.203,2.481,2.203,4.146Zm-8,.315c0-2.206-1.794-4-4-4s-4,1.794-4,4,1.794,4,4,4,4-1.794,4-4Z" />
                </svg>
                <h2 className="text-white text-base">Dashboard</h2>
              </div>
            </Link>
            <Link to={'/daftarNasBeta'}>
              <div className="px-4 py-2 flex gap-3 items-center hover:bg-[#2e1e5b]">
                <svg
                  id="Layer_1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  className="w-5 fill-white"
                >
                  <path d="m16 .3a4.968 4.968 0 0 1 1.879 1.164l1.656 1.658a4.954 4.954 0 0 1 1.165 1.878h-4.7zm5 6.7v12a5.006 5.006 0 0 1 -5 5h-8a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h6v5a2 2 0 0 0 2 2zm-4.192 10.413a1 1 0 0 0 -1.4-.222 4.586 4.586 0 0 1 -2.273.809 1.347 1.347 0 0 1 -.864-.345 3.025 3.025 0 0 0 -1.832-.655 5.861 5.861 0 0 0 -3.046 1.206 1 1 0 1 0 1.214 1.588 3.951 3.951 0 0 1 1.832-.794c.246 0 .371.078.7.3a3.252 3.252 0 0 0 2 .7 6.464 6.464 0 0 0 3.456-1.193 1 1 0 0 0 .213-1.394zm.192-3.413a1 1 0 0 0 -1-1h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1zm0-4a1 1 0 0 0 -1-1h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1z" />
                </svg>
                <h2 className="text-white text-base">Daftar Nasabah</h2>
              </div>
            </Link>
            <Link to={'/addnasabah'}>
              <div className="px-4 py-2 flex gap-3 items-center hover:bg-[#2e1e5b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  className="w-5 fill-white"
                >
                  <circle cx="9" cy="6" r="6" />
                  <path d="M13.043,14H4.957A4.963,4.963,0,0,0,0,18.957V24H18V18.957A4.963,4.963,0,0,0,13.043,14Z" />
                  <polygon points="21 10 21 7 19 7 19 10 16 10 16 12 19 12 19 15 21 15 21 12 24 12 24 10 21 10" />
                </svg>
                <h2 className="text-white text-base">Tambah Nasabah</h2>
              </div>
            </Link>
            <div className="px-4 py-2 flex gap-3 items-center hover:bg-[#2e1e5b]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Isolation_Mode"
                data-name="Isolation Mode"
                viewBox="0 0 24 24"
                className="w-5 fill-white"
              >
                <path d="M12,0A12.032,12.032,0,0,0,3.529,3.529L1,1V6.909A1.09,1.09,0,0,0,2.091,8H8L5.647,5.647A8.985,8.985,0,1,1,3,12H0A12,12,0,1,0,12,0Z" />
                <polygon points="10 7 10 13.621 13.439 17.061 15.561 14.939 13 12.379 13 7 10 7" />
              </svg>
              <h2 className="text-white text-base">Riwayat</h2>
            </div>
          </div>
          <div className="flex mt-5 flex-col gap-3">
            <h2 className="px-4  text-white text-base">Control App</h2>
            <div className="px-4 py-2 flex items-center gap-3 hover:bg-[#2e1e5b]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Filled"
                viewBox="0 0 24 24"
                className="w-5 fill-white"
              >
                <path d="M12,24A12,12,0,1,0,0,12,12.013,12.013,0,0,0,12,24ZM12,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12,5Zm-1,5h1a2,2,0,0,1,2,2v6a1,1,0,0,1-2,0V12H11a1,1,0,0,1,0-2Z" />
              </svg>
              <h2 className="text-white text-base">Tentang App</h2>
            </div>

            <div className="px-4 py-2 flex items-center gap-3 hover:bg-[#2e1e5b]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                className="w-5 fill-white"
              >
                <path d="M21,12a9.143,9.143,0,0,0-.15-1.645L23.893,8.6l-3-5.2L17.849,5.159A9,9,0,0,0,15,3.513V0H9V3.513A9,9,0,0,0,6.151,5.159L3.107,3.4l-3,5.2L3.15,10.355a9.1,9.1,0,0,0,0,3.29L.107,15.4l3,5.2,3.044-1.758A9,9,0,0,0,9,20.487V24h6V20.487a9,9,0,0,0,2.849-1.646L20.893,20.6l3-5.2L20.85,13.645A9.143,9.143,0,0,0,21,12Zm-6,0a3,3,0,1,1-3-3A3,3,0,0,1,15,12Z" />
              </svg>
              <h2 className="text-white text-base">Setting App</h2>
            </div>
            <div className="px-4 py-2 flex items-center gap-3 hover:bg-[#2e1e5b]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Isolation_Mode"
                data-name="Isolation Mode"
                viewBox="0 0 24 24"
                className="w-5 fill-white rotate-180"
              >
                <path d="M3,3H8V0H3A3,3,0,0,0,0,3V21a3,3,0,0,0,3,3H8V21H3Z" />
                <path d="M22.948,9.525,18.362,4.939,16.241,7.061l3.413,3.412L5,10.5,5,13.5l14.7-.027-3.466,3.466,2.121,2.122,4.587-4.586A3.506,3.506,0,0,0,22.948,9.525Z" />
              </svg>
              <h2 className="text-white text-base">Logout</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
