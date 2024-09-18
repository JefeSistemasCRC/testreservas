"use client";

import React from 'react';
import { useAuthRedirect } from '../utils/cerrarseccion'; // Asegúrate de ajustar la ruta según tu estructura de carpetas
import styles from './style.module.css'; // Asegúrate de ajustar la ruta según tu estructura de carpetas
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar el CSS de Bootstrap

const AdminDashboard = () => {
  useAuthRedirect("admin"); // Verifica el token y redirige si es necesario

  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2 className={styles.title}>Admin Dashboard</h2>
        <div className="d-flex flex-column">
          <button
            className={styles.navButton}
            onClick={() => handleNavigation('/admin/espacios')}
          >
            Crear Espacios
          </button>
          <button
            className={styles.navButton}
            onClick={() => handleNavigation('/admin/reservas')}
          >
            Crear Reservas
          </button>
          <button
            className={styles.navButton}
            onClick={() => handleNavigation('/admin/modificar-reservas')}
          >
            Modificar Reservas
          </button>
          <button
            className={styles.navButton}
            onClick={() => handleNavigation('/admin/eliminar-reservas')}
          >
            Eliminar Reservas
          </button>
        </div>
        <button
          className={styles.logoutButton}
          onClick={() => {
            localStorage.removeItem('access_token');
            window.location.href = '/login'; // Redirige a la página de login
          }}
        >
          Cerrar Sesión
        </button>
      </div>
      <div className={styles.content}>
        {/* Contenido principal aquí */}
      </div>
    </div>
  );
};

export default AdminDashboard;
