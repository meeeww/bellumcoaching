const ModalEliminar = () => {
    return (
        <>
            <div className="w-full h-screen bg-[#0000007b] fixed z-[200] modal p-4 flex items-center justify-center">
                <div className="max-w-[600px] w-full h-full max-h-[200px] bg-[var(--color-secundario)] border text-[var(--color-principal-light)]">
                    <div className="w-full h-full relative flex items-center justify-center flex-col p-4">
                        <button className="absolute top-0 right-0 p-4 text-white" onClick={() => { document.querySelector(".modal").classList.add("hidden") }}>X</button>
                        <h3>¿Estás seguro de que quieres elminar este usuario?</h3>
                        <div className="flex gap-10 mt-8">
                            <button className="border px-4 rounded-md">SI</button>
                            <button className="border px-4 rounded-md">NO</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalEliminar;

