const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const bookController = require("../controllers/bookController");
const { check } = require("express-validator");
router.get("/myBooks", auth, bookController.getBooks);

router.post(
  "/",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("author", "Author is required").not().isEmpty(),
    ],
  ],
  bookController.addBook
);

router.delete("/:bookId", auth, bookController.deleteBook);

router.put("/;bookId", bookController.editBook);

module.exports = router;
