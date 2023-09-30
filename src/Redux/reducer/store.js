import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";


const store = configureStore({
    reducer: {
        allProducts: ProductSlice
    }
})

export default store