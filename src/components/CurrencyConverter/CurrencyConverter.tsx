import React, { useContext, useEffect, useState, ChangeEvent} from "react";
import { fetchCurrecies, fetchRates } from "../../api/RateAPI";
import { CurrencyContext, CurrencyContextProps } from "../../context/CurrencyContext";
import './CurrencyConverter.scss'
import { Button, MenuItem, TextField } from "@mui/material";


const CurrencyConverter: React.FC = () => {
    const context = useContext<CurrencyContextProps | undefined>(CurrencyContext);
    if (!context) {
        throw new Error("CurrencyContext no está disponible");
      }

    const {
        currencies, setCurrencies,
        selectedCurrency, setSelectedCurrency,
        selectedDate, setSelectedDate,
        rates, setRates
    } = context;

    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const getCurrencies = async()=>{
            try {
                const data = await fetchCurrecies();
                setCurrencies(data);
            } catch (err) {
                setError('Error al obtener las monedas');  
            }
            
        }
    getCurrencies();
    }, [setCurrencies]);

    const handleConvert = async () => {
        try {
            const data = await fetchRates(selectedDate, 'EUR', selectedCurrency)
            setRates(data.rates);
        } catch (err) {
            setError('Error al convertir las monedas')
        }
    }

    const handleCurrencyChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedCurrency(e.target.value)
    }

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(e.target.value)
    }

    return(
        <div className="currency-converter">
            {error && <p className="error">{error}</p>}
            <TextField
                select
                label="Moneda base"
                value={selectedCurrency}
                onChange={handleCurrencyChange}
                variant="outlined"
                fullWidth
            >
                {Object.keys(currencies).map((key) =>(
                    <MenuItem
                    key={key}
                    value={key}
                    >{currencies[key]}</MenuItem>
                ))}
            </TextField>
            <TextField
                type="date"
                label="Fecha"
                value={selectedDate}
                onChange={handleDateChange}
                variant="outlined"
                fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleConvert}>Convertir</Button>
        </div>
    )


}