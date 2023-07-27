const ModalBorrar = () => {
    return (
        <>
            <div className="modalBorrar w-full h-screen bg-[#1118277e] fixed top-0 left-0 flex items-center justify-center p-4 hidden">
                <div className="md:w-[350px] w-full bg-[var(--color-principal-dashboard)]">
                    <div className="w-full h-[40px] bg-[var(--color-fondo-dashboard)] flex items-center justify-between px-4">
                        <div><p className="text-white text-xl">Eliminar</p></div>
                        <button className="h-full" onClick={() => {document.querySelector(".modalBorrar").classList.add("hidden")}}>X</button>
                    </div>
                    <div className="w-full pt-[30px] flex flex-col items-center justify-center">
                        <p className="text-white max-w-[30ch]">¿Estás seguro de que quieres eliminar este usuario?</p>
                        <div className="flex items-center justify-center gap-4 mt-4">
                            <button className="bg-[var(--color-texto-dashboard)] rounded-md w-[3rem]">Si</button>
                            <button className="bg-[var(--color-texto-dashboard)] rounded-md w-[3rem]">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalBorrar;