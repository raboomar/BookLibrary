const Books = require("../models/Books");
const User = require("../models/Users");
const { validationResult } = require("express-validator");
const { default: mongoose } = require("mongoose");
const getBooks = async (req, res) => {
  try {
    const book = await Books.find({ user: req.user.id });

    if (!book) {
      res.status(400).json({ msg: "There are no books for this user" });
    }
    res.json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server side error");
  }
};

const addBook = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, author, readIt } = req.body;

  const newBook = {
    user: req.user.id,
    title,
    author,
    readIt,
  };

  let book = new Books(newBook);
  let user;
  try {
    user = await User.findById(req.user.id);
  } catch (error) {
    res.status(500).send({ errors: errors.array() });
  }
  if (!user) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await book.save({ session: session });
    user.books.push(book);
    await user.save({ session: session });
    await session.commitTransaction();
    res.json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};

const deleteBook = async (req, res) => {
  const bookId = req.params.bookId;
  try {
    let book = await Books.findById(bookId);
    let user = await User.findById(req.user.id);
    user.books.pull(bookId);
    await user.save();
    await book.remove();
    res.status(200).json({ id: bookId });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};

const editBook = async (req, res) => {
  const bookId = req.params.bookId;
  const { title, author, readIt } = req.body;

  try {
    let book = await Books.findById(bookId);

    const updatedBook = {
      user: req.user.id,
      title,
      author,
      readIt,
    };
    if (book.title != title) {
      updatedBook.title = title;
    }
    if (book.author != author) {
      updatedBook.author = author;
    }
    if (book.readIt != readIt) {
      updatedBook.readIt = readIt;
    }

    await Books.findByIdAndUpdate(bookId, updatedBook, {
      new: true,
    });
    const newBookList = await Books.find({ user: req.user.id });
    res.status(200).json(newBookList);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};

module.exports = { getBooks, addBook, deleteBook, editBook };
