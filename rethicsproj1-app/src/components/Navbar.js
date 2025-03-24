

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const isAuthenticated = localStorage.getItem('token'); // Check if the user is authenticated
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token
    localStorage.removeItem('user'); // Remove the user data
    navigate('/login'); // Redirect to the login page
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">RETHICS</Link>
      <div className="nav-links">
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/incident-report" className="nav-link">Report Incident</Link>
            <Link to="/vulnerability-scanner" className="nav-link">Vulnerability Scanner</Link>
            <Link to="/user-education" className="nav-link">User Education</Link>
            <Link to="/youth-engagement" className="nav-link">Youth Engagement</Link>
            <Link to="/profile" className="nav-link">My Profile</Link>
            <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup" className="nav-link">Signup</Link>
            <Link to="/login" className="nav-link">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;