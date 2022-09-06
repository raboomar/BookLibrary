import React from "react";
import "./newBookBtn.css";
const NewBookBtn = () => {
  return (
    <div className="add-book-container">
      <button
        onClick={() => {
          //   addNewBook();
        }}
        className="add-book-btn"
      >
        Add New Book
      </button>
    </div>
  );
};

export default NewBookBtn;
