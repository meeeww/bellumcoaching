import Balance from "./Balance";
import Navbar from "./NavbarAdmin";
import UserList from "./UserList";
import CoachList from "./CoachList";
import User from "./User";

const Plantilla = () => {
    return (
        <>
            <div class="antialiased flex m-0 p-0 w-full">
                {/* -----------------BARRA LATERAL----------------- */}
                <Navbar/>
                {/* -----------------CONTENIDO----------------- */}
                <main class="p-4 pt-20 w-full min-h-screen mainDashboard">
                    <Balance/>
                    <div
                        class=" h-[27rem] mb-4 lg:grid-cols-2 grid-cols-1 grid "
                    >
                        <UserList/>
                        <CoachList/>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mb-4">
                        <div
                            class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                        ></div>
                        <div
                            class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                        ></div>
                        <div
                            class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                        ></div>
                        <div
                            class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                        ></div>
                    </div>
                    <div
                        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
                    ></div>
                    <div class="grid grid-cols-2 gap-4">
                        <div
                            class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                        ></div>
                        <div
                            class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                        ></div>
                        <div
                            class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                        ></div>
                        <div
                            class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                        ></div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Plantilla;