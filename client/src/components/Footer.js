// Footer.js
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        {/* Logo Section */}
        <div style={styles.logoContainer}>
          <h1 style={styles.logo}>Client Sentiment Tracker</h1>
          <br />
          <p style={styles.tagline}>Your go-to platform for tracking <br></br> and managing customer feedback.</p>
        </div>

        <div style={styles.contactInfo}>
          <h4>Contact Us</h4>
          <p>Email: bhagyap954@gmail.com</p>
       
        </div>

        <div style={styles.socialMedia}>
          <h4>Follow Us</h4>
          <div style={styles.socialIcons}>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={30} style={styles.icon} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} style={styles.icon} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={30} style={styles.icon} />
            </a>
          </div>
        </div>

        <div style={styles.address}>
          <h4>Our Address</h4>
          <p>Ahmedabad , India</p>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p>&copy; 2025 Client Sentiment Tracker. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#000',  // Updated to black background
    color: '#fff',  // White text
    paddingTop: '20px',
    fontFamily: 'Arial, sans-serif',
    marginTop: '50px',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 40px',
    flexWrap: 'wrap',
  },
  logoContainer: {
    flex: 1,
    marginBottom: '10px',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'rgb(76, 175, 80)', // Theme color for the logo
    margin: 0,
  },
  tagline: {
    fontSize: '16px',
    color: '#fff',
    marginTop: '5px',
  },
  contactInfo: {
    flex: 1,
    marginBottom: '10px',
  },
  socialMedia: {
    flex: 1,
    marginBottom: '10px',
    textAlign: 'center',
  },
  address: {
    flex: 1,
    marginBottom: '10px',
    textAlign: 'right',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  icon: {
    color: 'rgb(76, 175, 80)', // Social media icon color set to theme color
    cursor: 'pointer',
    transition: 'color 0.3s',
  },
  footerBottom: {
    textAlign: 'center',
    backgroundColor: '#222',
    padding: '10px 0',
  },
};

export default Footer;
