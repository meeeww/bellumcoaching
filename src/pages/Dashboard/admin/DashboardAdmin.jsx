import Header from "./HeaderAdmin";
import Balance from "./Balance";
import UserList from "./UserList";
import ModalEditar from "./ModalEditar";
import ModalBorrar from "./ModalBorrar";
import ModalInfo from "./ModalInfo";
import ModalEditarAdmin from "./ModalEditarAdmin";
import Navbar from "./Navbar";
import Calendario from "./Calendario";

const DashboardAdmin = () => {
    return (
        <>
            <div className="dashboardAdmin">
                <Header />
                <div className="flex navbarContainer">
                    <div className="fixed lg:static">
                        <Navbar />
                    </div>
                    <div className="w-full">
                        <Balance />
                        <UserList />
                        <ModalBorrar />
                        <ModalEditar />
                        <ModalInfo />
                        <ModalEditarAdmin />
                    </div>

                </div>

            </div>
        </>
    )
}

export default DashboardAdmin;