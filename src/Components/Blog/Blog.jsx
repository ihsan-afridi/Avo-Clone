// src/components/Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../../assets/background.jpg'; // Ensure the name matches exactly



const Blog = () => {
  return (
    <div
      className="d-flex flex-column justify-content-between"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
        padding: '0',
      }}
    >
      <style>
        {`
          .top-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
          }
          .avo-logo {
            font-size: 24px;
            font-weight: bold;
            color: white;
          }
          .logo-v {
            color: red;
          }
          .nav-links .nav-link {
            color: white;
            font-size: 18px;
            text-decoration: none;
            margin: 0 10px;
            transition: color 0.3s;
          }
          .nav-links .nav-link:hover {
            color: red;
          }
          .bottom-left-info {
            padding: 1rem;
            margin-bottom: 1rem;
          }
          .bottom-left-info h2 {
            font-size: 24px;
            margin-bottom: 10px;
            color: white;
          }
          .bottom-left-info p {
            font-size: 16px;
            max-width: 300px;
            line-height: 1.5;
          }
        `}
      </style>

      {/* Top Section */}
      <div className="top-section">
        {/* Logo */}
        <div className="avo-logo">
          A<span className="logo-v">V</span>O
        </div>

        {/* Navigation Links */}
        <div className="nav-links d-flex">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/work" className="nav-link">Work</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>

      {/* Bottom Left Section */}
      <div className="bottom-left-info">
      <h1 style={{ fontSize: '70px' }}>Blog</h1>

        
      </div>
    </div>
  );
};

export default Blog;
