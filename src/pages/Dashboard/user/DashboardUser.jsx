import HistorialElo from "./HistorialElo";
import InfoUser from "./InfoUser";
import ListaCuentas from "./ListaCuentas";
import Header from '../admin/HeaderAdmin';
import Navbar from '../admin/Navbar';
import GraficaElo from "./GraficaElo";
import HistorialClases from "./HistorialClases";
const DashboardUser = () => {
    return (
        <>
            <div className="dashboardUser">
                <Header />
                <div className="flex navbarContainer">
                    <div className="fixed lg:static z-10">
                        <Navbar />
                    </div>
                    <div className="w-full flex flex-col md:flex-row z-0">
                        <div className="w-full md:max-w-[350px]">
                            <InfoUser />
                        </div>
                        <div className="w-full">
                            <ListaCuentas />
                            <HistorialElo />
                            <GraficaElo />
                            <HistorialClases />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default DashboardUser;