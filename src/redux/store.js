import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../redux/bookSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
