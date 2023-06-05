import { createSlice } from "@reduxjs/toolkit"

const initialState = [];

const favoriteSlice = createSlice({
    name: 'favoriteCart',
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            const product = action.payload;
            const existingIndex = state.findIndex(item => item.sku === product.sku);
  
            if (existingIndex !== -1) {
                state.splice(existingIndex, 1);
            } else {
                state.push(product);
            }
        },
        removeFromFavorite: (state, action) => {
            return state.filter((item) => item.sku !== action.payload);
        },
    }
})
export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer