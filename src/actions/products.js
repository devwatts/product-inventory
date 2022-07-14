import fetch from "isomorphic-fetch";
const API = 'https://wattsinventory.herokuapp.com/login'
//const API = process.env.PRODUCTION_SERVER || 'http://localhost:3000';

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
