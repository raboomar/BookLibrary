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

const bookService = {
  addBook,
};

export default bookService;
