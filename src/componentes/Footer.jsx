import bellumLogo from '../assets/Logo.png'
import { Link } from "react-router-dom"

const Footer = () => (
    <div className="footer">
        <div className="redesSociales">
            <div className="redesSocialesIzquierda">
                <p>Nuestras redes sociales:</p>
            </div>
            <div className="redesSocialesDerecha">
                <i className="fa-brands fa-discord"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
        </div>
        <div className="informacionFooter">
            <div className="informacionFooterIzquierda">
                <h5>Sobre Nosotros</h5>
                <p className="paragraphFooter">En Bellum Coaching nos comprometemos a brindar el mejor servicio posible para nuestros clientes.</p>
            </div>
            <div className="informacionFooterCentro">
                <h5>Links</h5>
                <Link to="/">Inicio</Link>
                <Link to="/precios">Precios</Link>
                <Link to="/contacto">Contacto</Link>
            </div>
            <div className="informacionFooterDerecha">
                <h5>Contacto</h5>
                <a><i class="fa-brands fa-discord"></i>Discord</a>
                <a><i class="fa-solid fa-envelope"></i>Email</a>
            </div>
        </div>
        <div className="custom-shape-divider-bottom-1681757470">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" className="shape-fill"></path>
            </svg>
        </div>
        <div className="copyrightFooter">
            <p className="paragraphCopyright">© 2023 Copyright: BellumCoaching.com</p>
        </div>
    </div>
);

export default Footer