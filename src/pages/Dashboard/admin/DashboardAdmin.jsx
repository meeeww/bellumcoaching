import Header from "./HeaderAdmin";
import Balance from "./Balance";
import UserList from "./UserList";
import ModalEditar from "./ModalEditar";
import ModalBorrar from "./ModalBorrar";
import ModalInfo from "./ModalInfo";
import ModalEditarAdmin from "./ModalEditarAdmin";

const DashboardAdmin = () => {
    return (
        <>
            <div className="dashboardAdmin">
                <Header />
                <Balance />
                <UserList />
                <ModalBorrar />
                <ModalEditar />
                <ModalInfo />
                <ModalEditarAdmin />
            </div>
        </>
    )
}

export default DashboardAdmin;