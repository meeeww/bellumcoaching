import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './componentes/Header'
import Inicio from './componentes/Inicio'
import Footer from './componentes/Footer'
import './estilos/Inicio.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Inicio />
    <Footer />
  </React.StrictMode>,
)