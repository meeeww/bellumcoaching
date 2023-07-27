import { useEffect, useState } from 'react'
import axios from 'axios'

function HistorialClases() {

    const [clases, setClases] = useState([])

    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        axios.get("https://bellumserver.netlify.app/.netlify/functions/api/coaching/usuario=" + JSON.parse(localStorage.getItem("usuario"))["id_usuario"]).then((lista) => {
            setClases(lista.data)
            setCargando(false)
        })
    }, [])

    if (cargando)
        return (
            <div className="historialClases p-2">
                <div className="rounded-md w-full h-[500px] bg-[var(--color-principal-light)]">
                    <div className="w-full h-[40px] bg-[var(--color-texto-dashboard)]">
                        <p className="pl-2">Clases</p>
                    </div>
                    <div className="w-full h-[460px] flex items-center p-2 overflow-y-scroll">
                        <div className="loaderRing"></div>
                    </div>
                </div>
            </div>
        )

    return (
        <>
            <div className="historialClases p-2">
                <div className="rounded-md w-full h-[500px] bg-[var(--color-principal-light)]">
                    <div className="w-full h-[40px] bg-[var(--color-texto-dashboard)] flex items-center">
                        <p className="pl-2">Clases</p>
                    </div>
                    <div className="w-full h-[460px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 overflow-y-scroll">
                        {clases.map((clase => (
                            <div key={clase.id_sesion} className="w-full h-[70px] bg-[var(--color-fondo-dashboard)] flex items-center justify-between rounded-md">
                                <div className="w-2/3 flex">
                                    <div className="w-[50px] flex items-center justify-center numeroClase">
                                        <p>{clase.id_sesion}</p>
                                    </div>
                                    <div className="w-[100px] flex flex-col pl-4">
                                        <div className="flex items-center w-full h-[30px]">
                                            <p>{clase.fecha.substring(8, 10) + "/" + clase.fecha.substring(5, 7)}</p>
                                            <p className="ml-3 text-xl">{clase.hora}</p>
                                        </div>
                                        <p className="text-lg text-[var(--color-texto-dashboard)]">{clase.nombre}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-4 w-[70px] pr-8">
                                    <button className="">
                                        <i className="gg-info hover:text-blue-500 transition-colors"></i>
                                    </button>
                                    <button className=" w-[30px] h-[30px] flex items-center justify-center">
                                        <i className="gg-bookmark hover:text-orange-300 transition-colors"></i>
                                    </button>
                                </div>
                            </div>
                        )))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Clases() {
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

        observer.observe(document.getElementById("LazyClases"))
    })

    return <div id='LazyClases'>
        {show ? <HistorialClases /> : null}
    </div>
}