import { logout } from '../utils/auth';
import { useRouter } from 'next/router';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login'); // Redirige al login después de cerrar sesión
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
