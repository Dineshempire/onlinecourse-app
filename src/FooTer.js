import React from 'react';
import './FooTer.css'; // Import your CSS file for styling

const FooTer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>About Us</h4>
            <p>Your company description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123 456 7890</p>
            <p>Address: 123 Street, City, Country</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooTer;
