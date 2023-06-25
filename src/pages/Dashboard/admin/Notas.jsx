const Notas = () => {
    return (
        <>
            <div className="w-full h-[400px] notas mt-4">
                <select name="dias" id="" className="w-[100px] bg-[var(--color-secundario)]">
                    <option value="">DIA 1</option>
                    <option value="">DIA 2</option>
                    <option value="">DIA 3</option>
                    <option value="">DIA 4</option>
                </select>
                <div className="h-full w-full  gap-4 flex items-center p-8 notasScroll">
                    <div className="min-w-[300px] w-[300px] h-full"></div>
                    <div className="min-w-[300px] w-[300px] h-full"></div>
                    <div className="min-w-[300px] w-[300px] h-full"></div>
                    <div className="min-w-[300px] w-[300px] h-full"></div>
                    <div className="min-w-[300px] w-[300px] h-full"></div>

                </div>
            </div>
        </>
    )
}

export default Notas;