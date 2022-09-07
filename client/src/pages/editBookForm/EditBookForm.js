import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dontShowEdit } from "../../features/modal/modalSlice";
import { editBook } from "../../features/books/bookSlice";
import { toast } from "react-toastify";
const EditBookForm = ({ currentBook }) => {
  const dispatch = useDispatch();
  const { editModal } = useSelector((state) => state.showModal);

  const [book, setBook] = useState({
    title: currentBook.title,
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
  useEffect(() => {
    setBook({
      title: currentBook.title,
      author: currentBook.author,
      readIt: currentBook.readIt,
    });
  }, [currentBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookData = {
      book,
      bookId: currentBook._id,
    };
    dispatch(editBook(bookData));
    dispatch(dontShowEdit());
    toast.success(`${book.title} updated.`);
  };
  return (
    <>
      {editModal ? (
        <div className="modal-container">
          <div className="modal-content">
            <span
              onClick={() => {
                dispatch(dontShowEdit());
              }}
              className="close"
            >
              &times;
            </span>

            <div className="form addBook-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <h3 className="addNewBook-title">Update</h3>
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
                    checked={readIt}
                    onChange={(e) => {
                      handleClick(e);
                    }}
                  />
                  <label htmlFor="text">Have you read it?</label>
                </div>
                <input
                  type="submit"
                  name="btn btn-primary"
                  value="Update"
                  className="addBook-btn"
                />
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EditBookForm;
