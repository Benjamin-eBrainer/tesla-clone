import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./cars/carSlice.js";

export const store = configureStore({
    reducer: {
        car: carReducer
    }
})