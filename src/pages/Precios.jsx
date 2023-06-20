import { Link } from "react-router-dom"
import MainLayout from "../layout/MainLayout";
import bellumVideo from '../assets/VideoBellum.mp4'
import bellumVideoLight from '../assets/VideoBellumLight.mp4'
import bellumLogo from '../assets/Logo.png'
import Zed from "../assets/Zed.png"
import PreciosLista from "../componentes/Precios";

const Precios = () => {

    const nombrePagina = "Precios"

    return (
        <MainLayout laPagina={nombrePagina}>
            <div className="bodyBellumDos">
                <div className="titulo" style={{marginTop: "5rem"}}>
                    <div className="tituloIzquierda">
                        <h1 style={{ marginBlock: "2rem" }}>Nuestros Precios</h1>
                        <h4 id="h4">En <a href="https://bellumcoaching.com/" target="_blank" style={{ color: "#00B3FF" }}>Bellum Coaching</a> nos enfocamos en brindar un coaching personalizado y efectivo para ayudar a los jugadores de League of Legends a alcanzar su máximo potencial. Ofrecemos paquetes de coaching adaptados a las necesidades individuales de cada jugador, dúo o equipo, los cuales incluyen una clase inicial para crear un plan personalizado de coaching. <a href="https://bellumcoaching.com/contacto/" target="_blank" style={{ color: "#00B3FF" }}>Contáctanos</a> para mejorar tu juego en League of Legends.</h4>
                    </div>
                    <div className="tituloDerechaP" style={{marginLeft: "3rem"}}>
                        <img src={Zed} alt="Bellum Logo" style={{width: "20rem"}} />
                    </div>
                </div>
            </div>

            <div className="bodyBellumDos">
                <div className="comoPagar">
                    <div className="comoPagarIzquierda">
                        <iframe src="https://discord.com/widget?id=1090294279240421538&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    </div>
                    <div className="comoPagarDerecha">
                        <h2 style={{ marginBlock: "2rem" }}>¿Cómo pagar?</h2>
                        <h4 id="h4">Para poder realizar tu compra con nosotros deberá de entrar en nuestro servidor de <a href="https://discord.gg/MW6F2Ajecq" target="_blank" style={{ color: "#00B3FF" }}>Discord</a> y contactar con Bellum Coaching#<a style={{ color: "#00B3FF" }}>2535</a></h4>
                        <h2 style={{ marginBlock: "2rem" , marginTop: "4rem"}}>¿Por qué Discord?</h2>
                        <h4 id="h4">Todo contacto con nuestros alumnos concluye en nuestro servidor de <a href="https://discord.gg/MW6F2Ajecq" target="_blank" style={{ color: "#00B3FF" }}>Discord</a>, debido a que nos permite una mayor cercanía y tiempos de respuesta más corto tanto para preguntas generales mediante nuestro servidor como en mensajes privados entre el coach y el alumno.</h4>
                    </div>
                </div>
            </div>

            <div className="mainBodyBellum2 mainBodyBellum">

            </div>

            <div className="bodyBellumDos">
                <PreciosLista />
            </div>
        </MainLayout >
    );
}

export default Precios