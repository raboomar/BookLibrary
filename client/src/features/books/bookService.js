import axios from "axios";

const addBook = async (book, token) => {
  const url = "http://localhost:5001/api/v1/books";
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  const body = JSON.stringify(book);
  const response = await axios.post(url, body, config);
  return response.data;
};

const getBooks = async (token) => {
  const url = "http://localhost:5001/api/v1/books/myBooks";
  const config = {
    headers: {
      "x-auth-token": token,
    },
  };

  const response = await axios.get(url, config);

  return response.data;
};

const deleteBook = async (bookId, token) => {
  const url = `http://localhost:5001/api/v1/books/${bookId}`;
  const config = {
    headers: {
      "x-auth-token": token,
    },
  };

  const response = await axios.delete(url, config);

  return response.data;
};

const bookService = {
  addBook,
  getBooks,
  deleteBook,
};

export default bookService;
