/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home.jsx';
import DataUserContextProvider from './context/dataUser.jsx';
import AddUser from './pages/formAddUser.jsx';
import Nasabah from './pages/daftar nasabah.jsx';
import DetailUser from './pages/detailUser.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/addUser',
    element: <AddUser />,
  },
  {
    path: '/daftarNasabah',
    element: <Nasabah />,
  },
  {
    path: '/detailUser/:id',
    element: <DetailUser />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataUserContextProvider>
      <RouterProvider router={router} />
    </DataUserContextProvider>
  </React.StrictMode>,
);