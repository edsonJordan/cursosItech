import api from './api';

export async function getAll() {
  try {
    const response = await api.get('/custom/v2/cursos');    
    return response.data
  } catch (error) {
    // Manejar errores de inicio de sesión
    throw error;
  }
}
