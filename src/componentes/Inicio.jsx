
import bellumLogo from '../assets/Logo.png'

const Inicio = () => (
    <div>
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
                <img src={bellumLogo} alt="Bellum Logo" />
            </div>
            <div className="subtituloDerecha">
                <h2>Somos Bellum</h2>
                <h4 id="h4">¿Quieres mejorar tus habilidades y estrategias en el campo de juego? En nuestro compromiso
                    por
                    ayudarte a alcanzar tus metas en el juego, ofrecemos servicios personalizados para adaptarnos a tus
                    necesidades. Nuestros entrenadores altamente capacitados te guiarán para mejorar tus habilidades,
                    técnicas y trabajo en equipo. Ya seas principiante o jugador experimentado, nuestro coaching para
                    League of Legends totalmente personalizado se ajusta a tus necesidades para ayudarte a alcanzar tu
                    máximo potencial. ¡Contáctanos hoy mismo para comenzar a lograr tus objetivos en la grieta!</h4>
                    <button>CONTÁCTANOS</button>
            </div>
        </div>

        <div className="escogerCoaching">
            <h2>Por Qué Escoger Nuestro Coaching</h2>
            <div className="tarjetasCoaching">
                <div className="tarjetaCoaching">
                    <h2>Personalización</h2>
                    <p>En nuestro equipo, ofrecemos entrenamiento personalizado para que puedas mejorar en tu juego.
                        Adaptamos nuestro enfoque a tus necesidades específicas para que nuestros entrenadores se
                        centren en las áreas que requieren mejora. Ya seas principiante o experimentado, nuestro enfoque
                        personalizado te ayudará a alcanzar tus metas en el juego. Contáctanos hoy para comenzar a
                        mejorar tus habilidades.</p>
                </div>
                <div className="tarjetaCoaching">
                    <h2>Personalización</h2>
                    <p>En "Bellum Coaching" no solo ofrecemos entrenamiento para mejorar tus habilidades en el juego,
                        sino que también te brindamos apoyo y seguimiento continuo para que puedas mantener tu progreso
                        a largo plazo. Nuestro objetivo es ayudarte a mejorar tu rendimiento y alcanzar tus metas. Ya
                        seas principiante o experimentado, nuestro equipo está aquí para apoyarte en cada paso del
                        camino. Contáctanos hoy mismo para obtener más información.</p>
                </div>
                <div className="tarjetaCoaching">
                    <h2>Personalización</h2>
                    <p>En "Bellum Coaching" nos enfocamos en ayudar a todos los jugadores a mejorar sus habilidades en
                        el juego. Ofrecemos servicios para jugadores de todos los niveles, desde principiantes hasta
                        avanzados, y nos enfocamos en mejorar habilidades individuales como el posicionamiento en el
                        mapa, la toma de decisiones y la estrategia del juego. Ya seas nuevo en el juego o un jugador
                        experimentado, nuestro equipo está listo para ayudarte a alcanzar tus metas en el juego.
                        Contáctanos hoy mismo para comenzar a mejorar.</p>
                </div>
            </div>
        </div>

        <div className="clientesPiensan">
            <h2>Lo Que Nuestros Clientes Piensan</h2>
        </div>

        <div className="precios">
            <h2>Nuestros Precios</h2>
        </div>

        <div className="decision">
            <h2>¿Aún no te has decidido?</h2>
            <h3>Aquí te damos 6 razones más sobre nuestro coaching para terminar de convencerte</h3>
            <div className="tarjetasDecision">
                <div className="tarjetaDecision">
                    <h4 id="h4">Experiencia y conocimiento</h4>
                    <p>Contamos</p>
                </div>
            </div>
        </div>
    </div>
);

export default Inicio