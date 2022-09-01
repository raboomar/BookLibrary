const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  books: [
    {
      title: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      readIt: {
        type: Boolean,
        required: true,
      },
    },
  ],
});

module.exports = Books = mongoose.model("books", BookSchema);
