// src/components/Clock.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import clockImage from '../../assets/clock.jpg';

const Clock = () => {
  return (
    <div className="container my-5">
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#343a40', fontSize: '50px' }}>Miniwall Clock</h2>
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
          <h4 style={{ fontSize: '20px', color: '#6c757d', textAlign: 'left', marginBottom: '20px' }}>Application</h4>
          <h1 style={{ fontSize: '24px', color: '#343a40', textAlign: 'left', marginBottom: '20px' }}>Miniwall Clock</h1>
          <h4 style={{ fontSize: '16px', color: '#6c757d', textAlign: 'left', marginBottom: '20px' }}>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
            the blind texts.
          </h4>
          
          {/* Space between Text and Button */}
          <div className="d-flex align-items-center mb-3 mt-4">
            <i className="fas fa-user" style={{ fontSize: '40px', marginRight: '10px', color: '#343a40' }}></i>
            <h5 style={{ margin: 0 }}>Jamie Jonson</h5>
          </div>
          <a href="https://avo.com" style={{ textDecoration: 'none', color: '#343a40', marginBottom: '10px' }}>avo.com</a>
          <button
            className="btn btn-danger mt-4"  // Increased margin-top for button
            style={{ border: 'none', color: '#fff', padding: '10px 20px' }} // Adjusted padding for larger button
          >
            View Portfolio
          </button>
        </div>
        
        {/* Image Column */}
        <div className="col-md-6 d-flex align-items-center">
          <img 
            src={clockImage} 
            alt="Miniwall Clock" 
            style={{ width: '80%', height: 'auto', borderRadius: '8px', margin: '0 auto' }}// Added margin-top to image
          />
        </div>
      </div>
    </div>
  );
};

export default Clock;
