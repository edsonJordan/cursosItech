import api from './api';
import store from '../store'; 

export async function login(username, password) {
  try {
    const response = await api.post('jwt-auth/v1/token', {
      username,
      password,
    });
    // const { token } = response.data;
    // Almacenar el token en localStorage
    localStorage.setItem('jwtToken', JSON.stringify(response.data));
    store.commit('SET_IS_LOGIN', true)

    return response;
  } catch (error) {
    // Manejar errores de inicio de sesión
    throw error;
  }
}
export async function register(user) {
  try {
    const response = await api.post('customPlugin/v2/subscribers', user
    );
    // const { token } = response.data;
    // Almacenar el token en localStorage
   /*  localStorage.setItem('jwtToken', JSON.stringify(response.data));
    store.commit('SET_IS_LOGIN', true) */
    return response;
  } catch (error) {
    // Manejar errores de inicio de sesión
    // console.log(response);
    throw error;
  }
}