import Header from "./HeaderAdmin";
import Balance from "./Balance";
import UserList from "./UserList";
import ModalInfo from "./ModalInfo";
import ModalBorrar from "./ModalBorrar";

const DashboardAdmin = () => {
    return (
        <>
            <div className="dashboardAdmin">
                <Header />
                <Balance />
                <UserList />
                <ModalBorrar />
                <ModalInfo />
            </div>
        </>
    )
}

export default DashboardAdmin;