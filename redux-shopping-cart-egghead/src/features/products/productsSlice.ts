import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../app/api";

export interface ProducState {
    products: { [id: string]: Product };
}

const initialState: ProducState = {
    products: {}
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
});

export default productSlice.reducer;