import Logo from '../../../assets/Logo.png'
import { useEffect } from 'react'
import checkSession from '../../../scripts/sessionManager'

const Header = () => {

    useEffect(() => {
        checkSession()
    }, [])

    return (
        <>
            <div className="w-full h-[70px] flex items-center justify-between px-4 headerAdmin lg:static sticky top-[0px]">
                <button className='menuButton' onClick={() =>{document.querySelector(".navbar").classList.toggle("active")}}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <div className='flex items-center gap-4 '>
                    <p className='text-white'>{JSON.parse(localStorage.getItem("usuario"))["nombre"]}</p>
                    <div className='relative'>
                        <a href="#" onClick={() => {document.querySelector(".menuDropdown").classList.toggle("hidden")}}><img src={Logo} alt="" className="h-[50px]" /></a>
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