// src/app/espacios/page.tsx
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const CrearEspacio = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [capacidad, setCapacidad] = useState(0);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validaciones simples antes de enviar
    if (!nombre || capacidad <= 0) {
      setError('Por favor ingresa un nombre válido y capacidad mayor a 0.');
      return;
    }

    // Resetea el error si la validación fue correcta
    setError('');

    try {
      // Llamada a tu backend para crear un espacio
      const token = localStorage.getItem('token'); // Si tienes el token guardado aquí
      const response = await axios.post(
        'http://localhost:4545/espacios',  // Asegúrate de que esta sea la URL correcta de tu backend
        { nombre, descripcion, capacidad },
        {
          headers: {
            Authorization: `Bearer ${token}` // Incluye el token si es necesario
          }
        }
      );

      console.log('Espacio creado:', response.data);
      router.push('/espacios');  // Redirigir a la página de lista de espacios
    } catch (error) {
      console.error('Error al crear el espacio:', error);
      setError('Hubo un problema al crear el espacio.');
    }
  };

  return (
    <div>
      <h1>Crear un Nuevo Espacio</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre del espacio:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="capacidad">Capacidad:</label>
          <input
            type="number"
            id="capacidad"
            value={capacidad}
            onChange={(e) => setCapacidad(Number(e.target.value))}
          />
        </div>

        <button type="submit">Crear Espacio</button>
      </form>
    </div>
  );
};

export default CrearEspacio;
