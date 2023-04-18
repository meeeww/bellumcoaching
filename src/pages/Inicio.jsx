import MainLayout from "../layout/MainLayout";
import bellumVideo from '../assets/VideoBellum.mp4'
import bellumVideoLight from '../assets/VideoBellumLight.mp4'
import bellumLogo from '../assets/Logo.png'

const Inicio = () => (
    <MainLayout>
        <div className="bodyBellum">
            <div className="titulo">
                <div className="tituloIzquierda">
                    <h1>Bienvenidos a Bellum Coaching</h1>
                    <h4 id="h4">¿Quieres mejorar tu juego en League of Legends? En nuestro equipo de especialistas en
                        coaching
                        estamos aquí para ayudarte a alcanzar tus metas. Ofrecemos programas personalizados y guías de
                        estrategia para que puedas dar el siguiente paso en tu juego. ¡No esperes más para mejorar tu nivel
                        con nuestro Coaching para League of Legends especialiado!</h4>
                </div>
                <div className="tituloDerecha">
                    <img src={bellumLogo} alt="Bellum Logo" />
                </div>
            </div>

            <div className="subtitulo">
                <div className="subtituloIzquierda">
                    <video src={bellumVideo} alt="Bellum Video" autoPlay loop muted="muted" controlsList="nodownload" className="videoDark"></video>
                    <video src={bellumVideoLight} alt="Bellum Video" autoPlay loop muted="muted" controlsList="nodownload" className="videoLight" style={{ display: "none" }}></video>
                </div>
                <div className="subtituloDerecha">
                    <h2>Somos Bellum</h2>
                    <h4 id="h4">¿Quieres mejorar tus habilidades y estrategias en el campo de juego? En nuestro compromiso
                        por
                        ayudarte a alcanzar tus metas en el juego, ofrecemos servicios personalizados para adaptarnos a tus
                        necesidades. Nuestros entrenadores altamente capacitados te guiarán para mejorar tus habilidades,
                        técnicas y trabajo en equipo. Ya seas principiante o jugador experimentado, nuestro coaching para
                        League of Legends totalmente personalizado se ajusta a tus necesidades para ayudarte a alcanzar tu
                        máximo potencial. ¡<a href="https://bellumcoaching.com/contacto/" target="_blank" style={{ color: "#00B3FF" }}>Contáctanos</a> hoy mismo para comenzar a lograr tus objetivos en la grieta!</h4>
                    <button className="botonContacta">CONTÁCTANOS</button>
                </div>
            </div>

            <div className="escogerCoaching">
                <h2>Por Qué Escoger Nuestro Coaching</h2>
                <div className="tarjetasCoaching">
                    <div className="tarjetaCoaching">
                        <div className="tituloTarjetaCoaching">
                            <h2>Personalización e intransferible</h2>
                        </div>
                        <div className="subtituloTarjetaCoaching">
                            <p>En nuestro equipo, ofrecemos entrenamiento personalizado para que puedas mejorar en tu juego.
                                Adaptamos nuestro enfoque a tus necesidades específicas para que nuestros entrenadores se
                                centren en las áreas que requieren mejora. Ya seas principiante o experimentado, nuestro enfoque
                                personalizado te ayudará a alcanzar tus metas en el juego. Contáctanos hoy para comenzar a
                                mejorar tus habilidades.</p>
                        </div>


                    </div>
                    <div className="tarjetaCoaching">
                        <div className="tituloTarjetaCoaching">
                            <h2>Apoyo y Seguimiento</h2>
                        </div>
                        <div className="subtituloTarjetaCoaching">
                            <p>En "Bellum Coaching" no solo ofrecemos entrenamiento para mejorar tus habilidades en el juego,
                                sino que también te brindamos apoyo y seguimiento continuo para que puedas mantener tu progreso
                                a largo plazo. Nuestro objetivo es ayudarte a mejorar tu rendimiento y alcanzar tus metas. Ya
                                seas principiante o experimentado, nuestro equipo está aquí para apoyarte en cada paso del
                                camino. Contáctanos hoy mismo para obtener más información.</p>
                        </div>
                    </div>
                    <div className="tarjetaCoaching">
                        <div className="tituloTarjetaCoaching">
                            <h2>Multitud de Servicios</h2>
                        </div>
                        <div className="subtituloTarjetaCoaching">
                            <p>En "Bellum Coaching" nos enfocamos en ayudar a todos los jugadores a mejorar sus habilidades en
                                el juego. Ofrecemos servicios para jugadores de todos los niveles, desde principiantes hasta
                                avanzados, y nos enfocamos en mejorar habilidades individuales como el posicionamiento en el
                                mapa, la toma de decisiones y la estrategia del juego. Ya seas nuevo en el juego o un jugador
                                experimentado, nuestro equipo está listo para ayudarte a alcanzar tus metas en el juego.
                                Contáctanos hoy mismo para comenzar a mejorar.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="clientesPiensan">
                <h2>Lo Que Nuestros Clientes Piensan</h2>
                <div className="tarjetaTrustpilot">
                    <p className="paragraphTrustpilot">Desde Bellum Coaching creemos que lo más importante es estar abiertos a críticas constructivas para poder mejorar nuestro servicio.</p>
                    <div className="trustpilot-widget" data-locale="es-ES" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="6436c8f8337ac0fb935bbea5" data-style-height="24px" data-style-width="100%" data-theme="light" data-min-review-count="10" data-style-alignment="center">
                        <a href="https://es.trustpilot.com/review/www.bellumcoaching.com" target="_blank" rel="noopener">Trustpilot</a>
                    </div>
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

            <div className="decision">
                <h2>¿Aún no te has decidido?</h2>
                <h3>Aquí te damos 6 razones más sobre nuestro coaching para terminar de convencerte</h3>
                <div className="tarjetasDecision">
                    <div className="tarjetaDecision">
                        <h4 id="h4">Experiencia, conocimiento y profesionalidad.</h4>
                        <p className="paragraphDecision">Contamos con un equipo de entrenadores altamente capacitados y actualizados en las últimas tendencias y estrategias del juego. Nuestro objetivo es brindarte un servicio de coaching excepcional, y para lograrlo nos aseguramos de estar siempre a la vanguardia del juego. Ya sea que necesites mejorar tu juego individual o trabajar en equipo, nuestro equipo de entrenadores está listo para ayudarte. Contáctanos hoy mismo para obtener más información.</p>
                    </div>
                    <div className="tarjetaDecision">
                        <h4 id="h4">Formalidad, compromiso y responsabilidad.</h4>
                        <p className="paragraphDecision">Estamos comprometidos con brindar un servicio de alta calidad en cada sesión de coaching. Nuestro objetivo es ayudar a nuestros clientes a alcanzar su máximo potencial con profesionalismo y dedicación. Nos aseguramos de que cada sesión sea personalizada y adaptada a las necesidades de cada jugador. Si buscas mejorar tus habilidades y estrategias en el juego, nuestro equipo de entrenadores está aquí para ayudarte.</p>
                    </div>
                    <div className="tarjetaDecision">
                        <h4 id="h4">Empatía, cercanía y amabilidad.</h4>
                        <p className="paragraphDecision">Establecemos relaciones duraderas con nuestros clientes y brindamos apoyo continuo. Escuchamos sus inquietudes y respondemos a sus preguntas para asegurarnos de que estén completamente satisfechos con nuestros servicios. Si estás buscando un equipo de entrenadores dedicados a ayudarte a mejorar tus habilidades y estrategias en el juego, no dudes en contactarnos. Estamos aquí para ayudarte a alcanzar tus metas.</p>
                    </div>
                    <div className="tarjetaDecision">
                        <h4 id="h4">Retroalimentación constante.</h4>
                        <p className="paragraphDecision">Brindamos retroalimentación constante y constructiva a nuestros clientes durante las sesiones de coaching. Identificamos sus fortalezas y debilidades específicas y los ayudamos a mejorar en esas áreas. Si estás buscando un equipo de entrenadores dedicados a ayudarte a mejorar tus habilidades y estrategias en el juego, no dudes en contactarnos. Estamos aquí para ayudarte a alcanzar tus metas.</p>
                    </div>
                    <div className="tarjetaDecision">
                        <h4 id="h4">Enfoque en el progreso a largo plazo.</h4>
                        <p className="paragraphDecision">Nos enfocamos en ayudar a nuestros clientes a alcanzar objetivos a largo plazo en el juego. Ofrecemos entrenamiento constante y seguimiento para mejorar continuamente sus habilidades y estrategias. No ofrecemos soluciones rápidas a problemas específicos, sino que nos dedicamos a mejorar de manera constante. Si estás buscando un servicio de coaching personalizado, ¡contáctanos hoy mismo!</p>
                    </div>
                    <div className="tarjetaDecision">
                        <h4 id="h4">Adaptación individual para cada cliente.</h4>
                        <p className="paragraphDecision">Nos centramos en brindar servicios de coaching personalizados para satisfacer las necesidades únicas de cada cliente. Trabajamos en estrecha colaboración con nuestros clientes para identificar sus fortalezas y debilidades individuales y proporcionar un plan de coaching adaptado a sus objetivos y habilidades específicas. ¡Nuestro objetivo es ayudar a nuestros clientes a alcanzar el éxito a largo plazo!</p>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
);

export default Inicio