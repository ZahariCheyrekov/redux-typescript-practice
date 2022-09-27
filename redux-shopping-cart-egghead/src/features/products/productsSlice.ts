import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../app/api";
import { Products } from "./Products";

export interface ProducState {
    products: { [id: string]: Product };
}

const initialState: ProducState = {
    products: {}
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        recievedProducts(state, action: PayloadAction<Product[]>) {
            const products = action.payload;
            products.forEach(product => {
                state.products[product.id] = product;
            });
        }
    }
});

export const { recievedProducts } = productSlice.actions;
export default productSlice.reducer;