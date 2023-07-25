import Header from "./HeaderAdmin";
import Balance from "./Balance";
import UserList from "./UserList";
import ModalEditar from "../../../modals/dashboard/admin/ModalEditar";
import ModalBorrar from "../../../modals/dashboard/admin/ModalBorrar";
import ModalInfo from "../../../modals/dashboard/admin/ModalInfo";
import ModalEditarAdmin from "../../../modals/dashboard/admin/ModalEditarAdmin";
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