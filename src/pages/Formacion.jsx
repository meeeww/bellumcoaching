import MainLayout from "../layout/MainLayout";
import bellumLogo from '../assets/Logo.png'

const Precios = () => {

    function enviarDiscord() {
        window.open("https://discord.gg/MW6F2Ajecq", '_blank');
    }

    return (
        <MainLayout>
            <div className="bodyBellumDos">
                <div className="titulo" style={{ marginTop: "5rem" }}>
                    <div className="tituloIzquierda">
                        <h1 style={{ marginBlock: "2rem" }}>Nuestra Formación</h1>
                        <h4 id="h4">El programa de formación de coaches de <a href="https://bellumcoaching.com/" target="_blank" style={{ color: "#00B3FF" }}>Bellum Coaching</a> se enfoca en brindar una formación integral en los aspectos clave del juego, con énfasis en el dominio del macrograme, el entendimiento del mapa, el análisis de partidas y el drafteo. A través de nuestras clases personalizadas y la guía de nuestros entrenadores expertos, te ayudaremos a alcanzar un nivel superior en tus habilidades como coach de League of Legends.</h4>
                    </div>
                    <div className="tituloDerechaP" style={{ marginLeft: "3rem" }}>
                        <img src={bellumLogo} alt="Bellum Logo" style={{ width: "20rem" }} />
                    </div>
                </div>
            </div>

            <div className="bodyBellumDos">
                <div className="comoPagar">
                    <div className="comoPagarDerecha">
                        <h2 style={{ marginBlock: "1rem" }}><i className="fa-solid fa-brain mr-4"></i>Dominio del Macrogame</h2>
                        <h4 id="h4">El macrogame es una parte fundamental en League of Legends, y nuestro programa de
                            coaching se enfoca en ofrecerte los conocimientos y las estrategias necesarias para
                            dominarlo. Aprenderás a tomar decisiones estratégicas a nivel global, optimizar el uso de
                            recursos y coordinar a tu equipo para obtener ventajas en el mapa. Nuestros entrenadores,
                            con experiencia en rangos altos y profesionales, compartirán contigo técnicas avanzadas y
                            te guiarán en la toma de decisiones estratégicas efectivas.
                        </h4>
                        <h2 style={{ marginBlock: "1rem", marginTop: "4rem" }}><i className="fa-solid fa-map mr-4"></i>Entendimiento del Mapa</h2>
                        <h4 id="h4">El entendimiento del mapa es esencial para identificar oportunidades, anticiparse a jugadas
                            enemigas y optimizar tu enfoque táctico.Con nuestro programa, profundizarás en el análisis
                            del mapa y aprenderás a leerlo de manera efectiva. Te enseñaremos a identificar los
                            momentos oportunos para realizar objetivos, controlar la visión y tomar decisiones tácticas
                            basadas en la información disponible en el mapa.
                        </h4>
                        <h2 style={{ marginBlock: "1rem", marginTop: "4rem" }}><i className="fa-solid fa-magnifying-glass-chart mr-4"></i>Análisis de Partidas</h2>
                        <h4 id="h4">El análisis de partidas es una herramienta invaluable para el crecimiento y el desarrollo
                            como coach. En Bellum Coaching, te proporcionaremos las técnicas y las habilidades
                            necesarias para analizar partidas de manera efectiva. Aprenderás a identificar errores,
                            puntos fuertes y débiles, y a extraer lecciones clave de cada partida.
                        </h4>
                        <h2 style={{ marginBlock: "1rem", marginTop: "4rem" }}><i className="fa-solid fa-chalkboard-user mr-4"></i>Metodología de Enseñanza</h2>
                        <h4 id="h4">Nuestro programa de coaching se basa en una metodología teórico-práctica y
                            personalizada. A través de clases individuales y/o en grupo, tendrás la oportunidad de
                            interactuar con nuestros entrenadores expertos y recibir retroalimentación directa sobre tu
                            desempeño. Los ejercicios prácticos y los escenarios simulados te permitirán aplicar los
                            conceptos aprendidos y fortalecer tus habilidades. Además, tendrás acceso a recursos
                            educativos, materiales de apoyo y herramientas de análisis para mejorar tu rendimiento y
                            progresar de manera constante.</h4>
                        <h2 style={{ marginBlock: "1rem", marginTop: "4rem" }}><i className="fa-solid fa-square-poll-vertical mr-4"></i>Resultados y Oportunidades de Crecimiento</h2>
                        <h4 id="h4">Nuestro objetivo es que, a través de nuestro programa de coaching, adquieras las
                            habilidades y los conocimientos necesarios para destacarte como coach en League of
                            Legends. Te proporcionaremos un ambiente de aprendizaje enriquecedor, con la posibilidad
                            de recibir una atención personalizada y adaptada a tus necesidades específicas. Además, si
                            demuestras un desarrollo significativo como coach, tendrás la oportunidad de unirte a
                            nuestro equipo de entrenadores y crecer profesionalmente dentro de Bellum Coaching.</h4>
                    </div>
                </div>
                <div className="comoPagar flex-col md:flex-row">
                    <div className="comoPagarIzquierda">
                        <iframe className="mr-0 sm:mr-16" src="https://discord.com/widget?id=1090294279240421538&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    </div>
                    <div className="comoPagarDerecha">
                        <h2 style={{ marginBlock: "2rem", marginTop: "4rem" }}>¿Qué tipos de pagos hay?</h2>
                        <h4 id="h4">En <a href="https://bellumcoaching.com/" target="_blank" style={{ color: "#00B3FF" }}>Bellum Coaching</a>, entendemos que cada individuo tiene necesidades y preferencias
                            diferentes al seleccionar su plan de formación como coach en League of Legends. Es por
                            eso que ofrecemos dos opciones de pago flexibles: el pago mensual y el pago completo.
                        </h4>
                        <h2 style={{ marginBlock: "2rem" }}>¿Cómo pagar?</h2>
                        <h4 id="h4">Para poder realizar tu compra con nosotros deberá de entrar en nuestro servidor de <a href="https://discord.gg/MW6F2Ajecq" target="_blank" style={{ color: "#00B3FF" }}>Discord</a> y contactar con bellumcoaching</h4>
                        <h2 style={{ marginBlock: "2rem" }}>¿Por qué Discord?</h2>
                        <h4 id="h4">Todo contacto con nuestros alumnos concluye en nuestro servidor de <a href="https://discord.gg/MW6F2Ajecq" target="_blank" style={{ color: "#00B3FF" }}>Discord</a>, debido a que nos permite una mayor cercanía y tiempos de respuesta más corto tanto para preguntas generales mediante nuestro servidor como en mensajes privados entre el coach y el alumno.</h4>
                    </div>
                </div>
            </div>

            <div className="mainBodyBellum2 mainBodyBellum">

            </div>

            <div className="bodyBellumDos">
                <div className="precios">
                    <h2 style={{ color: "var(--color-principal-dark)" }} id="clasesIndividuales">Nuestros Precios Para La Formación</h2>
                    <div className="tarjetasPrecios" style={{ marginTop: "2rem" }}>
                        <div className="tarjetaPrecios">
                            <h4>Pago Mensual</h4>
                            <h6>35€/mes</h6>
                            <button className="enviarAPreciosMain" style={{ width: "75%", borderRadius: "0.5rem" }} onClick={enviarDiscord}>Pedir Ahora</button>
                        </div>
                        <div className="tarjetaPrecios" id="masRentable">
                            <h4>Pago Completo</h4>
                            <h6>60€</h6>
                            <button className="enviarAPreciosMain" style={{ width: "75%", borderRadius: "0.5rem" }} onClick={enviarDiscord}>Pedir Ahora</button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout >
    );
}

export default Precios