import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import blackImage from '../../assets/black.jpg'; // Ensure this path is correct for your project

const Cards = () => {
  return (
    <div className="container my-5 w-100px">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div
            className="card text-white"
            style={{
              height: '350px', // Adjust height as needed
              maxWidth: '100%', // Full-width within the column
              backgroundImage: `url(${blackImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column', // Ensure the content stacks vertically
              padding: '30px',
              position: 'relative',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              bottom: '15px',
            }}
          >
            {/* Overlay */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
              }}
            ></div>

            {/* Text Section */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'left',
                padding: '20px',
                paddingBottom: '8px', // Add space below the text
              }}
            >
              <h3 style={{fontSize:'20px'}}>Get Started</h3>
              <h5 style={{ fontWeight: 'bold', fontSize: '12px', marginBottom: '10px' }}>
                Fill in the brief and get the project estimate
              </h5>
              <p style={{ fontSize: '14px', marginBottom: '20px' }}>
                Far far away, behind the word mountains,<br/> far from the countries Vokalia and Consonantia,<br/> there live the blind texts.
              </p>
            </div>

            {/* Button at Bottom */}
            <div style={{ padding: '0 20px', paddingBottom: '0px', zIndex: 1 }}>
              <button
                className="btn"
                style={{
                  backgroundColor: 'red',
                  color: '#fff',
                  fontWeight: 'bold',
                  padding: '5px 15px',
                  fontSize: '14px',
                  width: '17%', // Full width button
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
