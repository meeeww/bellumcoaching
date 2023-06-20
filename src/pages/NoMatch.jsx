import { Link } from "react-router-dom"
import MainLayout from "../layout/MainLayout";
import bellumVideo from '../assets/VideoBellum.mp4'
import bellumVideoLight from '../assets/VideoBellumLight.mp4'
import bellumLogo from '../assets/Logo.png'

const Inicio = () => {

    const nombrePagina = "NoMatch"

    return (
        <MainLayout laPagina={nombrePagina}>
            <div className="bodyBellumDos" style={{marginBlock: "10rem"}}>
                <div className="titulo">
                    <div className="tituloIzquierdaNM">
                        <h1>¡Ups! Error 404</h1>
                        <h4 id="h4">Parece que la página a la que intentas acceder no existe...</h4>
                    </div>
                    <div className="tituloDerechaNM">
                        <img src={bellumLogo} alt="Bellum Logo" style={{width: "15rem"}}/>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Inicio