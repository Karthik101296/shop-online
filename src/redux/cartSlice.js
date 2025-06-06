import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increment: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrement: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      else return state.filter((item) => item.id !== action.payload);
    },
    removeFromCart: (state, action) =>
      state.filter((item) => item.id !== action.payload),
    clearCart: () => [],
  },
});

export const { addToCart, increment, decrement, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
