const LoginAlert = () => {
    return (
        <>
            <div className="absolute top-100 right-20 w-[300px] h-[70px] bg-red-300 flex alertasLogin items-center justify-between pr-4 shadow-lg">
                <div className="h-full w-[6px] bg-red-500">
                </div>
                <p>Login failed</p>
                <button className="text-[20px] px-2 rounded-[50%]">X</button>
            </div>
        </>
    )
}

export default LoginAlert;