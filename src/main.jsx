import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './componentes/Header'
import Inicio from './componentes/Inicio'
import Precios from './componentes/Precios'
import Contacto from './componentes/Contacto'
import Footer from './componentes/Footer'
import './estilos/Inicio.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <React.StrictMode><Header /><Inicio /><Footer /></React.StrictMode>,
  },
  {
    path: "precios",
    element: <React.StrictMode><Header /><Precios /><Footer /></React.StrictMode>,
  },
  {
    path: "contacto",
    element: <React.StrictMode><Header /><Contacto /><Footer /></React.StrictMode>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)