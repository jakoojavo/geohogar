import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
  timeout: 10000,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});
api.interceptors.request.use(
  (config) => {
    console.log("Petición:", config); 
    return config;
  },
  (error) => {
    console.error("Error en la petición:", error); 
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("Respuesta:", response); 
    return response;
  },
  (error) => {
    console.error("Error en la respuesta:", error); 
    return Promise.reject(error);
  }
);




export default api;

