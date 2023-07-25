import Poro from '../../../assets/Poro.png'

const HistorialElo = () => {
    return (
        <>
            <div className="historialElo p-2">
                <div className="rounded-md w-full grid p-2 gap-4">
                    <div className="w-full h-[120px] flex items-center justify-between bg-[var(--color-principal-light)]  rounded-md p-2">
                        <div><h1 className='text-xl'>Rango máximo: </h1></div>
                        <img src={Poro} alt="" className='h-[70%]' />
                        <div className='text-xl'>
                            <p>Platino 3</p>
                            <p>15LP</p>
                        </div>
                    </div>
                    <div className="w-full h-[120px] flex items-center justify-between bg-[var(--color-principal-light)]  rounded-md p-2">
                        <div><h1 className='text-xl'>Rango máximo: </h1></div>
                        <img src={Poro} alt="" className='h-[70%]' />
                        <div className='text-xl'>
                            <p>Platino 3</p>
                            <p>15LP</p>
                        </div>
                    </div>
                    <div className="w-full h-[120px] flex items-center justify-between bg-[var(--color-principal-light)]  rounded-md p-2">
                        <div><h1 className='text-xl'>Rango máximo: </h1></div>
                        <img src={Poro} alt="" className='h-[70%]' />
                        <div className='text-xl'>
                            <p>Platino 3</p>
                            <p>15LP</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HistorialElo;