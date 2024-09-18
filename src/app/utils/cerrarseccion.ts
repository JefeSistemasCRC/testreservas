// src/app/utils/cerrarseccion.ts
"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useAuthRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      router.push('/login'); // Redirige a la página de login si no hay token
    }
  }, [router]);
};
