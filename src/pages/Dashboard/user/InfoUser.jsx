import discordLogo from '../../../assets/discord-logo-1-1.png';

import { useEffect, useState } from "react";

export default function InfoUser({ usuario }) {

    return (
        <>
            <div className="infoUser p-2 ">
                <div className="bg-[var(--color-principal-light)] rounded-md w-full h-[400px] relative">
                    <div className="w-full h-[150px] flex items-center justify-center">
                        <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/" + usuario.icono + ".jpg"} alt="Image" className="w-[120px] h-[120px] bg-black rounded-[50%]" />
                    </div>
                    <div className="w-full h-[250px] ">
                        <div className="w-full h-[50px]  flex items-center justify-center gap-4">
                            <h1>{usuario.nombre}</h1>
                            <div className='flex items-center gap-1'>
                                <h1>{usuario.discord}</h1>
                                <img src={discordLogo} alt="" className='h-[30px]' />
                            </div>
                        </div>
                        <div className='w-full mt-4 flex items-center justify-center'>
                            <h1>{(() => {
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
                            })()}</h1>
                        </div>
                    </div>
                    <div className='absolute bottom-0 right-0 flex items-center gap-2 p-2'>
                        <button href="#"><i className="gg-keyhole"></i></button>
                        <button href="#"><i className="gg-log-off"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}