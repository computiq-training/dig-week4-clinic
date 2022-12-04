import axios from "axios";
import {URL} from '../constants/web_service'
import { createContext,useState,useEffect } from "react";
import jwt_decode from "jwt-decode";

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
        const data = JSON.parse(localStorage.getItem('userData'))
        if(data)
        {
            if(data.token && isValidToken(data.token))
            {
                console.log('token found and added as default')
                setIsUserAuth(true)
                setUserData(data)
                axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
                
            }
            else{
                delete axios.defaults.headers.common.Authorization;
            }
           
        }
        else{
                delete axios.defaults.headers.common.Authorization;
        }

    }, []);

    // token decoding and validation functions
  const isValidToken = (accessToken) => {
  
    if (!accessToken) {
      return false;
    }
    const decoded = jwt_decode(accessToken);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  };
    const loginFun =  (username, password)=>{
        axios.post(`${URL}auth/signin`,{
            username:username,
            password:password
        })
        .then((res)=>{
            console.log(res)
            localStorage.setItem('userData',JSON.stringify(res.data.data))
            setIsUserAuth(true);
            setUserData(res.data.data)
            //setJwtToken(res.data.token)
            console.log(res.data)
            console.log('oken saved as default in axios is ',res.data.token)
            axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;

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