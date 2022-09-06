import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const books = JSON.parse(localStorage.getItem("books"));
const initialState = {
  books: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    reset: (state) => {},
  },
  extraReducers: (state) => initialState,
});

export const { rest } = booksSlice.actions;
export default booksSlice.reducer;
