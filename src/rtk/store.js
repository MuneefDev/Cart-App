import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart-slice.js";
import productsSlice from "./slices/products-slice.js";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});
