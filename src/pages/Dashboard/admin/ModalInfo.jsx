const ModalInfo = () => {
    return (
        <>
            <div className="modalInfo w-full h-screen bg-[#1118277e] fixed top-0 left-0 flex items-center justify-center p-4 hidden">
                <div className="h-[400px] md:w-[350px] w-full bg-[var(--color-principal-dashboard)]">
                    <div className="w-full h-[40px] bg-[var(--color-fondo-dashboard)] flex items-center justify-between px-4">
                        <div><p className="text-white text-xl">Información</p></div>
                        <button className="h-full" onClick={() => { document.querySelector(".modalBorrar").classList.add("hidden") }}>X</button>
                    </div>
                    <div className="flex flex-col gap-4 w-full h-full p-4">
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Nombre: </p>
                            <p className="text-[var(--color-texto-dashboard)]">zaskf</p>
                        </div>
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Correo: </p>
                            <p className="text-[var(--color-texto-dashboard)]">zaskf@gmail.com</p>
                        </div>
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Clases restantes: </p>
                            <p className="text-[var(--color-texto-dashboard)]">10</p>
                        </div>
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Elo inicial: </p>
                            <p className="text-[var(--color-texto-dashboard)]">Hierro I 0LP</p>
                        </div>
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Elo actual: </p>
                            <p className="text-[var(--color-texto-dashboard)]">Bronce IV 50LP</p>
                        </div>
                        <button className="bg-[var(--color-texto-dashboard)] rounded-md mt-8">Editar</button>
                        <button className="bg-[var(--color-texto-dashboard)] rounded-md">Confirmar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalInfo;