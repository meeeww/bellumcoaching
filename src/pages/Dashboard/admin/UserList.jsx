import Logo from '../../../assets/Logo.png'

const UserList = () => {
    return (
        <>
            <div className="w-full h-full  overflow-y-scroll flex gap-4 flex-col userList">
                <p className='text-white w-full bg-black rounded-[0.5rem] pl-4 sticky top-0 left-0'>User List</p>
                <div className="clientCard w-full h-[100px] rounded-xl flex justify-between bg-[var(--color-secundario)] p-2">
                    <div className="clientCardIzquierda flex items-center">
                        <img src={Logo} alt="" className="clientCardImg h-full rounded-[50%] cursor-pointer" />
                        <div className='ml-4'>
                            <p className='text-[1.3rem]'>Nombre</p>
                            <p>Cliente</p>
                        </div>
                    </div>
                    <div className="clientCardDerecha flex items-center">
                        <img src={Logo} alt="" className="h-[70%]" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserList;