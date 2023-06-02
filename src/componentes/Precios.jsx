const PreciosLista = () => {

    return (
        <div className="precios">
            <h2>Nuestros Precios Para Clases Individuales</h2>
            <div className="tarjetasPrecios">
                <div className="tarjetaPrecios" id="mejorParaEmpezar">
                    <h4>1 Clase</h4>
                    <h6>7€</h6>
                </div>
                <div className="tarjetaPrecios">
                    <h4>3 Clases</h4>
                    <h6>20€</h6>
                </div>
                <div className="tarjetaPrecios" id="masVendido">
                    <h4>5 Clases</h4>
                    <h6>33€</h6>
                </div>
                <div className="tarjetaPrecios">
                    <h4>10 Clases</h4>
                    <h6>65€</h6>
                </div>
                <div className="tarjetaPrecios">
                    <h4>15 Clases</h4>
                    <h6>95€</h6>
                </div>
                <div className="tarjetaPrecios" id="masRentable">
                    <h4>20 Clases</h4>
                    <h6>120€</h6>
                </div>
            </div>
        </div>
    )
}

export default PreciosLista