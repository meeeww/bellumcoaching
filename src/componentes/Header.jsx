import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"
import bellumLogo from '../assets/Logo.png'
import toggleClaro from '../scripts/modoClaro.js'



const Header = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? "#00B3FF" : ""
        }
    }

    return (
        <div>
            <div className="custom-shape-divider-top-1681756534">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <header>
                <div className="headerIzquierda">
                    <NavLink to="/"><img src={bellumLogo} alt="Bellum Logo" /></NavLink>
                </div>
                <div className="headerDerecha">
                    <NavLink to="/" className="textoHeader" style={navLinkStyles}>Inicio</NavLink>
                    <NavLink to="/precios" className="textoHeader" style={navLinkStyles}>Precios</NavLink>
                    <NavLink to="/contacto" className="textoHeader" style={navLinkStyles}>Contacto</NavLink>
                    <label className="switch">
                        <input type="checkbox" onClick={toggleClaro} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </header>
        </div>
    );
}

export default Header