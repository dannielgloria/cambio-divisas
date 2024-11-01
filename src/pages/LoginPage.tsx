import React from 'react';
import { LoginForm } from '../components/Login/LoginForm';
import { useTheme } from '@mui/material/styles';
import './LoginPage.scss';

const LoginPage: React.FC = () => {
  const theme = useTheme();

  return (
    <div className="login-page" style={{ backgroundColor: theme.palette.background.default }}>
      <div className="login-container" style={{ backgroundColor: theme.palette.background.paper }}>
        <h1>Iniciar Sesión</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
