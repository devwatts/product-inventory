import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

export const Login = () => {
    const [phone, setPhone] = useState('');
    const [otpDiv, setOtpDiv] = useState(false);
    const [otp, setOtp] = useState('')
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin = async(phone) => {
        await auth.login(phone)
        .then(res => {
            if(res){
                setOtpDiv(true);
            }else{
                alert('Internal Server Error\n Please try after some time')
            }
        })
    }

    const handleOtp = async() => {
        await auth.confirmLogin(phone,otp)
        .then(res => {
            if(res){
                navigate('/');
            }else{
                alert('You have entered the wrong OTP!')
            }
        })
    }

    return (
        <div className="h-[100vh] bg-[aliceblue] flex justify-center items-center">
            <div className="bg-[white] h-[400px] w-[350px] shadow-lg rounded-lg flex flex-col items-center justify-center">
                <div className="h-[20%]">
                    <span className="font-bold text-[30px]">Sign In</span>
                </div>
                <div className="flex items-center w-[80%] p-[5px] rounded-md border-[2px] mb-[20px]">
                    <img className="h-[22px]" alt="user" src="user.png" />
                    <input disabled={otpDiv} maxLength={10} placeholder="Phone Number" className="ml-[6px] outline-none text-[14px]" type={'text'} onChange={e => setPhone(e.target.value)} />
                </div>
                {
                otpDiv?
                <div className="w-[100%]">
                    <div className="flex m-auto justify-between items-center w-[50%] p-[5px] rounded-md border-[2px] mb-[20px]">
                        <input type={'text'} minLength={6} maxLength={6} className='ml-[6px] outline-none text-[14px] w-[30%]' onChange={e => setOtp(e.target.value)} />
                        <button className="bg-[#ff3434] pl-[10px] pr-[10px] w-[fit-content] text-[12px] text-white rounded-md h-[20px]" onClick={() => handleOtp(phone,otp)}>Confirm OTP</button>
                    </div>
                </div>
                :''}
                <button disabled={otpDiv} className="bg-[#ff3434] w-[30%] text-white rounded-md h-[40px]" onClick={() => handleLogin(phone)}>LOGIN</button>
            </div>
        </div>
    )
}