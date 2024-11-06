import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import { CurrencyProvider } from './context/CurrencyContext';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC = () => {
    return (
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
    );
};

export default App;