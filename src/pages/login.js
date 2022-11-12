export const Login = ()=>{
    return <>
        <section className="bg-[#F2F8FF] h-screen flex flex-row justify-center items-center	">
            <div className="w-96 h-96 bg-[#3995FF] rounded-lg	">
                <form className="h-full flex flex-col justify-evenly items-center">
                    <input type="text" required/>
                    <input type="password" required/>
                    <input className="py-2 px-4 hover:bg-white rounded cursor-pointer	" type="submit" value="LOGIN"/>
                </form>
            </div>
        </section>
    </>
}