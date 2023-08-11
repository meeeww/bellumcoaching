import React from 'react'
import ReactDOM from 'react-dom/client'
import Inicio from './pages/Inicio'
import Precios from './pages/Precios'
import Formacion from './pages/Formacion'
import Contacto from './pages/Contacto'
import NoMatch from './pages/NoMatch'

import './estilos/Inicio.css'

import {
  createBrowserRouter,
  RouterProvider,
  Routes,
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
    path: "/formacion",
    element: <Formacion />,
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