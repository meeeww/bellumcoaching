import Header from "./HeaderAdmin";
import Balance from "./Balance";
import UserList from "./UserList";
import ModalInfo from "./ModalInfo";

const DashboardAdmin = () => {
    return (
        <>
            <div className="dashboardAdmin">
                <Header />
                <Balance />
                <UserList />
                <ModalInfo />
            </div>
        </>
    )
}

export default DashboardAdmin;