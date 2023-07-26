const HistorialClases = () => {
    return (
        <>
            <div className="historialClases p-2">
                <div className="rounded-md w-full h-[500px] bg-[var(--color-principal-light)]">
                    <div className="w-full h-[40px] bg-[var(--color-texto-dashboard)]">
                        <p className="pl-2">Clases</p>
                    </div>
                    <div className="w-full h-[460px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 overflow-y-scroll">
                        <div className="w-full h-[70px] bg-[var(--color-fondo-dashboard)] flex items-center justify-between rounded-md">
                            <div className="w-2/3 flex">
                                <div className="w-[50px] flex items-center justify-center numeroClase">
                                    <p>1</p>
                                </div>
                                <div className="w-[100px] flex flex-col pl-4">
                                    <div className="flex items-center w-full h-[30px]">
                                        <p>26/07</p>
                                        <p className="ml-3 text-xl">15:00</p>
                                    </div>
                                    <p className="text-lg text-[var(--color-texto-dashboard)]">TITOSGYP2k</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-4 w-[70px] pr-8">
                                <button className="">
                                    <i class="gg-info hover:text-blue-500 transition-colors"></i>
                                </button>
                                <button className=" w-[30px] h-[30px] flex items-center justify-center">
                                    <i class="gg-bookmark hover:text-orange-300 transition-colors"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HistorialClases;