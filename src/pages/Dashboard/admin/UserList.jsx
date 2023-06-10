import Logo from '../../../assets/Logo.png'

const UserList = () => {
    return (
        <>
            <div className="w-full h-full p-4 overflow-y-scroll flex gap-4 flex-col userList">
                <div className="clientCard w-full h-[100px] rounded-xl flex justify-between bg-[var(--color-secundario)] p-2">
                    <div className="clientCardIzquierda flex items-center">
                        <img src={Logo} alt="" className="clientCardImg h-full rounded-[50%] " />
                        <div className='ml-4'>
                            <p className='text-[1.3rem]'>Nombre</p>
                            <p>Cliente</p>
                        </div>
                    </div>
                    <div className="clientCardDerecha flex items-center">
                        <img src={Logo} alt="" className="h-[50px]" />
                        <img src={Logo} alt="" className="h-[50px]" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserList;