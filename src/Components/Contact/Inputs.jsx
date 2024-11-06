import React from 'react';

const Inputs = () => {
  return (
    <div className="container" style={{ padding: '40px', fontSize: '18px' }}>
      <div className="row">
        {/* Left Side - Form Inputs */}
        <div className="col-md-6">
          <h5 style={{ marginBottom: '20px' }}>Contact Form</h5>
          <div
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff'
            }}
          >
            <div className="mb-3" style={{ display: 'flex', gap: '20px' }}>
              <div style={{ flex: 1 }}>
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4"></textarea>
            </div>
            <button className="btn" style={{ backgroundColor: 'red', color: '#fff' }}>Send Message</button>
          </div>
        </div>

        {/* Right Side - Contact Information */}
        <div className="col-md-6">
  <h5 style={{ marginBottom: '20px' }}>Contact Information</h5>
  <div style={{ marginBottom: '60px', display: 'flex', alignItems: 'center' }}> {/* Increased marginBottom */}
    <i className="fas fa-map-marker-alt" style={{ color: 'red', marginRight: '15px', height: '30px', fontSize: '40px' }}></i> {/* Increased size */}
    <span>Address: 198 West 21th Street, Suite 721 New York NY 10016</span>
  </div>
  <div style={{ marginBottom: '60px', display: 'flex', alignItems: 'center' }}> {/* Increased marginBottom */}
    <i className="fas fa-phone" style={{ color: 'red', marginRight: '15px', height: '30px', fontSize: '40px' }}></i> {/* Increased size */}
    <span>Phone: +1235 2355 98</span>
  </div>
  <div style={{ marginBottom: '60px', display: 'flex', alignItems: 'center' }}> {/* Increased marginBottom */}
    <i className="fas fa-envelope" style={{ color: 'red', marginRight: '15px', height: '30px', fontSize: '40px' }}></i> {/* Increased size */}
    <span>Email: info@yoursite.com</span>
  </div>
  <div style={{ marginBottom: '60px', display: 'flex', alignItems: 'center' }}> {/* Increased marginBottom */}
    <i className="fas fa-globe" style={{ color: 'red', marginRight: '15px', height: '30px', fontSize: '40px' }}></i> {/* Increased size */}
    <span>Website: yoursite.com</span>
  </div>
</div>

      </div>
    </div>
  );
};

export default Inputs;
