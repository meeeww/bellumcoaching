const ModalEditar = () => {
    return (
        <>
            <div className="modalInfo w-full h-screen bg-[#1118277e] fixed top-0 left-0 flex items-center justify-center p-4 hidden">
                <div className="h-[270px] md:w-[350px] w-full bg-[var(--color-principal-dashboard)]">
                    <div className="w-full h-[40px] bg-[var(--color-fondo-dashboard)] flex items-center justify-between px-4">
                        <div><p className="text-white text-xl">Editar</p></div>
                        <button className="h-full" onClick={() => {document.querySelector(".modalInfo").classList.add("hidden")}}>X</button>
                    </div>
                    <div className="flex flex-col gap-4 w-full h-full p-4">
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Nombre: </p>
                            <input type="text" placeholder="zaskf" className="w-[150px] text-[1rem] pl-1 bg-[var(--color-principal-dashboard)] text-[var(--color-texto-dashboard)]" />
                        </div>
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Correo: </p>
                            <input type="email" placeholder="zas@gmail.com" className="w-[150px] text-[1rem] pl-1 bg-[var(--color-principal-dashboard)] text-[var(--color-texto-dashboard)]" />
                        </div>
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Contraseña: </p>
                            <input type="password" placeholder="········" className="w-[150px] text-[1rem] pl-1 bg-[var(--color-principal-dashboard)] text-[var(--color-texto-dashboard)]" />
                        </div>
                        <button className="bg-[var(--color-texto-dashboard)] rounded-md mt-8">Confirmar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalEditar;