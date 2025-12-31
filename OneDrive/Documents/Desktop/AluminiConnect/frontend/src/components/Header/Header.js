import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/event">Event</Link></li>
          <li><Link to="/donate">Donate</Link></li>
        <li className="login-btn"> <Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;


