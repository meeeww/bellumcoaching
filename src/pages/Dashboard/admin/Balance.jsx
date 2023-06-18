const Balance = () =>{
    return(
        <>
            <div className="w-full balance pt-4 pb-4 pr-4">
                <div className="w-full h-[100px] bg-[var(--color-secundario)] shadow-2xl flex items-center justify-between p-2">
                    <div className="h-full w-[90px] bg-[var(--fondo-negro)] rounded-[50%]"></div>
                    <div className="w-[200px] h-full flex flex-col justify-center items-end">
                        <h3>1,257</h3>
                        <p>Visitors</p>
                    </div>
                </div>
                <div className="w-full h-[100px] bg-[var(--color-secundario)] shadow-2xl flex items-center justify-between p-2">
                    <div className="h-full w-[90px] bg-[var(--fondo-negro)]  rounded-[50%]"></div>
                    <div className="w-[200px] h-full flex flex-col justify-center items-end">
                        <h3>557</h3>
                        <p>Orders</p>
                    </div>
                </div>
                <div className="w-full h-[100px] bg-[var(--color-secundario)] shadow-2xl flex items-center justify-between p-2">
                    <div className="h-full w-[90px] bg-[var(--fondo-negro)]  rounded-[50%]"></div>
                    <div className="w-[200px] h-full flex flex-col justify-center items-end">
                        <h3>$11,256</h3>
                        <p>Sales</p>
                    </div>
                </div>
                <div className="w-full h-[100px] bg-[var(--color-secundario)] shadow-2xl flex items-center justify-between p-2">
                    <div className="h-full w-[90px] bg-[var(--fondo-negro)]  rounded-[50%]"></div>
                    <div className="w-[200px] h-full flex flex-col justify-center items-end">
                        <h3>$75,257</h3>
                        <p>Balances</p>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Balance;