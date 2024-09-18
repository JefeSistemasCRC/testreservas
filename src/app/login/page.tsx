'use client'; // Asegúrate de agregar esta línea al principio del archivo
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../../services/auth';
import styles from './page.module.css'; // Importa el archivo CSS





const LoginPage = () => {
  const [email, setEmail] = useState(''); // Cambiado de username a email
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await login(email, password);
    
      router.push('/roles');

    } catch (err) {
      console.error('Error de inicio de sesión:', err); // Imprime detalles del error
      setError('Login failed');
    }
  };


  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email" // Cambiado a email para validación del input
            value={email} // Cambiado de username a email
            onChange={(e) => setEmail(e.target.value)} // Cambiado de username a email
            placeholder="Email"
            required
            className={styles.input} // Aplica la clase CSS
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className={styles.input} // Aplica la clase CSS
          />
          <button type="submit" className={styles.button}>Login</button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};



export default LoginPage;


