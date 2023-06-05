import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  items: [],
  total: 0,
};

const shopingCartSlice = createSlice({
    name: "shopingCart",
    initialState,
    reducers: {
      addToCart: (state, action) => {
        state.items.push(action.payload);
      },
      removeFromCart: (state, action) => {
        state.items = state.items.filter((item) => item.sku !== action.payload);

      },
      calculateTotal: (state) => {
        state.total = state.items.reduce((total, item) => total + item.price, 0);
      },
    },
  });
export const { addToCart, removeFromCart,calculateTotal } = shopingCartSlice.actions;
export default shopingCartSlice.reducer