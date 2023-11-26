// /* eslint-disable no-unused-vars */
// import { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState([]);

//   const [nama, setNama] = useState('');
//   const [pinjaman, setPinjaman] = useState('');
//   const [bunga, setBunga] = useState('');
//   const [tanggal, setTanggal] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if ((nama, pinjaman, bunga, tanggal)) {
//       setData([
//         ...data,
//         {
//           nama,
//           id: data.length + 1,
//           pinjaman,
//           bunga,
//           detail: [
//             {
//               tanggal,
//               bunga,
//               bayar: '',
//               jmlBunga: (pinjaman * bunga) / 100,
//               jmlPinjaman: pinjaman + (pinjaman * bunga) / 100,
//             },
//           ],
//         },
//       ]);
//     }
//     setNama('');
//     setPinjaman('');
//     setBunga('');
//     setTanggal('');
//   };

//   useEffect(() => {
//     console.log(data);
//   }, [data]);
//   return (
//     <>
//       <div className=" min-h-screen flex pt-12 justify-center">
//         <form action="" className="flex flex-col" onSubmit={handleSubmit}>
//           <div className="flex flex-col">
//             <label htmlFor="nama" className="font-medium text-lg">
//               Nama :
//             </label>
//             <input
//               type="text"
//               value={nama}
//               onChange={(e) => setNama(e.target.value)}
//               className="border px-3 py-1 outline-cyan-400 rounded-md border-slate-700"
//               id="nama"
//               name="nama"
//             />
//           </div>
//           <div className="flex flex-col mt-3">
//             <label className="font-medium text-lg" htmlFor="pinjaman">
//               jumlah pinjaman
//             </label>
//             <input
//               value={pinjaman}
//               onChange={(e) => setPinjaman(parseInt(e.target.value))}
//               className="border px-3 py-1 outline-cyan-400 rounded-md border-slate-700"
//               type="number"
//               id="pinjaman"
//               name="pinjaman"
//             />
//           </div>
//           <div className="flex flex-col mt-3">
//             <label className="font-medium text-lg" htmlFor="tanggal">
//               Tanggal
//             </label>
//             <input
//               value={tanggal}
//               onChange={(e) => setTanggal(e.target.value)}
//               className="border px-3 py-1 outline-cyan-400 rounded-md border-slate-700"
//               type="date"
//               id="tanggal"
//               name="tanggal"
//             />
//           </div>
//           <div className="flex flex-col mt-3">
//             <label className="font-medium text-lg" htmlFor="bunga">
//               bunga
//             </label>
//             <input
//               value={bunga}
//               onChange={(e) => setBunga(parseInt(e.target.value))}
//               className="border px-3 py-1 outline-cyan-400 rounded-md border-slate-700"
//               type="number"
//               id="bunga"
//               name="bunga"
//             />
//           </div>
//           <button className="font-semibold bg-cyan-500 text-white px-3 py-1 mt-3 rounded-md">
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default App;
