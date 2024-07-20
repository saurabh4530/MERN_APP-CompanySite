//@ts-nocheck
import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container grid grid-four-cols" >
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            SK Technical is a leading IT company providing innovative
            solutions to help your business succeed in the digital age.
          </p>
        </div>
        <div className="footer-social">
          <h3>Quick Links</h3>
          <ul className='social-links'>
            <li><a href="/">Home</a></li>
            <li><a href="/service">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Contact Us</h3>
          <ul className="social-links">
            <li>Email: info@SKtechnical.com</li>
            <li>Phone: +123-456-7890</li>
            <li>Address: 123 Main Street, Anytown, USA</li>
          </ul>
        </div>
        
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 SK Technical. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
