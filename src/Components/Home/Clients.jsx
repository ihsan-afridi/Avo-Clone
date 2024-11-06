// src/components/Clients.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Clients = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 15px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' , fontSize: '50px'}}>Clients Say About Us</h1>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card text-center" style={{ border: 'none', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <div className="card-body">
              <p style={{ margin: '15px 0', lineHeight: '1.5' }}>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                <i className="fas fa-user-circle" style={{ fontSize: '3rem', color: 'black', marginRight: '10px' }}></i>
                <div style={{ textAlign: 'left' }}>
                  <h5 style={{ margin: '10px 0' }}>Jamie Jonson</h5>
                  <p style={{ margin: '5px 0', color: 'gray' }}>avo.com</p>
                </div>
              </div>
              <a href="#" className="btn btn-danger" style={{ padding: '10px 20px', fontWeight: 'bold', borderRadius: '5px' }}>
                View Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card text-center" style={{ border: 'none', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <div className="card-body">
              <p style={{ margin: '15px 0', lineHeight: '1.5' }}>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                <i className="fas fa-user-circle" style={{ fontSize: '3rem', color: 'black', marginRight: '10px' }}></i>
                <div style={{ textAlign: 'left' }}>
                  <h5 style={{ margin: '10px 0' }}>Jamie Jonson</h5>
                  <p style={{ margin: '5px 0', color: 'gray' }}>avo.com</p>
                </div>
              </div>
              <a href="#" className="btn btn-danger" style={{ padding: '10px 20px', fontWeight: 'bold', borderRadius: '5px' }}>
                View Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card text-center" style={{ border: 'none', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <div className="card-body">
              <p style={{ margin: '15px 0', lineHeight: '1.5' }}>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                <i className="fas fa-user-circle" style={{ fontSize: '3rem', color: 'black', marginRight: '10px' }}></i>
                <div style={{ textAlign: 'left' }}>
                  <h5 style={{ margin: '10px 0' }}>Jamie Jonson</h5>
                  <p style={{ margin: '5px 0', color: 'gray' }}>avo.com</p>
                </div>
              </div>
              <a href="#" className="btn btn-danger" style={{ padding: '10px 20px', fontWeight: 'bold', borderRadius: '5px' }}>
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
