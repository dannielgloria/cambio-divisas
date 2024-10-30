import React, { createContext, useState } from "react";

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
    const [currencies, setCurrencies] = useState({});
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    const [selectedDate, setSelectedDate ] = useState( new Date().toISOString().slice(0,10));
    const [rates, setRates] = useState({});

    return(
        <CurrencyContext.Provider value={{
            currencies, setCurrencies,
            selectedCurrency, setSelectedCurrency,
            selectedDate, setSelectedDate,
            rates, setRates
        }}>
            {children}
        </CurrencyContext.Provider>
    )
};