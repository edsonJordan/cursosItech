import axios from 'axios';

//const baseURL = 'http://localhost/2023/wordpress/prueba-tecnica/wp-json/';
const baseURL = 'https://cursositec.com/system/wp-json/';

//const baseURL = import.meta.env.VITE_APP_REST;


const instance = axios.create({
  baseURL,
});

export default instance;