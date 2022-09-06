import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookService from "./bookService";
const books = JSON.parse(localStorage.getItem("books"));
const initialState = {
  books: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const addBook = createAsyncThunk("books/add", async (book, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await bookService.addBook(book, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBook.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books.push(actions.payload);
      })
      .addCase(addBook.rejected, (state, actions) => {
        state.isLoading = false;
        state.isError = true;
        state.message = actions.payload;
      });
  },
});

export const { rest } = booksSlice.actions;
export default booksSlice.reducer;
