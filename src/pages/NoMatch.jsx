import { Link } from "react-router-dom"
import MainLayout from "../layout/MainLayout";
import bellumVideo from '../assets/VideoBellum.mp4'
import bellumVideoLight from '../assets/VideoBellumLight.mp4'
import bellumLogo from '../assets/Logo.png'

const Inicio = () => {

    const nombrePagina = "NoMatch"

    return (
        <MainLayout laPagina={nombrePagina}>
            <div className="bodyBellum">
                <div className="titulo">
                    <div className="tituloIzquierda">
                        <h1>¡Ups! Error 404</h1>
                        <h4 id="h4">Parece que la página a la que intentas acceder no existe...</h4>
                    </div>
                    <div className="tituloDerecha">
                        <img src={bellumLogo} alt="Bellum Logo" />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Inicio