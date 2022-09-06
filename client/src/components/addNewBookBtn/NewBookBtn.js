import React from "react";
import "./newBookBtn.css";
import { useDispatch } from "react-redux";
import { show } from "../../features/modal/modalSlice";
const NewBookBtn = () => {
  const dispatch = useDispatch();

  const addNewBook = () => {
    dispatch(show());
  };

  return (
    <div className="add-book-container">
      <button
        onClick={() => {
          addNewBook();
        }}
        className="add-book-btn"
      >
        Add New Book
      </button>
    </div>
  );
};

export default NewBookBtn;
