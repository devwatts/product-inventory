import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

export const Login = () => {
    const [user, setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate()
    const handleLogin = (user) => {
        if(auth.login(user)){
            console.log('here');
            navigate('/');
        }
    }
    return (
        <div>
            <input type={'text'} onChange={e => setUser(e.target.value)} />
            <button onClick={() => handleLogin(user)}>LOGIN</button>
        </div>
    )
}