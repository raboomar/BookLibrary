import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> Your Library
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/dashboard">
            <i className="fas fa-user"></i>
            <span className="hide-sm">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">Login</span>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">Register</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
