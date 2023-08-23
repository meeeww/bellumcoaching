import React from 'react'
import { NavLink } from "react-router-dom"
import bellumLogo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? "#00B3FF" : ""
        }
    }

    return (
        <div style={{position: "absolute", width: "100%"}}>
            <header>
                <div className="headerIzquierda">
                    <NavLink to="/"><img src={bellumLogo} alt="Bellum Logo" /></NavLink>
                </div>
                <div className="headerCentro">
                    <NavLink to="/" className="textoHeader" style={navLinkStyles}>Inicio</NavLink>
                    <NavLink to="/precios" className="textoHeader" style={navLinkStyles}>Precios</NavLink>
                    <NavLink to="/formacion" className="textoHeader" style={navLinkStyles}>Formación</NavLink>
                    <NavLink to="/contacto" className="textoHeader" style={navLinkStyles}>Contacto</NavLink>
                </div>
                <div className="headerDerecha">
                    <Link to="https://discord.gg/MW6F2Ajecq" target="_blank" aria-label="Discord"><i className="fa-brands fa-discord"></i></Link>
                    <Link to="https://twitter.com/BellumCoaching" target="_blank" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></Link>
                    <Link to="https://tiktok.com/@bellumcoaching" target="_blank" aria-label="TikTok"><i className="fa-brands fa-tiktok"></i></Link>
                    <Link to="https://instagram.com/bellumcoaching/" target="_blank" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></Link>
                </div>
            </header>
        </div>
    );
}

export default Header