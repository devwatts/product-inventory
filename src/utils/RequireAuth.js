import { Navigate } from "react-router-dom";
import { useAuth } from "./auth"

export const RequireAuth = ({children}) => {
    const auth = useAuth();
    const loggedUser = JSON.parse(localStorage.getItem('user'));

    const tokenVerification = async() =>{
        await auth.verifyToken()
        .then(response => {
            if(response){
                return children;
            }else{
                localStorage.clear();
                return <Navigate to='/login' />
            }
        })
    }

    if(!auth.user || loggedUser === null || loggedUser.user === undefined || loggedUser.token === undefined){
        return <Navigate to='/login' />
    }else{
        if(tokenVerification()){
            return children;
        }else{
            return <Navigate to='/login' />
        }
    }
    
}