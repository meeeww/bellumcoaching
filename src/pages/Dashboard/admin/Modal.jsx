const Modal = () => {
    return (
        <>
            <div className="w-full h-screen bg-[#0000007b] fixed z-[200] modal p-4 flex items-center justify-center">
                <div className="max-w-[600px] w-full h-full max-h-[400px] bg-[var(--color-secundario)] border text-[var(--color-principal-light)]">
                    <div className="w-full h-full relative">
                        <button className="absolute top-0 right-0 p-4 text-white" onClick={() => { document.querySelector(".modal").classList.add("hidden")}}>X</button>
                        <h1 className="text-4xl p-4 text-[var(--color-principal-light)]">EDITAR USUARIO</h1>
                        <div className="flex w-full h-full p-4 flex-col gap-4 relative">
                            <div>
                                <label htmlFor="nombre">Nombre: </label>
                                <input type="text" name="nombre" className="pl-2" />
                            </div>
                            <div className="w-full flex items-center justify-center">
                                <button className="border w-[200px] rounded-md text-white hover:scale-105 transition-all" type="submit" onClick={() => {document.querySelector(".modal").classList.add("hidden")}}>CONFIRMAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Modal;