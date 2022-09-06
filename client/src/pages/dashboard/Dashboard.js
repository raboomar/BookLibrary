import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./dashboard.css";
import NewBookBtn from "./NewBookBtn";
const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  let books = [
    { title: "test1", author: "test1" },
    { title: "test2", author: "test2" },
    { title: "test2", author: "test2" },
    { title: "test2", author: "test2" },
    { title: "test2", author: "test2" },
    { title: "test2", author: "test2" },
    { title: "test2", author: "test2" },
    { title: "test2", author: "test2" },
    { title: "test2", author: "test2" },
    { title: "test2", author: "test2" },
    { title: "test2", author: "test2" },
    { title: "test2", author: "test2" },
  ];
  return (
    <>
      <NewBookBtn />
      <div className="grid-container ">
        {books.map((book) => (
          <div className="grid-item">
            <div className="card">
              <h4 className="book-name large  ">{book.title}</h4>
              <h5 className="book-author lead">{book.author}</h5>
              <button className="dashboard-book-btn lead"> Read</button>
              <button className="dashboard-book-btn lead ">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
