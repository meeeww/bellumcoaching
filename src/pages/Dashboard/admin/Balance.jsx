import Logo from '../../../assets/Logo.png'

const Balance = () => {
    return (
        <>
            <div className="balance p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full p-4 rounded-md">
                    <div className="w-full h-[100px] rounded-md tarjetaBalance">
                        <img src={Logo} alt="" className='h-full' />
                        <div>
                            <h3>Usuarios totales</h3>
                            <p>1670</p>
                        </div>
                    </div>
                    <div className="w-full h-[100px] rounded-md tarjetaBalance">
                        <img src={Logo} alt="" className='h-full' />
                        <div>
                            <h3>Numero pedidos</h3>
                            <p>100</p>
                        </div>
                    </div>
                    <div className="w-full h-[100px] rounded-md tarjetaBalance">
                        <img src={Logo} alt="" className='h-full' />
                        <div>
                            <h3>Balance total</h3>
                            <p>1670$</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Balance;