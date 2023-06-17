import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"
import bellumLogo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import toggleClaro from '../scripts/modoClaro.js'
import bellumVideo from '../assets/VideoBellum.mp4'
import bellumVideoLight from '../assets/VideoBellumLight.mp4'



const Header = ({ quePagina }) => {
    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? "#00B3FF" : ""
        }
    }

    return (
        <div>
            <header>
                <div className="headerIzquierda">
                    <NavLink to="/"><img src={bellumLogo} alt="Bellum Logo" /></NavLink>
                </div>
                <div className="headerCentro">
                    <NavLink to="/" className="textoHeader" style={navLinkStyles}>Inicio</NavLink>
                    <NavLink to="/precios" className="textoHeader" style={navLinkStyles}>Precios</NavLink>
                    <NavLink to="/contacto" className="textoHeader" style={navLinkStyles}>Contacto</NavLink>
                </div>
                <div className="headerDerecha">
                    <Link to="https://www.discord.gg/MW6F2Ajecq"><i className="fa-brands fa-discord"></i></Link>
                    <Link to="https://www.twitter.com/BellumCoaching"><i className="fa-brands fa-twitter"></i></Link>
                    <Link to="https://www.instagram.com/bellumcoaching/"><i className="fa-brands fa-instagram"></i></Link>
                </div>
            </header>
        </div>
    );
}

export default Header