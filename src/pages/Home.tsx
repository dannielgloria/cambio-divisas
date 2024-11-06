import React from "react";
import CurrencyConverter from "../components/CurrencyConverter/CurrencyConverter";
import RotatingImage from "../components/Coin/RotatingImage";
import coin from "../resources/img/coin.png"

const Home: React.FC = () => {
    return (
        <div>
            <RotatingImage src={coin}/>
            <h1>Cambio de Divisas</h1>
            <CurrencyConverter />
        </div>
    )
}

export default Home;