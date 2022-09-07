import React from "react";
import "./noBooks.css";
const NoBooks = () => {
  return (
    <div className="noBooks-container">
      <h1>
        Oh no looks like your library is empty!
        <br />
        Click add new book to add a book to your library
      </h1>
    </div>
  );
};

export default NoBooks;
