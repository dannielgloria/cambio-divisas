import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrencyState {
    currencies: Record<string, string>;
    rates: Record<string, number>;
    selectedCurrency: string;
    error: string | null;
}

const initialState: CurrencyState = {
    currencies: {},
    rates: {},
    selectedCurrency: 'USD', // Puedes definir un valor predeterminado
    error: null,
};

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setCurrencies: (state, action: PayloadAction<Record<string, string>>) => {
            state.currencies = action.payload;
        },
        setRates: (state, action: PayloadAction<Record<string, number>>) => {
            state.rates = action.payload;
        },
        setSelectedCurrency: (state, action: PayloadAction<string>) => {
            state.selectedCurrency = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        }
    },
});

export const { setCurrencies, setRates, setSelectedCurrency, setError, clearError } = currencySlice.actions;

export default currencySlice.reducer;
