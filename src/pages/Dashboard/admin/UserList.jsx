import Logo from '../../../assets/Logo.png'

const UserList = () => {
    return (
        <>
            <div className="userList p-4">
                <div className="w-full h-screen rounded-md">
                    <div className="w-full h-[30px] bg-[var(--color-texto-dashboard)] rounded-md flex items-center pl-4">
                        <p className="text-white">User List</p>
                    </div>
                    <ul className="flex flex-col w-full h-full overflow-x-scroll">
                        <li className="w-full h-[70px] flex items-center justify-between pr-4">
                            <div className='flex'>
                                <img src={Logo} alt="" className="w-[70px] rounded-[50%]" />
                                <div >
                                    <p className='text-white text-2xl'>zask</p>
                                    <p className='text-[var(--color-texto-dashboard)]'>zas@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <button className='bg-blue-500 h-[30px] w-[30px] flex items-center justify-center rounded-md'>i</button>
                                <button className='bg-green-500 h-[30px] w-[30px] flex items-center justify-center rounded-md'>e</button>
                                <button className='bg-red-500 h-[30px] w-[30px] flex items-center justify-center rounded-md'>x</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}


export default UserList;