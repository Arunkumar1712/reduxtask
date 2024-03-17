import { configureStore } from "@reduxjs/toolkit";
import addexpReducer from "./redux/cartpageSlice"
export const store = configureStore({
    reducer: {
       myCartData : addexpReducer
    }
})