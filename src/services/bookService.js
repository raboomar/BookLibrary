const Books = require("../models/Books");

const getBooks = async (req, res) => {
  try {
    const book = await Books.findOne({ user: req.user.id }).populate("user", [
      "name",
    ]);

    if (!book) {
      res.status(400).json({ msg: "There are no books for this user" });
    }
    res.json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server side error");
  }
};

module.exports = { getBooks };
