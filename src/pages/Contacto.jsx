import React, { useRef, useState } from 'react';
import MainLayout from "../layout/MainLayout";
import axios from 'axios'



import { Webhook, MessageBuilder } from 'discord-webhook-node';


const Contacto = () => {

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

        if (data["nombreContacto"] != "" && data["apellidoContacto"] != "" && data["correoContacto"] != "" && data["asuntoContacto"] != "" && data["mensajeContacto"] != "") {

        } else {
            toast.error('Datos insuficientes')
        }
    }

    return (
        <MainLayout>
            <Toaster richColors closeButton />
            <div className="bodyBellumDos">
                <div className="tituloContacto">
                    <div className="tituloIzquierdaContacto">
                        <h1>Contáctanos</h1>
                        <h4 id="h4">No dudes en comunicarte con nosotros. Simplemente completa el formulario de contacto aquí y nos aseguraremos de responder lo más rápido posible.</h4>
                        <h2>Envíanos Un Mensaje</h2>
                        <h4 id="h4">contacto@bellumcoaching.com</h4>
                        <h2>También Por Redes Sociales</h2>
                        <h4 id="h4">Utilizamos Discord, Twitter, TikTok e Instagram. ¡No dudes en ponerte en contacto con nosotros por tu medio favorito!</h4>
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
                                <button className="botonMainBodyBellum" style={{ width: "95%" }} onClick={enviarMensajeContacto}>ENVIAR MENSAJE <i className="fa-solid fa-angles-right" style={{ position: "relative", right: "-15px" }}></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="mainBodyBellum backgroundPoro" style={{ width: "100px", height: "110px", position: "absolute", left: "48%", top: "537px" }}></div>
        </MainLayout >
    );
}

export default Contacto