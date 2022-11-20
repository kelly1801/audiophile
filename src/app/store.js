import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import categoriesReducer from "./reducers/categoriesReducer"
import navBarReducer from "./reducers/navBarReducer";
import cartReducer from "./reducers/cartReducer";
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, categoriesReducer)
export const store = configureStore({
  reducer: {
    categories: persistedReducer,
    navBar: navBarReducer,
    cart: cartReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export const persistor = persistStore(store)