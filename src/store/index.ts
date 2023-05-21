import { configureStore,createSlice } from "@reduxjs/toolkit";
import productsReducer from '../components/ProductsArea/ProductsSlice';

const store = configureStore({
    reducer: {
        productsState: productsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store