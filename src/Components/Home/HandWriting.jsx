// src/components/HandWriting.jsx
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import handwritingImage from '../../assets/handwriting.jpg';

const HandWriting = () => {
  useEffect(() => {
    // Create a style element
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideInLeft {
        from { transform: translateX(-50px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes fadeInContent {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeInImage {
        from { opacity: 0; transform: translateX(20px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes fadeInButton {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }
    `;
    // Append the style to the document head
    document.head.appendChild(style);
    
    // Clean up by removing the style element when the component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div 
      className="container my-5" 
      style={{
        animation: 'fadeIn 1.5s ease-in-out forwards',
        opacity: 0,
      }}
    >
      <h1 
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#343a40',
          animation: 'slideInLeft 1s ease-out forwards',
          opacity: 0,
          fontSize: '50px'
        }}
      >
        Web Development
      </h1>
      <div className="row">
        <div 
          className="col-md-6 d-flex flex-column justify-content-center align-items-start" 
          style={{
            animation: 'fadeInContent 1.5s ease-in-out forwards',
            opacity: 0,
          }}
        >
          <h4 style={{ fontSize: '20px', color: '#6c757d', textAlign: 'left', marginBottom: '10px' }}>Hand Writing</h4>
          <h1 style={{ fontSize: '24px', color: '#343a40', textAlign: 'left', marginTop: '10px', marginBottom: '10px' }}>
            Web Development
          </h1>
          <h4 style={{ fontSize: '16px', color: '#6c757d', textAlign: 'left', marginTop: '10px', marginBottom: '20px' }}>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
            the blind texts.
          </h4>
          <div className="d-flex align-items-center mb-3 mt-4">
            <i className="fas fa-user" style={{ fontSize: '40px', marginRight: '10px', color: '#343a40' }}></i>
            <h5 style={{ margin: 0 }}>Jamie Jonson</h5>
          </div>
          <a href="https://avo.com" style={{ textDecoration: 'none', color: '#343a40', marginBottom: '10px' }}>avo.com</a>
          <button
            style={{
              border: 'none',
              backgroundColor: '#dc3545',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '4px',
              marginTop: '15px',
              cursor: 'pointer',
              animation: 'fadeInButton 1.5s ease-in-out forwards',
              opacity: 0,
            }}
          >
            View Portfolio
          </button>
        </div>
        <div 
          className="col-md-6 d-flex align-items-center"
          style={{
            animation: 'fadeInImage 1.5s ease-in-out forwards',
            opacity: 0,
          }}
        >
          <img
            src={handwritingImage}
            alt="Hand Writing"
            style={{ width: '80%', height: 'auto', borderRadius: '8px', margin: '0 auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default HandWriting;
