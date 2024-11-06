// src/components/WelcomeAVO.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../../assets/compny.jpg';

const WelcomeAVO = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        padding: '40px 20px',
      }}
    >
      <div className="container">
        <div className="row">
          
          {/* Left Side Text Section */}
          <div className="col-md-4 d-flex flex-column justify-content-center" style={{ textAlign: 'left' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#343a40' }}>
              Welcome to AVO - A Personal Portfolio Web Agency
            </h2>
            <p style={{ fontSize: '16px', color: '#6c757d' }}>
              Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              A small river named Duden flows by their place and supplies it with the necessary regelialia. It
              is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
            
            {/* SEO Item 01 */}
            <div className="mt-4">
              <div className="p-3 border rounded" style={{ backgroundColor: '#e9ecef' }}>
                <span style={{ color: 'red', fontSize: '20px', fontWeight: 'bold' }}>01. </span>
                <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#343a40' }}>Search Engine Optimization</span>
                <h4 style={{ fontSize: '16px', color: '#6c757d', marginTop: '5px' }}>
                  Far far away, behind the word mountains, far from the countries Vokalia.
                </h4>
              </div>
            </div>
          </div>

          {/* Center Image Section */}
          <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
            <div
              style={{
                width: '100%',
                maxWidth: '300px',
                height: '300px',
                backgroundColor: '#d9d9d9',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>

            {/* SEO Item 02 */}
            <div className="mt-4 text-center">
              <div className="p-3 border rounded" style={{ backgroundColor: '#e9ecef' }}>
                <span style={{ color: 'red', fontSize: '20px', fontWeight: 'bold' }}>02. </span>
                <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#343a40' }}>Search Engine Optimization</span>
                <h4 style={{ fontSize: '16px', color: '#6c757d', marginTop: '5px' }}>
                  Far far away, behind the word mountains, far from the countries Vokalia.
                </h4>
              </div>
            </div>
          </div>

          {/* Right Side Text Section with Button */}
          <div className="col-md-4 d-flex flex-column justify-content-between" style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '16px', color: '#6c757d', marginTop: '10px' }}>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
              the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
              language ocean. A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>

            <button
              className="btn mt-3 align-self-start"
              style={{ backgroundColor: 'red', border: 'none', color: '#fff' }}
            >
              View All Projects
            </button>

            {/* SEO Item 03 */}
            <div className="mt-4">
              <div className="p-3 border rounded" style={{ backgroundColor: '#e9ecef' }}>
                <span style={{ color: 'red', fontSize: '20px', fontWeight: 'bold' }}>03. </span>
                <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#343a40' }}>Search Engine Optimization</span>
                <h4 style={{ fontSize: '16px', color: '#6c757d', marginTop: '5px' }}>
                  Far far away, behind the word mountains, far from the countries Vokalia.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeAVO;
