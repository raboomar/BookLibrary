import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import bookReducer from "../features/books/bookSlice";
import moduleReducer from "../features/modal/modalSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: bookReducer,
    showModal: moduleReducer,
  },
});
