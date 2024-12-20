import axios from 'axios';
import { currencyURL } from '../config/env';

const baseURL = currencyURL;

export const fetchCurrecies = async () => {
    try {
        const response = await axios.get(`${baseURL}currencies`);
        return response.data;
    } catch (error) {
        console.log('Error fetching currencies: ', error);
        throw error;
    }
};

export const fetchRates = async (date: string, base: string, symbols: string) => {
    try {
        const response = await axios.get(`${baseURL}${date}?base=${base}&symbols=${symbols}`);
        return response.data;
    } catch (error) {
        console.log('Error fetching currencies: ', error);
        throw error;
    }
};

