const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const bookController = require("../controllers/bookController");
router.get("/myBooks", auth, bookController.getBooks);

module.exports = router;
