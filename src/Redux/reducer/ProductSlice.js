import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    loading: true,
    products: [],
    carts: []
};

//fetch all products
export const fetchAllProducts = createAsyncThunk(
    'fetchproducts',
    async () => {
        const result = await axios.get('https://fakestoreapi.com/products')
        return result.data
    }
)
const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        AddtoCart: (state, action) => {
            const oldcartItem = state.carts.find((items) => items.id === action.payload);
            if (oldcartItem) {
                oldcartItem.quantity = oldcartItem.quantity + 1
            }
            else {
                const newcartItem = state.products.find((items) => items.id === action.payload)
                newcartItem.quantity = 1
                state.carts.push(newcartItem)
            }
        },

        deleteFromCart: (state, action) => {
            const remaining = state.carts.filter((items) => {
                return items.id !== action.payload
            })
            state.carts = remaining
        },
        RemoveFromCart: (state, action) => {
            const cartItem = state.carts.find((items) => items.id === action.payload)

            if (cartItem) {
                cartItem.quantity = cartItem.quantity - 1
                console.log(cartItem.quantity);
                if (cartItem.quantity <= 0) {
                    state.carts = state.carts.filter((items) => items.id !== action.payload)
                    console.log(state.carts);
                }

            }

        },

    },

    extraReducers: {
        [fetchAllProducts.fulfilled]: (state, action) => {
            state.loading = false
            state.products = action.payload
        },
    }
});

export const { AddtoCart, RemoveFromCart, deleteFromCart } = ProductSlice.actions
export default ProductSlice.reducer