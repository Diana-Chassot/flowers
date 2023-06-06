import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from "redux-persist/lib/storage";

import productsSlice from "../features/productsSlice";
import shopingCartSlice from "../features/shopingCartSlice";
import favoriteSlice from "../features/favoriteSlice";
import modalSlice from "../features/modalSlice";
import formSlice from "../features/formSlice";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    shopingCart: shopingCartSlice,
    favoriteCart: favoriteSlice,
    products: productsSlice,
    modal: modalSlice,
    form: formSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    /* middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }), */
});

const persistor = persistStore(store);

export { store, persistor };