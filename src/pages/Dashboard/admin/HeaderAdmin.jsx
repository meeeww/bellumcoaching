import Logo from '../../../assets/Logo.png'

const Header = () => {
    return (
        <>
            <div className="w-full h-[70px] flex items-center justify-between px-4 headerAdmin">
                <button className='menuButton'>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <div className='flex items-center gap-4 '>
                    <p className='text-white'>zaskf</p>
                    <div className='relative'>
                        <a href="#"><img src={Logo} alt="" className="h-[50px]" /></a>
                        <div className='absolute w-[100px] h-[100px] bg-[var(--color-principal-dashboard)] rounded-md top-[60px] right-[0px] menuDropdown hidden'>
                            <ul className='flex w-full h-full flex-col text-right items-center justify-center'>
                                <a href=""><li className='text-lg w-full'>Settings</li></a>
                                <a href=""><li className='text-lg w-full'>Dashboard</li></a>
                                <a href=""><li className='text-lg w-full'>Sign out</li></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header;