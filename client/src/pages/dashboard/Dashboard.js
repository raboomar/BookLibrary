import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./dashboard.css";
import NewBookBtn from "../../components/addNewBookBtn/NewBookBtn";
import AddBookForm from "../addBookForm/AddBookForm";
import Modal from "../../components/modal/Modal";
import { getBooks, reset, deleteBook } from "../../features/books/bookSlice";
import Loading from "../../components/loading/Loading";
import NoBooks from "../../components/noBooks/NoBooks";
import { toast } from "react-toastify";
const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { books, isLoading, isError, message } = useSelector(
    (state) => state.books
  );

  const removeBook = (bookId) => {
    dispatch(deleteBook(bookId));
    toast.success("Book removed");
  };
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }
    dispatch(getBooks());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (books.length === 0) {
    return (
      <>
        <NewBookBtn />
        <NoBooks />
        <Modal children={<AddBookForm />} />
      </>
    );
  }

  return (
    <>
      <NewBookBtn />
      <Modal children={<AddBookForm />} />
      <div className="grid-container ">
        {books.map((book) => (
          <div className="grid-item" key={book._id}>
            <div className="card">
              <h4 className="book-name large  ">{book.title}</h4>
              <h5 className="book-author lead">{book.author}</h5>
              {book.readIt ? (
                <h5 className="book-author lead"> Read: Yes</h5>
              ) : (
                <h5 className="book-author lead">Read: No</h5>
              )}

              <button className="dashboard-book-btn lead"> Edit</button>
              <button
                className="dashboard-book-btn lead remove-btn "
                onClick={(e) => {
                  removeBook(book._id);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
