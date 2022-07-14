import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./auth";
import LoadingScreen from "../components/LoadingScreen"

export const RequireAuth = ({children}) => {
    const auth = useAuth();
    const [userVerification, setUserVerification] = useState(false);
    const loggedUser = JSON.parse(localStorage.getItem('user'));

    const tokenVerification = async() =>{
        await auth.verifyToken()
        .then(response => {
            if(response){
                return true;
            }else{
                localStorage.clear();
                return <Navigate to='/login' />
            }
        })
    }

    if(!auth.user || loggedUser === null || loggedUser.user === undefined || loggedUser.token === undefined){
        return <Navigate to='/login' />
    }else{
        if(!userVerification){
            if(tokenVerification()){
                setUserVerification(true);
            }else{
                return <Navigate to='/login' />
            }
        }else if(userVerification){
            return children;
        }else{
            return <LoadingScreen></LoadingScreen>
        }
    }
    
}