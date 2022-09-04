import React from "react";
import "./navbar.css";
export const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <a href="index.html">
          <i className="fas fa-code"></i> Your Library
        </a>
      </h1>
      <ul>
        <li>
          <a href="dashboard.html" title="Dashboard">
            <i className="fas fa-user"></i>
            <span className="hide-sm">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="login.html" title="Logout">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
