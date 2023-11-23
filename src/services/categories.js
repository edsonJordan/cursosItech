import api from './api';
import store from '../store'; 

export async function getAll() {
  try {
    const response = await api.get('/custom/v2/categorias');
    
    return response.data
  } catch (error) {
    // Manejar errores de inicio de sesión
    throw error;
  }
}
