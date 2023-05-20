import Footer from "../../../componentes/Footer";
import Header from "../../../componentes/Header";
import Balance from "./Balance";
import Activities from "./Activities";

const DashboardAdmin = () => {
    return(
        <>
            <Header/>
            <Balance/>
            <Activities/>
            <Footer/>
        </>
    )
}

export default DashboardAdmin;