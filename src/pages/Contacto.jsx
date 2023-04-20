import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom"
import MainLayout from "../layout/MainLayout";
import bellumVideo from '../assets/VideoBellum.mp4'
import bellumVideoLight from '../assets/VideoBellumLight.mp4'
import bellumLogo from '../assets/Logo.png'

const Contacto = () => {

    const nombrePagina = "Contacto"

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

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
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="juntarContacto">
                                <input type="text" placeholder="Nombre" name="user_name"></input>
                                <input type="text" placeholder="Apellido"></input>
                            </div>
                            <div className="juntarContacto">
                                <input type="text" placeholder="Correo Electrónico" name="user_email"></input>
                            </div>
                            <div className="juntarContacto">
                                <input type="text" placeholder="Asunto"></input>
                            </div>
                            <div className="juntarContacto">
                                <input type="text" placeholder="Tu Mensaje" className="mensajeContacto" name="message"></input>
                            </div>
                            <div className="juntarContacto">
                                <input type="submit" value="Submit"></input>
                            </div>



                        </form>
                    </div>
                </div>
            </div>
        </MainLayout >
    );
}

export default Contacto