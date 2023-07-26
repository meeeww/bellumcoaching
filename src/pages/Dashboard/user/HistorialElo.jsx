import Poro from '../../../assets/Poro.png'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function HistorialElo({ id }) {

    const [eloInicial, setEloInicial] = useState()
    const [eloActual, setEloActual] = useState()
    const [eloMaximo, setEloMaximo] = useState()
    const [eloHistorial, setEloHistorial] = useState()

    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        axios.get("https://bellumserver.netlify.app/.netlify/functions/api/historial/inicial=" + id).then((elo) => {
            setEloInicial(elo.data[0])
            axios.get("https://bellumserver.netlify.app/.netlify/functions/api/historial/actual=" + id).then((elo) => {
                setEloActual(elo.data[0])
                axios.get("https://bellumserver.netlify.app/.netlify/functions/api/historial/maximo=" + id).then((elo) => {
                    setEloMaximo(elo.data[0])
                    axios.get("https://bellumserver.netlify.app/.netlify/functions/api/historial=" + id).then((elo) => {
                        setEloHistorial(elo.data[0])
                        setCargando(false)
                    })
                })
            })
        })

    }, [])

    if (cargando)
        return (<div class="loaderRing"></div>)

    return (
        <>
            <div className="historialElo p-2">
                <div className="rounded-md w-full bg-[var(--color-principal-light)] grid p-2 gap-4">
                    <div className="w-full h-[120px] flex items-center justify-between bg-[var(--color-texto-dashboard)]  rounded-md p-2">
                        <div><h1 className='text-xl'>Rango Inicial: </h1></div>
                        <img src={Poro} alt="" className='h-[70%]' />
                        <div className='text-xl'>
                            <p>{eloInicial.division.charAt(0).toUpperCase() + eloInicial.division.slice(1).toLowerCase()}</p>
                            <p>{eloInicial.lps + "LPs"}</p>
                            <p>{eloInicial.fecha.substring(8, 10) + "/" + eloInicial.fecha.substring(5, 7)}</p>
                        </div>
                    </div>
                    <div className="w-full h-[120px] flex items-center justify-between bg-[var(--color-texto-dashboard)]  rounded-md p-2">
                        <div><h1 className='text-xl'>Rango Actual: </h1></div>
                        <img src={Poro} alt="" className='h-[70%]' />
                        <div className='text-xl'>
                            <p>{eloActual.division.charAt(0).toUpperCase() + eloActual.division.slice(1).toLowerCase()}</p>
                            <p>{eloActual.lps + "LPs"}</p>
                            <p>{eloActual.fecha.substring(8, 10) + "/" + eloActual.fecha.substring(5, 7)}</p>
                        </div>
                    </div>
                    <div className="w-full h-[120px] flex items-center justify-between bg-[var(--color-texto-dashboard)]  rounded-md p-2">
                        <div><h1 className='text-xl'>Rango Máximo: </h1></div>
                        <img src={Poro} alt="" className='h-[70%]' />
                        <div className='text-xl'>
                            <p>{eloMaximo.division.charAt(0).toUpperCase() + eloMaximo.division.slice(1).toLowerCase()}</p>
                            <p>{eloMaximo.lps + "LPs"}</p>
                            <p>{eloMaximo.fecha.substring(8, 10) + "/" + eloMaximo.fecha.substring(5, 7)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}