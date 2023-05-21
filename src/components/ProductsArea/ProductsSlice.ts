import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import Product from '../../models/Product';

interface ProductState {
    products:Product[],
    product?:Product
}

const initialState: ProductState = {
    products: []
}

export const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setProducts: (state, { payload: products }: PayloadAction<Product[]>) => {
            state.products = products;
        },        
        setProduct: (state, action: PayloadAction<Product>) => {
            const { payload } = action; 
            state.product = payload;
        },
        addProduct: (state, { payload: product }: PayloadAction<Product>) => {
            state.products.push(product);
        },
        updateProduct: (state, { payload: product }: PayloadAction<Product>) => {
            const indexToUpdate = state.products.findIndex((p) => p.id === product.id);

            if (indexToUpdate >= 0) {
                state.products[indexToUpdate] = product;
            }
            state.product = product;
        },
        deleteProduct: (state, { payload: id }: PayloadAction<number>) => {
            const indexToDelete = state.products.findIndex((p) => p.id === id);
            if (indexToDelete >= 0) {
                state.products.splice(indexToDelete, 1);
            }
        }
    }})

export const { setProducts, addProduct, updateProduct, deleteProduct, setProduct } = productSlice.actions;

export default productSlice.reducer;