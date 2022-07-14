import fetch from "isomorphic-fetch";
const API = process.env.REACT_APP_PRODUCTION_SERVER || 'http://localhost:3000';

export const getAllProducts = (token) => {
  return fetch(`${API}/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization':'Bearer '+ token
      },
    })
    .then(async (response) => {
      return new Promise(async function (resolve, reject) {
        var data = await response.json();
        resolve(data)
      })
    })
    .catch((err) => console.log(err));
};

export const addNewProduct = async(token,data) => {
  return new Promise(async function(resolve,reject){
      await fetch(`${API}/products/addnewproduct`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization':'Bearer '+ token
      },
      body:JSON.stringify(data)
    })
    .then(async (response) => {
        var data = await response.json();
        console.log(data);
        resolve(true)
    })
    .catch((err) => console.log(err));
  })
}

export const deleteProduct = async(token,id) => {
  const data = {
    id:id
  }
  return new Promise(async function(resolve,reject){
    await fetch(`${API}/products/deleteproduct`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization':'Bearer '+ token
    },
    body:JSON.stringify(data)
  })
  .then(async (response) => {
      var data = await response.json();
      if(data.status === true){
        resolve(true);
      }else{
        resolve(false);
      }
      
  })
  .catch((err) => console.log(err));
})
}