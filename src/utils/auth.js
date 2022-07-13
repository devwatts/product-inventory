import { useState, createContext, useContext } from 'react'
const API =  'https://wattsinventory.herokuapp.com'; 
//const API =  'http://localhost:3000';
const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = phone_num => {
    return new Promise(function(resolve,reject){
      var data = {
        'phone_num':'+91'+phone_num
      }
      fetch(`${API}/login`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(data)
      })
        .then(async (response) => {
                var data = await response.json();
                //console.log(data)
                if(data.message === "OTP sent successfully"){
                  resolve(true);
                }else{
                  resolve(false);
                }
        })
        .catch((err) => console.log(err));
    })
  }

  const confirmLogin = (phone_num,otp) => {
    return new Promise(function(resolve,reject){
      var data = {
        'otp':otp,
        'phone_num':'+91'+phone_num
      }
      //console.log(data)
    fetch(`${API}/login/confirm`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify(data)
    })
      .then(async (response) => {
              var data = await response.json();
              if(data.message === "Login Confirmed"){
                setUser(phone_num);
                resolve(true);
              }else{
                resolve(false);
              }
      })
      .catch((err) => console.log(err));
    })
  }

  const logout = () => {
    setUser(null);
    localStorage.clear();
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, confirmLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
