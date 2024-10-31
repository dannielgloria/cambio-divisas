import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate
import { useReduxDispatch, useReduxSelector } from '../../hooks/reduxHooks';
import { login } from '../../redux/authSlice';
import './LoginForm.scss'
import { Button, TextField } from '@mui/material';

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useReduxDispatch();
  const isAuthenticated = useReduxSelector((state) => state.auth.isAuthenticated); // Asegúrate de que esto es correcto
  const error = useReduxSelector((state) => state.auth.error);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');  // Redirecciona cuando el usuario esté autenticado
    }
  }, [isAuthenticated, navigate]);  // Dependencias del useEffect

  const handleLogin = () => {
    dispatch(login({ username, password }));
  };

  return (
    <div className="currency-converter">
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="select-field"
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="select-field"
        fullWidth
      />
      <div className="button-container">
            <Button onClick={handleLogin} variant="contained" color="primary">Entrar</Button>
      </div>
      {error && <p>Username o Password incorrectos, intenta de nuevo</p>}
    </div>
  );
};
