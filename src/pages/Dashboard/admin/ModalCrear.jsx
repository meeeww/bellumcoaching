const ModalCrear = () => {
    return (
        <>
            <div className="w-full h-screen bg-[#0000007b] fixed z-[200] modal p-4 flex items-center justify-center">
                <div className="max-w-[600px] w-full h-full max-h-[400px] bg-[var(--color-secundario)] border text-[var(--color-principal-light)]">
                    <div className="w-full h-full relative">
                        <div className="flex justify-between bg-[var(--color-principal-light)] h-[30px] items-center">
                            <span className="text-xl text-white p-4 text-[var(--color-principal-light)]">CREAR USUARIO</span>
                            <button className=" p-4 text-white" onClick={() => { document.querySelector(".modal").classList.add("hidden") }}>X</button>
                        </div>

                        <div className="flex w-full h-full p-4 flex-col gap-4 relative">
                            <div>
                                <label htmlFor="nombre" className="text-xl">Nombre: </label>
                                <input type="text" name="nombre"/>
                            </div>
                            <div className="w-full flex items-center justify-center">
                                <button className="border w-[150px] rounded-md text-white text-xl hover:scale-105 transition-all bg-[var(--color-principal-light)]" type="submit" onClick={() => { document.querySelector(".modal").classList.add("hidden") }}>CONFIRMAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ModalCrear;