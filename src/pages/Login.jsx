import React, { useState, useEffect } from 'react'
import MainLayout from "../layout/MainLayout";
import Axios from 'axios'
import bellumLogo from '../assets/Logo.png'
import checkSession from '../scripts/sesionManager.js'

const Contacto = () => {

    useEffect(() => {
        checkSession()
    })

    const nombrePagina = "Login"

    const [nombreInicio, setNombreInicio] = useState('')
    const [contrasenaInicio, setContrasenaInicio] = useState('')

    const iniciarSesion = (event) => {
        event.preventDefault();

        var date;
        date = new Date();
        date = date.getUTCFullYear() + '-' +
        ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
        ('00' + date.getUTCDate()).slice(-2) + ' ';

        let agente = navigator.userAgent

        const headers = {
            'Content-Type': 'text/plain'
        };

        let baseURL = "https://bellumserver.netlify.app/.netlify/functions/api/login";

        let config = {
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' }
        };


        var data = { nombreInicio: nombreInicio, contrasenaInicio: contrasenaInicio, agente: agente, date: date };

        Axios.post(baseURL, data, config)
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res.data);
                localStorage.setItem("token", res.data)
                location.replace("http://localhost:5173/login")
                return {
                    statusCode: 200,
                    body: JSON.stringify({ title: "this was a success" }),
                };
            })

    }

    return (
        <div className="inicioSesionBellum">
            <div className="cajaInicioSesion">
                <img src={bellumLogo} alt="Bellum Logo" style={{ width: "10rem", height: "10rem" }} />
                <form style={{ paddingbottom: "5rem" }}>
                    <div className="juntarContacto">
                        <input type="text" placeholder="Usuario" onChange={(e) => { setNombreInicio(e.target.value) }} className="textLogin"></input>
                    </div>
                    <div className="juntarContacto">
                        <input type="password" placeholder="Contraseña" onChange={(e) => { setContrasenaInicio(e.target.value) }} className="textLogin"></input>
                    </div>
                    <div className="juntarContacto">
                        <input type="submit" value="Login" onClick={iniciarSesion} className="submitLogin"></input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contacto