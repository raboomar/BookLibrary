import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> Your Library
        </Link>
      </h1>
      <ul>
        {user ? (
          <>
            <li>
              <Link to="/dashboard">
                <i className="fas fa-user"></i>
                <span className="hide-sm">Dashboard</span>
              </Link>
            </li>
            <li>
              <button
                className="btn-logout"
                onClick={() => {
                  handleLogout();
                }}
              >
                <i className="fas fa-sign-out-alt"></i>
                <span className="hide-sm">Logout</span>
              </button>
            </li>
          </>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </nav>
  );
};
