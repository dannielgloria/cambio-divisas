import React from 'react';
import CurrencyConverter from '../components/CurrencyConverter/CurrencyConverter';
import RotatingImage from '../components/Coin/RotatingImage';
import sampleImage from '../resources/img/logo512.png';
import './Home.scss';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <RotatingImage src={sampleImage} alt="Moneda giratoria" />
            <h1>Cambio de Divisas</h1>
            <CurrencyConverter /> 
        </div>
    );
};

export default Home;
