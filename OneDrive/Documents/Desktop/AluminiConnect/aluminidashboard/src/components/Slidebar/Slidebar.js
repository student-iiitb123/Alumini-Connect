import React from "react";
import { Link } from "react-router-dom";
import "./Slidebar.css";

function Slidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Alumni Panel 🎓</h2>
      <ul className="sidebar-menu">
        <li><Link to="/dashboard"> Dashboard</Link></li>
        <li><Link to="/profile"> Profile</Link></li>
        <li><Link to="/jobs"> Jobs</Link></li>
        <li><Link to="/donations"> Donations</Link></li>
        <li><Link to="/stories"> Stories</Link></li>
        <li><Link to="/logout"> Logout</Link></li>
      </ul>
    </div>
  );
}

export default Slidebar;

