import React from 'react';

const ContactUs = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        height: '100vh', // Full viewport height
        padding: '20px',
        backgroundColor: '#f8f9fa', // Optional: Light background color
      }}
    >
      <h5 style={{ color: 'red' }}>Contact Us</h5>
      <h1 style={{ fontSize: '36px' }}>Have a Project?</h1>
      <h6 style={{ fontSize: '18px', marginTop: '10px', textAlign: 'center' }}>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
      </h6>
    </div>
  );
};

export default ContactUs;
