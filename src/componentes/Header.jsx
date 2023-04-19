import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"
import bellumLogo from '../assets/Logo.png'
import toggleClaro from '../scripts/modoClaro.js'
import darVida from '../scripts/modoClaro.js'



const Header = ({ quePagina }) => {
    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? "#00B3FF" : ""
        }
    }

    useEffect(() => {
        let body = document.body;
        body.classList.add("light-mode");

        let h4s = document.querySelectorAll("[id='h4']");
        for (var i = 0; i < h4s.length; i++) {
            h4s[i].classList.add("light-mode");
        }

        let shapeFill = document.querySelectorAll(".shape-fill")
        for (var i = 0; i < shapeFill.length; i++) {
            shapeFill[i].classList.add("light-mode");
        }

        let textoHeader = document.querySelectorAll(".textoHeader")
        for (var i = 0; i < textoHeader.length; i++) {
            textoHeader[i].classList.add("light-mode-texto-inverso-header");
        }

        let copyrightFooter = document.querySelector(".copyrightFooter")
        copyrightFooter.classList.add("light-mode-inverso")

        let paragraphCopyright = document.querySelector(".paragraphCopyright")//
        paragraphCopyright.classList.add("light-mode-texto")

        let paragraphFooter = document.querySelector(".paragraphFooter")//
        paragraphFooter.classList.add("light-mode-texto-inverso")//

        let redesSociales = document.querySelector(".redesSociales")
        redesSociales.classList.add("light-mode-inverso")
        

        let paragraphTrustpilot, tarjetaCoaching, paragraphDecision
        //inicio
        if (quePagina == "Inicio") {
            

            paragraphTrustpilot = document.querySelector(".paragraphTrustpilot")//
            paragraphTrustpilot.classList.add("light-mode-texto-inverso")

            tarjetaCoaching = document.querySelectorAll(".tarjetaCoaching");
            for (var i = 0; i < tarjetaCoaching.length; i++) {
                tarjetaCoaching[i].classList.add("light-mode-bordes");
            }

            paragraphDecision = document.querySelectorAll(".paragraphDecision")
            for (var i = 0; i < paragraphDecision.length; i++) {
                paragraphDecision[i].classList.add("light-mode");
            }
        }

        if (localStorage.modoOscuro == "true") {
            document.getElementById("togglerModoOscuro").checked = false;
            body.classList.toggle("light-mode");
            copyrightFooter.classList.toggle("light-mode-inverso")
            paragraphCopyright.classList.toggle("light-mode-texto")
            paragraphFooter.classList.toggle("light-mode-texto-inverso")
            redesSociales.classList.toggle("light-mode-inverso")

            for (var i = 0; i < h4s.length; i++) {
                h4s[i].classList.toggle("light-mode");
            }

            for (var i = 0; i < shapeFill.length; i++) {
                shapeFill[i].classList.toggle("light-mode");
            }

            for (var i = 0; i < textoHeader.length; i++) {
                textoHeader[i].classList.toggle("light-mode-texto-inverso-header");
            }

            try {
                paragraphTrustpilot.classList.toggle("light-mode-texto-inverso")
                for (var i = 0; i < tarjetaCoaching.length; i++) {
                    tarjetaCoaching[i].classList.toggle("light-mode-bordes");
                }
                for (var i = 0; i < paragraphDecision.length; i++) {
                    paragraphDecision[i].classList.toggle("light-mode");
                }
            } catch {
                console.error("damn")
            }

        } else if (localStorage.modoOscuro == "false") {
            document.getElementById("togglerModoOscuro").checked = true;
        }

    })

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
                        <input type="checkbox" onClick={toggleClaro} id="togglerModoOscuro" />
                        <span className="slider round"></span>
                    </label>
                </div>
            </header>
        </div>
    );
}

export default Header