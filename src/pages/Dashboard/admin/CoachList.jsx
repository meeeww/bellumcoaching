import Logo from '../../../assets/Logo.png'

const CoachList = () => {
    return (
        <>
            <div className="w-full h-full flex flex-col overflow-y-scroll">
                <div className='w-full h-full p-4 overflow-y-scroll flex gap-4 flex-col userList'>
                    <div className="clientCard w-full h-[100px] rounded-xl flex justify-between bg-[var(--color-secundario)] p-2 ">
                        <div className="clientCardIzquierda flex items-center">
                            <img src={Logo} alt="" className="clientCardImg h-full rounded-[50%] cursor-pointer" />
                            <div className='ml-4'>
                                <p className='text-[1.3rem]'>Nombre</p>
                                <p>Coach</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoachList;