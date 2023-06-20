import MainLayout from "../layout/MainLayout";
import bellumLogo from '../assets/Logo.png'

const Precios = () => {

    function enviarDiscord() {
        window.open("https://discord.gg/MW6F2Ajecq", '_blank');
    }

    return (
        <MainLayout>
            <div className="bodyBellumDos">
                <div className="titulo" style={{marginTop: "5rem"}}>
                    <div className="tituloIzquierda">
                        <h1 style={{ marginBlock: "2rem" }}>Nuestros Precios</h1>
                        <h4 id="h4">En <a href="https://bellumcoaching.com/" target="_blank" style={{ color: "#00B3FF" }}>Bellum Coaching</a> nos enfocamos en brindar un coaching personalizado y efectivo para ayudar a los jugadores de League of Legends a alcanzar su máximo potencial. Ofrecemos paquetes de coaching adaptados a las necesidades individuales de cada jugador, dúo o equipo, los cuales incluyen una clase inicial para crear un plan personalizado de coaching. <a href="https://bellumcoaching.com/contacto/" target="_blank" style={{ color: "#00B3FF" }}>Contáctanos</a> para mejorar tu juego en League of Legends.</h4>
                    </div>
                    <div className="tituloDerechaP" style={{marginLeft: "3rem"}}>
                        <img src={bellumLogo} alt="Bellum Logo" style={{width: "20rem"}} />
                    </div>
                </div>
            </div>

            <div className="bodyBellumDos">
                <div className="comoPagar">
                    <div className="comoPagarIzquierda">
                        <iframe src="https://discord.com/widget?id=1090294279240421538&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
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
            <div className="precios">
            <h2 style={{ color: "var(--color-principal-dark)" }} id="clasesIndividuales">Nuestros Precios Para Clases Individuales</h2>
            <div className="tarjetasPrecios" style={{ marginTop: "2rem" }}>
                <div className="tarjetaPrecios" id="mejorParaEmpezar">
                    <h4>Pack 1 Clase</h4>
                    <h6>7€</h6>
                    <button className="enviarAPreciosMain" style={{ width: "75%", borderRadius: "0.5rem" }} onClick={enviarDiscord}>Pedir Ahora</button>
                </div>
                <div className="tarjetaPrecios">
                    <h4>Pack 3 Clases</h4>
                    <h6>20€</h6>
                    <button className="enviarAPreciosMain" style={{ width: "75%", borderRadius: "0.5rem" }} onClick={enviarDiscord}>Pedir Ahora</button>
                </div>
                <div className="tarjetaPrecios" id="masVendido">
                    <h4>Pack 5 Clases</h4>
                    <h6>33€</h6>
                    <button className="enviarAPreciosMain" style={{ width: "75%", borderRadius: "0.5rem" }} onClick={enviarDiscord}>Pedir Ahora</button>
                </div>
                <div className="tarjetaPrecios">
                    <h4>Pack 10 Clases</h4>
                    <h6>65€</h6>
                    <button className="enviarAPreciosMain" style={{ width: "75%", borderRadius: "0.5rem" }} onClick={enviarDiscord}>Pedir Ahora</button>
                </div>
                <div className="tarjetaPrecios">
                    <h4>Pack 15 Clases</h4>
                    <h6>95€</h6>
                    <button className="enviarAPreciosMain" style={{ width: "75%", borderRadius: "0.5rem" }} onClick={enviarDiscord}>Pedir Ahora</button>
                </div>
                <div className="tarjetaPrecios" id="masRentable">
                    <h4>Pack 20 Clases</h4>
                    <h6>120€</h6>
                    <button className="enviarAPreciosMain" style={{ width: "75%", borderRadius: "0.5rem" }} onClick={enviarDiscord}>Pedir Ahora</button>
                </div>
            </div>
            <h2 style={{ color: "var(--color-principal-dark)", marginTop: "4rem" }} id="clasesDuales">Nuestros Precios Para Clases Duales</h2>
            <div className="tarjetasPrecios" style={{ marginTop: "2rem" }}>
                <div className="tarjetaPrecios" id="mejorParaEmpezar">
                    <h4>Pack 1 Clase</h4>
                    <h6>13€</h6>
                    <button className="enviarAPreciosMain" style={{ width: "75%", borderRadius: "0.5rem" }} onClick={enviarDiscord}>Pedir Ahora</button>
                </div>
                <div className="tarjetaPrecios">
                    <h4>Pack 3 Clases</h4>
                    <h6>38€</h6>
                    <button className="enviarAPreciosMain" style={{ width: "75%", borderRadius: "0.5rem" }} onClick={enviarDiscord}>Pedir Ahora</button>
                </div>
                <div className="tarjetaPrecios" id="masVendido">
                    <h4>Pack 5 Clases</h4>
                    <h6>63€</h6>
                    <button className="enviarAPreciosMain" style={{ width: "75%", borderRadius: "0.5rem" }} onClick={enviarDiscord}>Pedir Ahora</button>
                </div>
                <div className="tarjetaPrecios">
                    <h4>Pack 10 Clases</h4>
                    <h6>122€</h6>
                    <button className="enviarAPreciosMain" style={{ width: "75%", borderRadius: "0.5rem" }} onClick={enviarDiscord}>Pedir Ahora</button>
                </div>
                <div className="tarjetaPrecios">
                    <h4>Pack 15 Clases</h4>
                    <h6>180€</h6>
                    <button className="enviarAPreciosMain" style={{ width: "75%", borderRadius: "0.5rem" }} onClick={enviarDiscord}>Pedir Ahora</button>
                </div>
                <div className="tarjetaPrecios" id="masRentable">
                    <h4>Pack 20 Clases</h4>
                    <h6>220€</h6>
                    <button className="enviarAPreciosMain" style={{ width: "75%", borderRadius: "0.5rem" }} onClick={enviarDiscord}>Pedir Ahora</button>
                </div>
            </div>
            <h2 style={{ color: "var(--color-principal-dark)", marginTop: "4rem" }} id="clasesGrupales">Nuestros Precios Para Clases Grupales</h2>
            <div className="tarjetasPrecios" style={{ marginTop: "2rem" }}>
                <div className="tarjetaPrecios" id="mejorParaEmpezar">
                    <h4>Pack 1 Clase</h4>
                    <h6>6€/persona</h6>
                    <button className="enviarAPreciosMain" style={{ width: "75%", borderRadius: "0.5rem" }} onClick={enviarDiscord}>Pedir Ahora</button>
                </div>
                <div className="tarjetaPrecios">
                    <h4>Pack 3 Clases</h4>
                    <h6>17.33€/persona</h6>
                    <button className="enviarAPreciosMain" style={{ width: "75%", borderRadius: "0.5rem" }} onClick={enviarDiscord}>Pedir Ahora</button>
                </div>
                <div className="tarjetaPrecios" id="masVendido">
                    <h4>Pack 5 Clases</h4>
                    <h6>28€/persona</h6>
                    <button className="enviarAPreciosMain" style={{ width: "75%", borderRadius: "0.5rem" }} onClick={enviarDiscord}>Pedir Ahora</button>
                </div>
                <div className="tarjetaPrecios">
                    <h4>Pack 10 Clases</h4>
                    <h6>53.34€/persona</h6>
                    <button className="enviarAPreciosMain" style={{ width: "75%", borderRadius: "0.5rem" }} onClick={enviarDiscord}>Pedir Ahora</button>
                </div>
                <div className="tarjetaPrecios">
                    <h4>Pack 15 Clases</h4>
                    <h6>76.67€/persona</h6>
                    <button className="enviarAPreciosMain" style={{ width: "75%", borderRadius: "0.5rem" }} onClick={enviarDiscord}>Pedir Ahora</button>
                </div>
                <div className="tarjetaPrecios" id="masRentable">
                    <h4>Pack 20 Clases</h4>
                    <h6>90€/persona</h6>
                    <button className="enviarAPreciosMain" style={{ width: "75%", borderRadius: "0.5rem" }} onClick={enviarDiscord}>Pedir Ahora</button>
                </div>
            </div>
        </div>
            </div>
        </MainLayout >
    );
}

export default Precios