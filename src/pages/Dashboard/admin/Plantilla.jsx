import Balance from "./Balance";
import Navbar from "./Navbar";
import UserList from "./UserList";
import CoachList from "./CoachList";
import LoginAlert from "../../../componentes/LoginAlert";

const Plantilla = () => {
    return (
        <>
        <LoginAlert/>
            <div class="antialiased">
                {/* -----------------BARRA LATERAL----------------- */}
                <Navbar/>
                {/* -----------------CONTENIDO----------------- */}
                <main class="p-4 pt-20">
                    <Balance/>
                    <div
                        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-[27rem] mb-4 lg:grid-cols-2 grid-cols-1 grid "
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