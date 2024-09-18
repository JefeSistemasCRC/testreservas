// Marca este archivo como un Componente de Cliente
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Usa next/navigation en lugar de next/router

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/login'); // Redirige a la página de login
  }, [router]);

  return <div>Loading...</div>; // Muestra un mensaje mientras redirige
};

export default HomePage;
