import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import { CurrencyProvider } from './context/CurrencyContext';
import './scss/global.scss'; // Importa tus estilos globales

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CurrencyProvider>
        <Router>
            <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<PrivateRoute />}>
                <Route index element={<Home />} />
            </Route>
            </Routes>
        </Router>
      </CurrencyProvider>
    </ThemeProvider>
  );
};

export default App;
