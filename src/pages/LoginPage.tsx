import React from 'react';
import { LoginForm } from '../components/Login/LoginForm'; // Asegúrate de que la ruta es correcta.

const LoginPage: React.FC = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Asegura que la página ocupe la altura completa de la ventana.
        backgroundColor: '#f0f2f5', // Fondo claro para la página de login, ajusta según tu diseño.
        padding: '20px' // Añade algo de padding para manejar pequeños dispositivos.
    }}>
      <div style={{
          width: '100%',
          maxWidth: '360px', // Limita el ancho del formulario para dispositivos grandes.
          padding: '20px',
          borderRadius: '8px', // Bordes redondeados para el formulario.
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)', // Sombra sutil para el formulario.
          backgroundColor: 'white', // Fondo blanco para el formulario.
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>Iniciar Sesión</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
