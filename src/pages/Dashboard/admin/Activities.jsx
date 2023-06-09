const Activities = () => {
    return (
        <>
            <div className="w-full h-[300px]  activities flex p-4">
                <div className="w-full h-full bg-red-300 rounded-xl">
                    <div className="w-full h-[50px] flex items-center justify-between p-4 bg-[var(--fondo-negro)] recent_activities">
                        <p className="text-[var(--fondo-blanco)]">Recent Activities</p>
                        <button className="text-[var(--fondo-negro)] bg-[var(--fondo-blanco)] rounded-lg text-[16px] px-4">SEE ALL</button>
                    </div>
                    <div className="w-full h-[50px] bg-[var(--fondo-negro)] flex items-center p-4">
                        <p className="text-[var(--fondo-blanco)] ">Today</p>
                    </div>
                </div>  
            </div>
            
        </>
    )
}

export default Activities;