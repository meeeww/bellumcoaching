import HeaderMain from "../componentes/HeaderMain"
import Footer from "../componentes/Footer"
import rayaBellum from "../assets/Raya.png"
import { useEffect } from "react";
import { useState } from "react";

import { Toaster, toast } from 'sonner'

const Inicio = () => {

    const [tituloActivo, setTituloActivo] = useState(0)

    const [tipoAlerta, setTipoAlerta] = useState(2)
    const [mensajeAlerta, setMensajeAlerta] = useState("")

    useEffect(() => {
        setTimeout(() => {
            switch (tituloActivo) {
                case 1:
                    setTituloActivo(2)
                    document.getElementById("primerTituloMain").innerHTML = "ENTRENA"
                    break
                case 2:
                    setTituloActivo(3)
                    document.getElementById("primerTituloMain").innerHTML = "MEJORA"
                    break
                case 3:
                    setTituloActivo(1)
                    document.getElementById("primerTituloMain").innerHTML = "GANA"
                    break
                default:
                    setTituloActivo(1)
            }
        }, 300);
    })

    function onClickear(categoria) {
        location.href = "/precios#" + categoria
    }

    function irAlDemo() {
        toast.error('Función no disponible')
    }

    return (
        <>
            <HeaderMain />
            <Toaster richColors closeButton />
            <div className="bodyBellum">
                <div className="mainBodyBellum">
                    <div className="textoMainBodyBellum">
                        <h5>10+ CLIENTES SATISFECHOS</h5>
                        <h1 id="primerTituloMain" style={{ marginTop: "5rem", marginBottom: "3rem" }}>ENTRENA</h1>
                        <h3 style={{ marginBlock: "1rem" }}>ACTUALIZADO CADA PARCHE</h3>
                        <h4 style={{ marginBlock: "1rem" }}>Mejora tus habilidades y monitorea junto a nosotros tu trayectoria con la ayuda de nuestras herramientas</h4>
                        <button className="botonMainBodyBellum" style={{ marginBlock: "4rem" }} onClick={() => { irAlDemo() }}>BELLUM ANALYZER DEMO <i className="fa-solid fa-angles-right" style={{ position: "relative", right: "-15px" }}></i></button>
                    </div>
                </div>
            </div>
            <div className="bodyBellumDos">
                <div className="titulo">
                    <div className="tituloIzquierda">
                        <h1 style={{ color: "var(--colorBlanco)", fontSize: "62px" }}>BELLUM COACHING</h1>
                        <img src={rayaBellum} style={{ marginBlock: "1rem" }}></img>
                    </div>
                    <div className="tituloDerecha">
                        <h4 id="h4" style={{ fontSize: "20px" }}>¿Quieres mejorar tu juego en League of Legends? Nuestro equipo de especialistas en
                            coaching
                            estamos aquí para ayudarte a alcanzar tus metas. Ofrecemos programas personalizados y guías de
                            estrategia para que puedas dar el siguiente paso en tu juego. No esperes más para mejorar tu nivel
                            con nuestro Coaching para League of Legends especialiado</h4>
                        <h4 id="h4" style={{ fontSize: "20px" }}>Disponemos de herramientas disponibles
                            para nuestros clientes en el panel de nuestra página web que permite realizar un seguimiento tanto por parte del
                            alumno como del entrenador. </h4>

                    </div>
                </div>
            </div>


            <div className="mainBodyBellum2 mainBodyBellum">

            </div>

            <div className="bodyBellumDos">
                <div className="titulo">
                    <div className="tituloIzquierda">
                        <h1 style={{ color: "var(--colorBlanco)", fontSize: "62px" }}>¿QUIÉNES SOMOS?</h1>
                        <img src={rayaBellum} style={{ marginBlock: "1rem" }}></img>
                    </div>
                    <div className="tituloDerecha">
                        <h4 id="h4" style={{ fontSize: "20px" }}>Somos un equipo de expertos en coaching y estamos comprometidos en ayudarte a alcanzar tus metas en el juego. Nuestros servicios de coaching personalizado te ayudarán a mejorar tu estrategia, habilidades técnicas y trabajo en equipo. Ya seas un jugador nuevo o un veterano, nuestro enfoque personalizado te ayudará a mejorar tus habilidades y a llevar tu juego al siguiente nivel.</h4>

                    </div>
                </div>
            </div>

            <div className="bodyBellumDos">
                <div className="tarjetasPrecioMain">
                    <div className="tarjetaPrecioIndividualMain">
                        <h1>Dual</h1>
                        <h3>Ideal para aquellos dúos que quieran mejorar como premade.</h3>
                        <div className="tarjetaPrecioIndividualPrecioMain tarjetaPrecioIndividualMainNoMedio">
                            <h3>Desde</h3>
                            <div className="desdeClaseMain">
                                <h2>5.50€</h2>
                                <h4>/persona</h4>
                            </div>
                        </div>
                        <button className="enviarAPreciosMain" onClick={() => { onClickear("clasesIndividuales") }}>Consultar precios</button>
                    </div>
                    <div className="tarjetaPrecioIndividualMain tarjetaPrecioIndividualMainMedio">
                        <h1>Individual</h1>
                        <h3>Enfocado hacia los jugadores tryhards que quieran subir su elo.</h3>
                        <div className="tarjetaPrecioIndividualPrecioMain">
                            <h3>Desde</h3>
                            <div className="desdeClaseMain">
                                <h2>6€</h2>
                                <h4>/clase</h4>
                            </div>
                        </div>
                        <button className="enviarAPreciosMain enviarAPreciosMainMedio" onClick={() => { onClickear("clasesIndividuales") }}>Consultar precios</button>
                    </div>
                    <div className="tarjetaPrecioIndividualMain">
                        <h1>Grupal</h1>
                        <h3>Indicado para los grupos de jugadores o equipos de eSports</h3>
                        <div className="tarjetaPrecioIndividualPrecioMain tarjetaPrecioIndividualMainNoMedio">
                            <h3>Desde</h3>
                            <div className="desdeClaseMain">
                                <h2>4.50€</h2>
                                <h4>/persona</h4>
                            </div>
                        </div>
                        <button className="enviarAPreciosMain" onClick={() => { onClickear("clasesIndividuales") }}>Consultar precios</button>
                    </div>
                </div>
            </div>

            <div className="bodyBellumDos">
                <div className="decision">
                    <h2>Razones para escogernos</h2>
                    <h3>¡Aquí te damos 6 razones sobre nuestro coaching para terminar de convencerte!</h3>
                    <div className="tarjetasDecision">
                        <div className="tarjetaDecision">
                            <div className="separadorTarjetasDecisionIcono">
                                <i className="fa-solid fa-book"></i>
                                <h4 id="h4">Experiencia</h4>
                            </div>
                            <p className="paragraphDecision">Contamos con un equipo de entrenadores altamente capacitados y actualizados en las últimas tendencias y estrategias del juego. Nuestro objetivo es brindarte un servicio de coaching excepcional, y para lograrlo nos aseguramos de estar siempre a la vanguardia del juego. Ya sea que necesites mejorar tu juego individual o trabajar en equipo, nuestro equipo de entrenadores está listo para ayudarte. Contáctanos hoy mismo para obtener más información.</p>
                        </div>
                        <div className="tarjetaDecision">
                            <div className="separadorTarjetasDecisionIcono">
                                <i className="fa-solid fa-graduation-cap"></i>
                                <h4 id="h4">Formalidad</h4>
                            </div>
                            <p className="paragraphDecision">Estamos comprometidos con brindar un servicio de alta calidad en cada sesión de coaching. Nuestro objetivo es ayudar a nuestros clientes a alcanzar su máximo potencial con profesionalismo y dedicación. Nos aseguramos de que cada sesión sea personalizada y adaptada a las necesidades de cada jugador. Si buscas mejorar tus habilidades y estrategias en el juego, nuestro equipo de entrenadores está aquí para ayudarte.</p>
                        </div>
                        <div className="tarjetaDecision">
                            <div className="separadorTarjetasDecisionIcono">
                                <i className="fa-solid fa-heart"></i>
                                <h4 id="h4">Empatía</h4>
                            </div>
                            <p className="paragraphDecision">Establecemos relaciones duraderas con nuestros clientes y brindamos apoyo continuo. Escuchamos sus inquietudes y respondemos a sus preguntas para asegurarnos de que estén completamente satisfechos con nuestros servicios. Si estás buscando un equipo de entrenadores dedicados a ayudarte a mejorar tus habilidades y estrategias en el juego, no dudes en contactarnos. Estamos aquí para ayudarte a alcanzar tus metas.</p>
                        </div>
                        <div className="tarjetaDecision">
                            <div className="separadorTarjetasDecisionIcono">
                                <i className="fa-solid fa-bolt"></i>
                                <h4 id="h4">Retroalimentación</h4>
                            </div>
                            <p className="paragraphDecision">Brindamos retroalimentación constante y constructiva a nuestros clientes durante las sesiones de coaching. Identificamos sus fortalezas y debilidades específicas y los ayudamos a mejorar en esas áreas. Si estás buscando un equipo de entrenadores dedicados a ayudarte a mejorar tus habilidades y estrategias en el juego, no dudes en contactarnos. Estamos aquí para ayudarte a alcanzar tus metas.</p>
                        </div>
                        <div className="tarjetaDecision">
                            <div className="separadorTarjetasDecisionIcono">
                                <i className="fa-solid fa-compass"></i>
                                <h4 id="h4">Largo plazo</h4>
                            </div>
                            <p className="paragraphDecision">Nos enfocamos en ayudar a nuestros clientes a alcanzar objetivos a largo plazo en el juego. Ofrecemos entrenamiento constante y seguimiento para mejorar continuamente sus habilidades y estrategias. No ofrecemos soluciones rápidas a problemas específicos, sino que nos dedicamos a mejorar de manera constante. Si estás buscando un servicio de coaching personalizado, ¡contáctanos hoy mismo!</p>
                        </div>
                        <div className="tarjetaDecision">
                            <div className="separadorTarjetasDecisionIcono">
                                <i className="fa-solid fa-marker"></i>
                                <h4 id="h4">Adaptación</h4>
                            </div>
                            <p className="paragraphDecision">Nos centramos en brindar servicios de coaching personalizados para satisfacer las necesidades únicas de cada cliente. Trabajamos en estrecha colaboración con nuestros clientes para identificar sus fortalezas y debilidades individuales y proporcionar un plan de coaching adaptado a sus objetivos y habilidades específicas. ¡Nuestro objetivo es ayudar a nuestros clientes a alcanzar el éxito a largo plazo!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Inicio