import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import bellumLogo from '../assets/Logo.png'
import checkSession from '../scripts/sesionManager.js'

import md5 from 'md5'

import llamarPopUs from "../scripts/llamarPopUp"
import PopUp from "../modals/PopUp/Alert"

const Contacto = () => {

    const [tipoAlerta, setTipoAlerta] = useState(2)
    const [mensajeAlerta, setMensajeAlerta] = useState("")

    const rand = () => {
        return Math.random().toString(36).substr(2);
    };

    const token = () => {
        return rand() + rand() + rand() + rand() + rand() + rand() + rand() + rand() + rand() + rand() + rand();
    };

    useEffect(() => {
        checkSession()
    }, [])

    const [nombreInicio, setNombreInicio] = useState('')
    const [contrasenaInicio, setContrasenaInicio] = useState('')

    const iniciarSesion = (event) => {
        event.preventDefault();
        setMensajeAlerta("Por favor espere")
        setTipoAlerta(2)
        llamarPopUs()

        var date;
        date = new Date();
        date = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ';

        let agente = navigator.userAgent

        let baseURL = "https://bellumserver.netlify.app/.netlify/functions/api/login";

        let config = {
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' }
        };

        const encriptarPass = () => {
            return new Promise((resolve) => {
                resolve(md5(contrasenaInicio))
            })
        }

        encriptarPass().then(
            (datos) => {
                Axios.get("https://bellumserver.netlify.app/.netlify/functions/api/usuarios/nombre=" + nombreInicio).then(response => {
                    if (response.data[0]["contra"] == datos) {
                        var data = { nombreInicio: nombreInicio, contrasenaInicio: datos, agente: agente, date: date };
                        Axios.post(baseURL, data, config)
                            .then((res) => {
                                if (res.data == "error") {
                                    localStorage.setItem("token", res.data)
                                    setMensajeAlerta("Error")
                                    setTipoAlerta(3)
                                    llamarPopUs()
                                    return {
                                        statusCode: 200,
                                        body: JSON.stringify({ title: "failed" }),
                                    };
                                } else {
                                    localStorage.setItem("token", res.data)
                                    location.replace("http://localhost:5173/login")
                                    setMensajeAlerta("Sesión iniciada")
                                    setTipoAlerta(1)
                                    llamarPopUs()
                                    return {
                                        statusCode: 200,
                                        body: JSON.stringify({ title: "this was a success" }),
                                    };
                                }
                            })
                    } else {
                        setMensajeAlerta("Datos incorrectos")
                        setTipoAlerta(3)
                        llamarPopUs()
                    }
                })
            }
        )
    }

    return (
        <div className="inicioSesionBellum">
            <PopUp tipo={{ tipoAlerta, mensajeAlerta }} />
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