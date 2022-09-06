import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./dashboard.css";
import NewBookBtn from "../../components/addNewBookBtn/NewBookBtn";
import AddBookForm from "../addBookForm/AddBookForm";
import Modal from "../../components/modal/Modal";
import { getBooks, reset } from "../../features/books/bookSlice";
import Loading from "../../components/loading/Loading";
const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { books, isLoading, isError, message } = useSelector(
    (state) => state.books
  );
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

  return (
    <>
      <NewBookBtn />
      <Modal children={<AddBookForm />} />
      <div className="grid-container ">
        {books.length > 0 ? (
          books.map((book) => (
            <div className="grid-item">
              <div className="card">
                <h4 className="book-name large  ">{book.title}</h4>
                <h5 className="book-author lead">{book.author}</h5>
                <button className="dashboard-book-btn lead"> Read</button>
                <button className="dashboard-book-btn lead remove-btn ">
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1> no books added yet</h1>
        )}
      </div>
    </>
  );
};

export default Dashboard;
