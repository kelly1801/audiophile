import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from "./Categories/categoriesReducer";
const store = configureStore({
  reducer: {
    categories: categoriesReducer
  },
});

export default store
