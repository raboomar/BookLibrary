const bookService = require("../services/bookService");

const getBooks = (req, res) => {
  const getBooks = bookService.getBooks(req, res);
};

module.exports = { getBooks };
