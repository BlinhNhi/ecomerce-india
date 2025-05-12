import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'

console.log(cartSlice);
export const store = configureStore({
    reducer: {
        cart: cartSlice
    },
})