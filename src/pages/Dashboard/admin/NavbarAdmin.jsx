import Logo from '../../../assets/Logo.png';

const NavbarAdmin = () => {
    return (
        <>
            <button onClick={() => { document.querySelector(".navbarAdmin").classList.toggle("active") }}
                className='botonUser absolute top-0 left-0 flex flex-col gap-1 p-4 z-[100]'>
                <div></div>
                <div></div>
                <div></div>
            </button>
            <div className='navbarAdmin h-screen w-[300px] absolute top-0 left-0 bg-[#262626] translate-x-[-100%] transition-all duration-300 z-50'>
                <ul className='w-full h-full flex flex-col justify-center pl-4 relative'>
                    <li><a href="#">Información general</a></li>
                    <li><a href="#">Calendario</a></li>
                    <li><a href="#" className='absolute bottom-0 left-0 p-4'>Log out</a></li>
                </ul>
            </div>
        </>
    )
}

export default NavbarAdmin;