import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./addBookForm.css";
const AddBookForm = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    readIt: false,
  });
  const { title, author, readIt } = book;

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {};
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h4>Add new book</h4>
        <div className="form-group">
          <label htmlFor="text"> Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Author</label>
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            name="readIt"
            value={readIt}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label htmlFor="text">Have you read it?</label>
        </div>
        <input
          type="submit"
          name="btn btn-primary"
          value="Add book"
          className="addBook-btn"
        />
      </form>
    </div>
  );
};

export default AddBookForm;
