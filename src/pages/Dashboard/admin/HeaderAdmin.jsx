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
                    <img src={Logo} alt="" className="h-[50px]" />
                </div>
            </div>
        </>

    )
}

export default Header;