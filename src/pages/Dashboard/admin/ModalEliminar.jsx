const ModalEliminar = () => {
    return (
        <>
            <div className="w-full h-screen bg-[#0000007b] fixed z-[200] modal p-4 flex items-center justify-center">
                <div className="max-w-[600px] w-full h-full max-h-[200px] bg-[var(--color-secundario)] border text-[var(--color-principal-light)]">
                    <div className="w-full h-full relative">
                        <div className="flex justify-between bg-[var(--color-principal-light)] h-[30px] items-center">
                            <span className="text-xl text-white p-4 text-[var(--color-principal-light)]">ELIMINAR USUARIO</span>
                            <button className=" p-4 text-white" onClick={() => { document.querySelector(".modal").classList.add("hidden") }}>X</button>
                        </div>
                        <span className="flex items-center justify-center w-full h-full p-4 flex-col gap-4">
                            <p>¿Estás seguro de que quieres eliminar este usuario?</p>
                            <div className="flex gap-4">
                                <button>Si</button>
                                <button>No</button>
                            </div>
                        </span>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalEliminar;

