import React from 'react';

const WrongIcon = () => {
  return (
    <div 
      className="container-fluid" 
      style={{ 
        height: '100vh', // Full viewport height
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#f8f9fa' // Optional: Light background for contrast
      }}
    >
      <div 
        className="card" 
        style={{ 
          width: '100%', 
          maxWidth: '600px', 
          textAlign: 'center', 
          padding: '60px', // Increased padding for more space
          height: 'auto', // Set height to auto for dynamic content
          border: '1px solid #ddd', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
        }}
      >
        <i 
          className="fas fa-exclamation-triangle" 
          style={{ fontSize: '50px', color: 'red', marginBottom: '20px' }}
        ></i>
        <h4 style={{ margin: '10px 0' }}>Oops! Something went wrong.</h4>
        <p style={{ fontSize: '16px', color: '#555' }}>
          This page didn't load Google Maps correctly. See the JavaScript console for technical details.
        </p>
      </div>
    </div>
  );
};

export default WrongIcon;
