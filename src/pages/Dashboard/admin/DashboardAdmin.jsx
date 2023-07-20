import Header from "./HeaderAdmin";
import Balance from "./Balance";
import UserList from "./UserList";

const DashboardAdmin = () => {
    return (
        <>
            <div className="dashboardAdmin">
                <Header />
                <Balance />
                <UserList />
            </div>
        </>
    )
}

export default DashboardAdmin;