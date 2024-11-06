// src/components/OurWork.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import workImage from '../../assets/cassette.jpg'; // Updated to the new image path

const OurWork = () => {
  return (
    <div className="container my-5">
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#343a40', fontSize:'50px' }}>Our Work</h1>
      <div className="row">
        <div className="col-md-5 d-flex align-items-center"> {/* Adjusted width for the image */}
          <img 
            src={workImage} 
            alt="Cassette Work Example" 
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
          />
        </div>
        <div className="col-md-1"> {/* Spacer column */}
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start"> {/* Adjusted width for the text */}
          <h4 style={{ fontSize: '20px', color: '#6c757d', textAlign: 'left' }}>Web Design</h4>
          <h1 style={{ fontSize: '24px', color: '#343a40', textAlign: 'left', marginTop: '10px' }}>Cassette Tape</h1>
          <h4 style={{ fontSize: '16px', color: '#6c757d', textAlign: 'left', marginTop: '10px' }}>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
            the blind texts.
          </h4>
          <div className="d-flex align-items-center mb-3 mt-4">
            <i className="fas fa-user" style={{ fontSize: '40px', marginRight: '10px', color: '#343a40' }}></i>
            <h5 style={{ margin: 0 }}>Ihsan Afridi</h5>
          </div>
          <a href="https://avo.com" style={{ textDecoration: 'none', color: '#343a40', marginBottom: '10px' }}>avo.com</a>
          <button
            className="btn btn-danger mt-3"
            style={{ border: 'none', color: '#fff' }}
          >
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
