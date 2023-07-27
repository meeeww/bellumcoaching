const PanelClase = () => {
    return (
        <>
            <div className="modalInfo panelClase w-full h-screen bg-[#1118277e] fixed top-0 left-0 flex items-center justify-center p-4 z-50 hidden">
                <div className="md:w-[350px] w-full bg-[var(--color-principal-dashboard)]">
                    <div className="w-full h-[40px] bg-[var(--color-fondo-dashboard)] flex items-center justify-between px-4">
                        <div><p className="text-white text-xl">Información</p></div>
                        <button className="h-full" onClick={() => { document.querySelector(".modalInfo").classList.add("hidden") }}>X</button>
                    </div>
                    <div className="flex flex-col gap-4 w-full h-full p-4">
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Clase: </p>
                            <p className="text-[var(--color-texto-dashboard)]">1</p>
                        </div>
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Cliente: </p>
                            <p className="text-[var(--color-texto-dashboard)]">zas</p>
                        </div>
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Coach: </p>
                            <p className="text-[var(--color-texto-dashboard)]">zas</p>
                        </div>
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Puntuación: </p>
                            <p className="text-[var(--color-texto-dashboard)]">10/10</p>
                        </div>

                        <button className="bg-[var(--color-texto-dashboard)] rounded-md mt-8">Ver notas</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PanelClase;