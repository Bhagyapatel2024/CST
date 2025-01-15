// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink instead of Link

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <h1 style={styles.logo}>Client Sentiment Tracker</h1>
      </div>
      <ul style={styles.center}>
        <li style={styles.navItem}>
          <NavLink
            to="/"
            style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
          >
            Home
          </NavLink>
        </li>
        <li style={styles.navItem}>
          <NavLink
            to="/about"
            style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
          >
            About
          </NavLink>
        </li>
        <li style={styles.navItem}>
          <NavLink
            to="/feedback"
            style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
          >
            Feedback
          </NavLink>
        </li>
        <li style={styles.navItem}>
          <NavLink
            to="/trackfeedback"
            style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
          >
            Track Feedback
          </NavLink>
        </li>
        <li style={styles.navItem}>
          <NavLink
            to="/developer"
            style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
          >
            Developer
          </NavLink>
        </li>
      </ul>
      <div style={styles.right}>
        <NavLink
          to="/login"
          style={({ isActive }) => isActive ? { ...styles.loginButton, ...styles.activeLink } : styles.loginButton}
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black', // Black theme
    padding: '15px 15px',
    color: 'white',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: 'fixed',  // Makes the navbar fixed at the top
    top: '0',
    left: '0',
    right: '0',
    zIndex: 1000,
    marginBottom: '20px',
  },
  left: {
    flex: '1',
    marginLeft: '20px', // Added margin to ensure the logo stays at a distance from the edge
  },
  logo: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: 'rgb(255, 255, 255)', // Theme color for the logo
    margin: 0,
  },
  center: {
    flex: '2',
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 20px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '15px',
    padding: '5px 10px',
    transition: 'color 0.3s, background-color 0.3s',
  },
  activeLink: {
    color: 'green', // Active link color (green)
    fontWeight: 'bold', // Optional: Make it bold when active
  },
  right: {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '20px', // Added margin for spacing
  },
  loginButton: {
    backgroundColor: 'rgb(0, 0, 0)', // Theme color for the button
    color: 'white',
    padding: '10px 20px',
    textDecoration: 'none',
    fontSize: '16px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    fontWeight: 'bold',
    marginLeft: 'auto', // Ensures the Login button is aligned to the right
  },
};

export default Navbar;
