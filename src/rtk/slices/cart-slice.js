import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: () => {
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, clear } = cart.actions;
export default cart.reducer;
