import Notas from "./Notas";
import React from 'react'
import Header from "../admin/HeaderAdmin";
import Navbar from "../admin/Navbar";
import PanelClase from "./PanelClase";
import AgregarNota from './AgregarNota';


const PanelNotas = () => {
    return (
        <>
            <div className="dashboardAdmin">
                <Header />
                <div className="flex navbarContainer">
                    <div className="fixed lg:static">
                        <Navbar />
                    </div>
                    <div className="w-full h-full flex flex-col">
                        <div className="flex items-center md:justify-center flex-col md:flex-row">
                            <PanelClase />
                            <AgregarNota />
                        </div>
                        <div className="h-full w-full">
                            <Notas />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PanelNotas;