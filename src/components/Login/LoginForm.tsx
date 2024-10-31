import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useReduxDispatch, useReduxSelector } from '../../hooks/reduxHooks'; // Asegúrate de que las rutas sean correctas
import { login } from '../../redux/authSlice';

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useReduxDispatch();
  const error = useReduxSelector((state) => state.auth.error);

  const handleLogin = () => {
    dispatch(login({ username, password }));
  };

  return (
    <div>
      <h2>Login Form</h2>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <Button onClick={handleLogin} variant="contained" color="primary">Entrar</Button>
      {error && <p>Error: {error}</p>}
    </div>
  );
};
