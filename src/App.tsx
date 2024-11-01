import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { CurrencyProvider } from './context/CurrencyContext';

const App: React.FC = () => {
    return (
        <CurrencyProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </CurrencyProvider>
    );
};

export default App;