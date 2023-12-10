/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DataUserContextProvider from './context/dataUser.jsx';
import HomeBeta from './pages/homebeta.jsx';
import DaftarNasBeta from './pages/daftarNasBeta.jsx';
import AddNasabah from './pages/addNasabah.jsx';
import DetailNas from './pages/detailNas.jsx';
import SliderNavbarProvider from './context/slidenav.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeBeta />,
  },
  {
    path: '/addnasabah',
    element: <AddNasabah />,
  },
  {
    path: '/daftarNasabah',
    element: <DaftarNasBeta />,
  },
  {
    path: '/detailnas/:id',
    element: <DetailNas />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataUserContextProvider>
      <SliderNavbarProvider>
        <RouterProvider router={router} />
      </SliderNavbarProvider>
    </DataUserContextProvider>
  </React.StrictMode>,
);
