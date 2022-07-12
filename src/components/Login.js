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
        <div className="h-[100vh] bg-[aliceblue] flex justify-center items-center">
            <div className="bg-[white] h-[400px] w-[350px] shadow-lg rounded-lg flex flex-col items-center justify-center">
                <div className="flex items-center w-[80%] p-[5px] rounded-md border-[2px] mb-[20px]">
                    <img className="h-[22px]" src="user.png" />
                    <input maxLength={10} placeholder="Phone Number" className="ml-[6px] outline-none text-[14px]" type={'text'} onChange={e => setUser(e.target.value)} />
                </div>
                <button className="bg-[#ff3434] w-[30%] text-white rounded-md h-[40px]" onClick={() => handleLogin(user)}>LOGIN</button>
            </div>
        </div>
    )
}