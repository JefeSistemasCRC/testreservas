"use client"; // Marca el archivo como componente cliente
import {jwtDecode} from 'jwt-decode'; // Asegúrate de importar jwt-decode correctamente
import { useRouter } from 'next/navigation';
import React from 'react';

interface DecodedToken {
  nombre: string;
  rol: string;
}

const verifyRoleAndRedirect = () => {
  const router = useRouter();

  React.useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (!token) {
      router.push('/login');
      return;
    }

    try {
      const decodedToken = jwtDecode<DecodedToken>(token);

      if (decodedToken.rol === 'admin') {
        router.push('/admin');
      } else if (decodedToken.rol === 'user') {
        router.push('/user');
      }
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      router.push('/login');
    }
  }, [router]);
};

export default verifyRoleAndRedirect;
