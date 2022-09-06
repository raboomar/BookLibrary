import React from "react";
import "./dashboard.css";
const Dashboard = () => {
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
    <div className="grid-container ">
      {books.map((book) => (
        <div className="grid-item">
          <div className="card">
            <div className="container">
              <h4 className="book-name large  ">{book.title}</h4>
              <h5 className="book-author lead">{book.author}</h5>
              <button className="dashboard-book-btn lead"> Read</button>
              <button className="dashboard-book-btn lead ">Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
