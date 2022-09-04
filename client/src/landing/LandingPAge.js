import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";
const LandingPAge = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Your Library</h1>
          <p className="lead">
            Create a profile, and save your book collection all in one place!
          </p>
          <div className="buttons">
            <Link to="/register">Sign Up</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPAge;
