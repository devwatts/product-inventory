import { useState, createContext, useContext } from 'react'
const API = process.env.REACT_APP_PRODUCTION_SERVER || 'http://localhost:3000';
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

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
                setUser(data.loggedUser);
                localStorage.clear();
                localStorage.setItem('user',JSON.stringify(data.loggedUser));
                resolve(true);
              }else{
                resolve(false);
              }
      })
      .catch((err) => console.log(err));
    })
  }

  const verifyToken = () => {
    return new Promise(function (resolve, reject) {
      var loggedUser = JSON.parse(localStorage.getItem('user'))
      if (loggedUser !== null && (loggedUser.user !== undefined && loggedUser.user !== null) && (loggedUser.token !== undefined && loggedUser.token !== null)) {
        var data = {
          'phone_num':loggedUser.user,
          'token': loggedUser.token
        }
        //console.log(data)
        fetch(`${API}/login/verify`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(async (response) => {
            var data = await response.json();
            //console.log(data);
            if(data.status === true){
              setUser({
                user:loggedUser.user,
                token:loggedUser.token
              });
              resolve(true);
            }else{
              resolve(false);
            }
          })
          .catch((err) => console.log(err));
      }
    })
  }

  const logout = () => {
    localStorage.clear();
    setUser({});
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, confirmLogin,verifyToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
