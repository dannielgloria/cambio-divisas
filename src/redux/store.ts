import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './currencySlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
