import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/productsSlice";
import shopingCartSlice from "../features/shopingCartSlice";
import favoriteSlice from "../features/favoriteSlice";
import modalSlice from "../features/modalSlice";

const store = configureStore({
    reducer: {
        shopingCart: shopingCartSlice,
        favoriteCart: favoriteSlice,
        products: productsSlice,
        modal:modalSlice
    },
});

export default store;