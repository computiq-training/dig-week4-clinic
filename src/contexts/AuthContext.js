import axios from "axios";
import { createContext,useState,useEffect } from "react";
const defaultValue = {
    isAuth:false,
    user:null,
    login:()=>Promise.resolve(),
    logout: ()=>{}
}
export const AuthContext = createContext(defaultValue)


export const AuthProvider = ({children})=>{
    const [userData, setUserData] = useState(null);
    const [isUserAuth, setIsUserAuth] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem('userData')
        if(data)
        {
            setIsUserAuth(true)
            setUserData(data)
        }

    }, []);
    const loginFun =  (username, password)=>{
        console.log('login triggered')
        axios.post('http://127.0.0.1:5000/api/v1/auth/signin',{
            username:username,
            password:password
        })
        .then((res)=>{
            console.log(res)
            localStorage.setItem('userData',res.data)
            setIsUserAuth(true);
            setUserData(res.data)
            console.log('state updated')
        })
        .catch((e=>{
            console.log('Error')
            console.error(e)
        }))
    }

    const logoutFun = ()=>{
        localStorage.removeItem('userData')
        setIsUserAuth(false)
        setUserData(null)
    }
    console.log('is auth value: ',isUserAuth)
    return <AuthContext.Provider
    value={{
        isAuth:isUserAuth,
        user:userData,
        login:loginFun,
        logout:logoutFun
    }}>
        {children}
    </AuthContext.Provider>
}