import Balance from "./Balance";
import Navbar from "./NavbarAdmin";
import UserList from "./UserList";
import CoachList from "./CoachList";
import User from "./User";
import Modal from "./Modal";

const Plantilla = () => {
    return (
        <>
            <Modal />
            <div class="antialiased flex m-0 p-0">
                {/* -----------------BARRA LATERAL----------------- */}
                <Navbar />
                {/* -----------------CONTENIDO----------------- */}
                <main class=" p-4 pt-20 w-full min-h-screen mainDashboard">
                    <Balance />
                    <div
                        class=" h-[27rem] mb-4 lg:grid-cols-2 grid-cols-1 grid "
                    >
                        <UserList />
                        <CoachList />
                    </div>
                </main>
            </div>
        </>
    )
}

export default Plantilla;