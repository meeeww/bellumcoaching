import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './componentes/Header'
import Inicio from './pages/Inicio'
import Precios from './pages/Precios'
import Contacto from './pages/Contacto'
import NoMatch from './pages/NoMatch'
import Footer from './componentes/Footer'
import './estilos/Inicio.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

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
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "*",
    element: <NoMatch />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)