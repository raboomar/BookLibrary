import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../features/books/bookSlice";
import { dontShow } from "../../features/modal/modalSlice";
import { toast } from "react-toastify";
import "./addBookForm.css";
const AddBookForm = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: "",
    author: "",
    readIt: false,
  });
  const { title, author, readIt } = book;

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    setBook({ ...book, readIt: readIt ? false : true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    toast.success("Book added");
    dispatch(dontShow());
  };
  return (
    <div className="form addBook-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h3 className="addNewBook-title">Add new book</h3>
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
              handleClick(e);
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
