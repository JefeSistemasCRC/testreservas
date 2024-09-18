// utils/auth.js
import api from './api';

export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    
    // Imprime toda la respuesta para verificar la estructura
    console.log('Respuesta del post:', response);

    // Desestructura el token del lugar correcto
    const { access_token } = response.data.data;

    // Guardar el token en el localStorage
    localStorage.setItem('access_token', access_token);

    console.log('Token:', localStorage.getItem('access_token'));

    return response.data;
  } catch (error) {
    console.error('Error en el login:', error);
    throw error;
  }
};
