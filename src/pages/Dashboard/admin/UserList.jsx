import Logo from '../../../assets/Logo.png'
import { useEffect, useState } from 'react'
import axios from 'axios'

function UserList() {

    const [listaUsuarios, setListaUsuarios] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        axios.get("https://bellumserver.netlify.app/.netlify/functions/api/usuarios").then((usuarios) => {
            setListaUsuarios(usuarios.data)
            setCargando(false)
        })
    }, [])

    if (cargando)
        return (
            <div className="userList p-4">
                <div className="w-full h-screen rounded-md">
                    <div className="w-full h-[30px] bg-[var(--color-texto-dashboard)] userListheader flex items-center pl-4">
                        <p className="text-white">User List</p>
                    </div>
                    <ul className="flex flex-col w-full h-full overflow-x-scroll">
                        <div className="loaderRing"></div>
                    </ul>
                </div>
            </div>
        )

    return (
        <>
            <div className="userList p-4">
                <div className="w-full h-screen rounded-md">
                    <div className="w-full h-[30px] bg-[var(--color-texto-dashboard)] userListheader flex items-center pl-4">
                        <p className="text-white">User List</p>
                    </div>
                    <ul className="flex flex-col w-full h-full overflow-x-scroll">
                        {listaUsuarios.map((usuario) => (
                            <li className="w-full h-[80px] flex items-center justify-between pr-4 pl-2" key={usuario.id_usuario}>
                                <div className='flex'>
                                    <a href={'/user?id=' + usuario.id_usuario}><img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/" + usuario.icono + ".jpg"} alt="Image" className="w-[70px] rounded-[50%]" /></a>
                                    <div >
                                        <p className='text-white text-2xl'>{usuario.nombre}</p>
                                        <p className='text-[var(--color-texto-dashboard)]'>{usuario.discord}</p>
                                    </div>
                                </div>
                                <div className='hidden lg:block'>
                                    <p className='text-[var(--color-texto-dashboard)]'>{(() => {
                                        switch (usuario.permisos) {
                                            case 1:
                                                return <p>Privilegiado</p>
                                            case 2:
                                                return <p>Coach</p>
                                            case 3:
                                                return <p>Desarrollador</p>
                                            case 4:
                                                return <p>Administrador</p>
                                            default:
                                                return <p>Usuario</p>
                                        }
                                    })()}</p>
                                </div>
                                <div className='hidden lg:block'>
                                    <p className='text-[var(--color-texto-dashboard)]'>10 clases restantes</p>
                                </div>
                                <div className='flex gap-2'>
                                    <button className='bg-blue-500 h-[30px] w-[30px] flex items-center justify-center rounded-md' onClick={() => { document.querySelector(".modalInfo").classList.remove("hidden") }}>i</button>
                                    <button className='bg-green-500 h-[30px] w-[30px] flex items-center justify-center rounded-md' onClick={() => { document.querySelector(".modalEditar").classList.remove("hidden") }}>e</button>
                                    <button className='bg-red-500 h-[30px] w-[30px] flex items-center justify-center rounded-md' onClick={() => { document.querySelector(".modalBorrar").classList.remove("hidden") }}>x</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}


export default function Users() {
    const [show, setShow] = useState(false)

    useEffect(function () {
        const onChange = (entries) => {
            const elemento = entries[0]
            if (elemento.isIntersecting) {
                setShow(true)
            }
        }


        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })

        observer.observe(document.getElementById("LazyUsers"))
    })

    return <div id='LazyUsers'>
        {show ? <UserList /> : null}
    </div>
}