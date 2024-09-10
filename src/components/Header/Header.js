import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <h1 className="header-title">Schedule App</h1>
      <nav className="header-nav">
        {isLoggedIn ? (
          <>
            <Link to="/profile" className="nav-link">Profile</Link>
            <Link to="/logout" className="nav-link">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
