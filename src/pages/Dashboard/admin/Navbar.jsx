const Navbar = () => {
    return (
        <>
            <div className="w-[200px] h-screen bg-[var(--color-principal-dashboard)] absolute lg:sticky top-0 left-0 translate-x-[-100%] lg:translate-x-0 navbar transition-all">
                <ul className="text-xl listaNavbar relative h-[550px]">
                    <a href="#" className="text-[var(--color-texto-dashboard)]"><li>Información general</li></a>
                    <a href="#" className="text-[var(--color-texto-dashboard)]"><li>Calendario</li></a>
                    <a href="#" className="text-[var(--color-texto-dashboard)]"><li>Notas</li></a>
                    <a href="#" className="text-[var(--color-texto-dashboard)]"><li>Creadores</li></a>
                    <a href="#" className="text-[var(--color-texto-dashboard)]"><li>Analíticas</li></a>
                </ul>
            </div>
        </>
    )
}

export default Navbar;