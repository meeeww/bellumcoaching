import { Link } from "react-router-dom"
import MainLayout from "../layout/MainLayout";
import bellumVideo from '../assets/VideoBellum.mp4'
import bellumVideoLight from '../assets/VideoBellumLight.mp4'
import bellumLogo from '../assets/Logo.png'

const Precios = () => {

    const nombrePagina = "Precios"

    return (
        <MainLayout laPagina={nombrePagina}>
            <div className="bodyBellum">
                <div className="titulo">
                    <div className="tituloIzquierda">
                        <h1>Nuestros Precios</h1>
                        <h4 id="h4">En <a href="https://bellumcoaching.com/" target="_blank" style={{ color: "#00B3FF" }}>Bellum Coaching</a> nos enfocamos en brindar un coaching personalizado y efectivo para ayudar a los jugadores de League of Legends a alcanzar su máximo potencial. Ofrecemos paquetes de coaching adaptados a las necesidades individuales de cada jugador, los cuales incluyen una clase inicial para crear un plan personalizado de coaching. <a href="https://bellumcoaching.com/contacto/" target="_blank" style={{ color: "#00B3FF" }}>Contáctanos</a> para mejorar tu juego en League of Legends.</h4>
                    </div>
                    <div className="tituloDerecha">
                        <img src={bellumLogo} alt="Bellum Logo" />
                    </div>
                </div>

                <div className="comoPagar">
                    <div className="comoPagarIzquierda">
                        <iframe src="https://discord.com/widget?id=1090294279240421538&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    </div>
                    <div className="comoPagarDerecha">
                        <h2>¿Cómo pagar?</h2>
                        <h4 id="h4">Para poder realizar su compra con nosotros deberá de entrar en nuestro servidor de <a href="https://discord.gg/MW6F2Ajecq" target="_blank" style={{ color: "#00B3FF" }}>Discord</a> y contactar con Bellum Management#<a style={{ color: "#00B3FF" }}>2535</a></h4>
                        <h2>¿Por qué Discord?</h2>
                        <h4 id="h4">Todo contacto con nuestros alumnos concluye en nuestro servidor de <a href="https://discord.gg/MW6F2Ajecq" target="_blank" style={{ color: "#00B3FF" }}>Discord</a>, debido a que nos permite una mayor cercanía y tiempos de respuesta más corto tanto para preguntas generales mediante nuestro servidor como en mensajes privados entre el coach y el alumno.</h4>
                    </div>
                </div>

                <div className="precios">
                    <h2>Nuestros Precios Para Clases Individuales</h2>
                    <div className="tarjetasPrecios">
                        <div className="tarjetaPrecios" id="mejorParaEmpezar">
                            <h4>1 Clase</h4>
                            <h6>5€</h6>
                        </div>
                        <div className="tarjetaPrecios">
                            <h4>3 Clases</h4>
                            <h6>13€</h6>
                        </div>
                        <div className="tarjetaPrecios" id="masVendido">
                            <h4>5 Clases</h4>
                            <h6>20€</h6>
                        </div>
                        <div className="tarjetaPrecios">
                            <h4>10 Clases</h4>
                            <h6>40€</h6>
                        </div>
                        <div className="tarjetaPrecios" id="masRentable">
                            <h4>15 Clases</h4>
                            <h6>55€</h6>
                        </div>
                        <div className="tarjetaPrecios">
                            <h4>20 Clases</h4>
                            <h6>70€</h6>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout >
    );
}

export default Precios