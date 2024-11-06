import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrencyState {
    currencies: Record<string, any>;
    selectedCurrency: string;
    rates: Record<string, any>;
    error: string | null;
}

const initialState: CurrencyState = {
    currencies: {},
    selectedCurrency: 'MXN',
    rates: {},
    error: null,
};

const currencySlice = createSlice({
    name:'currency',
    initialState,
    reducers: {
        setCurrencies: (state, action: PayloadAction<Record<string, string>>) => {
            state.currencies = action.payload
        },
        setRates: (state, action: PayloadAction<Record<string, number>>) => {
            state.rates = action.payload
        },
        setSelectedCurrency: (state, action: PayloadAction<string>) => {
            state.selectedCurrency = action.payload
        },
        clearError: (state) => {
            state.error = null
        },
    }
});

export const { setCurrencies,setRates,setSelectedCurrency, clearError } = currencySlice.actions;

export default currencySlice.reducer