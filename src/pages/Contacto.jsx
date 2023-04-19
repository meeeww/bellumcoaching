import { Link } from "react-router-dom"
import MainLayout from "../layout/MainLayout";
import bellumVideo from '../assets/VideoBellum.mp4'
import bellumVideoLight from '../assets/VideoBellumLight.mp4'
import bellumLogo from '../assets/Logo.png'

const Contacto = () => {

    const nombrePagina = "Contacto"

    return (
        <MainLayout laPagina={nombrePagina}>
            <div>Hola Titon</div>
        </MainLayout >
    );
}

export default Contacto