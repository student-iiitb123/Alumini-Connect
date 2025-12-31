 import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Welcome Back, Alumni 💫</h1>
      <div className="header-actions">
        <input type="text" placeholder="Search..." className="search-box" />
        <button className="notification-btn">🔔</button>
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="profile-pic"
        />
      </div>
    </header>
  );
}

export default Header;

