import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom"
import MainLayout from "../layout/MainLayout";
import bellumVideo from '../assets/VideoBellum.mp4'
import bellumVideoLight from '../assets/VideoBellumLight.mp4'
import bellumLogo from '../assets/Logo.png'
import Axios from 'axios'

const Contacto = () => {

    const nombrePagina = "Contacto"

    const [nombreContacto, setNombreContacto] = useState('')
    const [apellidoContacto, setApellidoContacto] = useState('')
    const [correoContacto, setCorreoContacto] = useState('')
    const [asuntoContacto, setAsuntoContacto] = useState('')
    const [mensajeContacto, setMensajeContacto] = useState('')

    const enviarMensajeContacto = (event) => {
        event.preventDefault();

        const headers = {
            'Content-Type': 'text/plain'
        };

        let baseURL = "https://bellumserver.netlify.app/.netlify/functions/api/enviarmensaje";

        let config = {
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' }
        };


        var data = { nombreContacto: nombreContacto, apellidoContacto: apellidoContacto, correoContacto: correoContacto, asuntoContacto: asuntoContacto, mensajeContacto: mensajeContacto };

        Axios.post(baseURL, data, config)
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res.data);
                return {
                    statusCode: 200,
                    body: JSON.stringify({ title: "this was a success" }),
                };
            })
        console.log(nombreContacto, apellidoContacto, correoContacto, asuntoContacto, mensajeContacto)
    }

    return (
        <MainLayout laPagina={nombrePagina}>
            <div className="bodyBellum">
                <div className="tituloContacto">
                    <div className="tituloIzquierdaContacto">
                        <h1>Contáctanos</h1>
                        <h4 id="h4">No dudes en comunicarte con nosotros. Simplemente completa el formulario de contacto aquí y nos aseguraremos de responder lo más rápido posible.</h4>
                        <h2>Envíanos Un Mensaje</h2>
                        <h4 id="h4">contacto@bellumcoaching.com</h4>
                        <h2>También Por Redes Sociales</h2>
                        <h4 id="h4">Utilizamos Twitter, Instagram y Discord. ¡No dudes en ponerte en contacto con nosotros por tu medio favorito!</h4>
                    </div>
                    <div className="tituloDerechaContacto">
                        <form>
                            <div className="juntarContacto">
                                <input type="text" placeholder="Nombre" onChange={(e) => { setNombreContacto(e.target.value) }}></input>
                                <input type="text" placeholder="Apellido" onChange={(e) => { setApellidoContacto(e.target.value) }}></input>
                            </div>
                            <div className="juntarContacto">
                                <input type="text" placeholder="Correo Electrónico" onChange={(e) => { setCorreoContacto(e.target.value) }}></input>
                            </div>
                            <div className="juntarContacto">
                                <input type="text" placeholder="Asunto" onChange={(e) => { setAsuntoContacto(e.target.value) }}></input>
                            </div>
                            <div className="juntarContacto">
                                <input type="text" placeholder="Tu Mensaje" className="mensajeContacto" onChange={(e) => { setMensajeContacto(e.target.value) }}></input>
                            </div>
                            <div className="juntarContacto">
                                <input type="submit" value="Submit" onClick={enviarMensajeContacto}></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout >
    );
}

export default Contacto