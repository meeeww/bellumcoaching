import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './componentes/Header'
import Inicio from './pages/Inicio'
import Precios from './pages/Precios'
import Formacion from './pages/Formacion'
import Contacto from './pages/Contacto'
import Login from './pages/Login'
import NoMatch from './pages/NoMatch'
import Footer from './componentes/Footer'
import './estilos/Dashboard.css'
import './estilos/Inicio.css'
import './estilos/Loader.css'
import DashboardAdmin from './pages/Dashboard/admin/DashboardAdmin'


import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";
import Calendario from './pages/Dashboard/admin/Calendario'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/precios",
    element: <Precios />,
  },
  {
    path: "/formacion",
    element: <Formacion />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "/dashboardAdmin",
    element: <DashboardAdmin/>
  },
    {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NoMatch />,
  },
  {
    path: "/dashboardAdmin",
    element: <DashboardAdmin />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)