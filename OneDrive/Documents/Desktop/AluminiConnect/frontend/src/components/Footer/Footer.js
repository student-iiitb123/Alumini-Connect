import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Indian Institute of Information Technology, Bhopal</p>
      <p>All Rights Reserved </p>
    </footer>
  );
};

export default Footer;
