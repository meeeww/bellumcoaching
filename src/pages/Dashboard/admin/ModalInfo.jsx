const ModalInfo = () => {
    return (
        <>
            <div className="modalInfo w-full h-screen bg-[#1118277e] fixed top-0 left-0 flex items-center justify-center p-4">
                <div className="h-[250px] md:w-[350px] w-full bg-[var(--color-principal-dashboard)]">
                    <div className="w-full h-[40px] bg-[var(--color-fondo-dashboard)] flex items-center justify-between px-4">
                        <div><p className="text-white text-xl">Información</p></div>
                        <button className="h-full">X</button>
                    </div>
                    <div className="flex flex-col gap-4 w-full h-full p-4">
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Nombre: </p>
                            <input type="text" placeholder="nombre" className="w-[150px] text-[1rem] pl-1 bg-[var(--color-principal-dashboard)] text-[var(--color-texto-dashboard)]" />
                        </div>
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Correo: </p>
                            <input type="email" placeholder="nombre" className="w-[150px] text-[1rem] pl-1 bg-[var(--color-principal-dashboard)] text-[var(--color-texto-dashboard)]" />
                        </div>
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Contraseña: </p>
                            <input type="password" placeholder="nombre" className="w-[150px] text-[1rem] pl-1 bg-[var(--color-principal-dashboard)] text-[var(--color-texto-dashboard)]" />
                        </div>
                        <button className="bg-[var(--color-texto)]">Confirmar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalInfo;