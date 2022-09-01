const bookService = require("../services/bookService");

const getBooks = (req, res) => {
  const getBooks = bookService.getBooks(req, res);
};

const addBook = async (req, res) => {
  const addBook = bookService.addBook(req, res);
};

const deleteBook = async (req, res) => {
  const deleteBook = bookService.deleteBook(req, res);
};
module.exports = { getBooks, addBook, deleteBook };
