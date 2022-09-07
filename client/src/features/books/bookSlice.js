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

export const getBooks = createAsyncThunk(
  "books/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await bookService.getBooks(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "books/delete",
  async (bookId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await bookService.deleteBook(bookId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

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
      })

      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books = actions.payload;
      })
      .addCase(getBooks.rejected, (state, actions) => {
        state.isLoading = false;
        state.isError = true;
        state.message = actions.payload;
      });
  },
});

export const { reset } = booksSlice.actions;
export default booksSlice.reducer;
