// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../../assets/background.jpg'; // Ensure the name matches exactly

const Home = () => {
  return (
    <div
      className="home-container d-flex flex-column justify-content-between align-items-start"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        padding: '20px',
        color: 'white',
      }}
    >
      {/* Top Navigation */}
      <div className="d-flex justify-content-between align-items-center w-100">
        {/* Logo as Text */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
            A<span style={{ color: 'red' }}>V</span>O
          </span>
        </div>

        {/* Navigation Links */}
        <div className="d-flex">
          <Link to="/" className="text-decoration-none mx-3" style={{ color: 'white', fontSize: '18px' }}>Home</Link>
          <Link 
            to="/about" 
            className="text-decoration-none mx-3" 
            style={{ color: 'white', fontSize: '18px', transition: 'color 0.3s' }}
            onMouseEnter={(e) => (e.target.style.color = 'red')}
            onMouseLeave={(e) => (e.target.style.color = 'white')}
          >
            About
          </Link>
          <Link 
            to="/work" 
            className="text-decoration-none mx-3" 
            style={{ color: 'white', fontSize: '18px', transition: 'color 0.3s' }}
            onMouseEnter={(e) => (e.target.style.color = 'red')}
            onMouseLeave={(e) => (e.target.style.color = 'white')}
          >
            Work
          </Link>
          <Link 
            to="/blog" 
            className="text-decoration-none mx-3" 
            style={{ color: 'white', fontSize: '18px', transition: 'color 0.3s' }}
            onMouseEnter={(e) => (e.target.style.color = 'red')}
            onMouseLeave={(e) => (e.target.style.color = 'white')}
          >
            Blog
          </Link>
          <Link 
            to="/contact" 
            className="text-decoration-none mx-3" 
            style={{ color: 'white', fontSize: '18px', transition: 'color 0.3s' }}
            onMouseEnter={(e) => (e.target.style.color = 'red')}
            onMouseLeave={(e) => (e.target.style.color = 'white')}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-container" style={{ marginTop: 'auto', textAlign: 'left' }}>
        <h1 style={{ fontSize: '56px', fontWeight: 'bold', maxWidth: '600px' }}>
          We create modern and minimal websites
        </h1>
        <p style={{ fontSize: '24px', marginTop: '10px', maxWidth: '500px' }}>
          Small rivers suddenly flow by their places and supplies.
        </p>
        <button
          className="btn btn-danger mt-3"
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: 'red',
            border: 'none',
          }}
        >
          Explore Projects
        </button>
      </div>
      
    </div>
  );
};

export default Home;
