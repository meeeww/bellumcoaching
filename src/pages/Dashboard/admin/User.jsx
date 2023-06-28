import Navbar from "./NavbarAdmin";
import GraficaElo from "./GraficaElo";
import EloUser from "./EloUser";
import Notas from "./Notas";
import NavbarAdmin from "./NavbarAdmin";

const User = () => {
    return (
        <>
            <div class="flex w-full h-full">
                {/* -----------------BARRA LATERAL----------------- */}
                <Navbar />
                {/* -----------------CONTENIDO----------------- */}
                <button onClick={() => {
                    document.querySelector(".navbarAdmin").classList.toggle("active")
                }} className="botonMenu md:hidden">
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <div className="w-full p-4 pt-8">
                    <div className="w-full min-h-[50px] md:h-[50px] flex gap-4 mt-4 userNames flex-col md:flex-row">
                        <div className="w-full md:w-1/3 h-full"><p className="text-white">User Name: </p><p className="text-white">Rakions</p></div>
                        <div className="w-full md:w-2/3 h-full">
                            <p className="text-white">Summoner Name: </p>
                            <div className="flex items-center ml-4 cuentasUser">
                                <button>Kabuto Makai</button>
                            </div>

                        </div>
                    </div>
                    <EloUser />
                    <GraficaElo />
                    <Notas />
                </div>
            </div>
        </>
    )

}

export default User;