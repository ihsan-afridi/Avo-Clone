import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', padding: '60px 0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="container" style={{ flex: 1 }}>
        <div className="row">
          {/* Logo and Description with Social Icons */}
          <div className="col-md-3 mb-4">
            <h3 style={{ fontWeight: 'bold', marginBottom: '30px' }}>avo</h3>
            <p style={{ marginBottom: '30px' }}>Far far away, behind the word mountains, far from the countries.Far far away, behind the word mountains, far from the countries.</p>
            <div className="d-flex" style={{ gap: '10px' }}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                <FaInstagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Community Links */}
          <div className="col-md-2 mb-4">
            <h4 style={{ fontWeight: 'bold', marginBottom: '30px' }}>Community</h4>
            <ul className="list-unstyled">
              <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                <FaArrowRight size={10} style={{ marginRight: '8px' }} />
                <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Projects</a>
              </li>
              <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                <FaArrowRight size={10} style={{ marginRight: '8px' }} />
                <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Team</a>
              </li>
              <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                <FaArrowRight size={10} style={{ marginRight: '8px' }} />
                <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Reviews</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <FaArrowRight size={10} style={{ marginRight: '8px' }} />
                <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>FAQs</a>
              </li>
            </ul>
          </div>

          {/* About Us Links */}
          <div className="col-md-2 mb-4">
            <h4 style={{ fontWeight: 'bold', marginBottom: '30px' }}>About Us</h4>
            <ul className="list-unstyled">
              <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                <FaArrowRight size={10} style={{ marginRight: '8px' }} />
                <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Our Story</a>
              </li>
              <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                <FaArrowRight size={10} style={{ marginRight: '8px' }} />
                <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Meet the Team</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <FaArrowRight size={10} style={{ marginRight: '8px' }} />
                <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Careers</a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-md-2 mb-4">
            <h4 style={{ fontWeight: 'bold', marginBottom: '30px' }}>Company</h4>
            <ul className="list-unstyled">
              <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                <FaArrowRight size={10} style={{ marginRight: '8px' }} />
                <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>About Us</a>
              </li>
              <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                <FaArrowRight size={10} style={{ marginRight: '8px' }} />
                <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Press</a>
              </li>
              <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                <FaArrowRight size={10} style={{ marginRight: '8px' }} />
                <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <FaArrowRight size={10} style={{ marginRight: '8px' }} />
                <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Careers</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-3 mb-4">
            <h4 style={{ fontWeight: 'bold', marginBottom: '30px' }}>Have a Question?</h4>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <FaMapMarkerAlt size={16} style={{ marginRight: '10px' }} />
              <p style={{ margin: 0, fontSize: '14px' }}>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <FaPhoneAlt size={16} style={{ marginRight: '10px' }} />
              <p style={{ margin: 0, fontSize: '14px' }}>+2 392 3929 210</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
              <FaEnvelope size={16} style={{ marginRight: '10px' }} />
              <p style={{ margin: 0, fontSize: '14px' }}>info@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={{ backgroundColor: '#000', padding: '20px 0', textAlign: 'center' }}>
        <p style={{ margin: 0, color: '#aaa' }}>
          &copy; 2024 All rights reserved | This template is made with <span style={{ color: '#fff' }}>🤍</span> by <span style={{ color: 'red' }}>Colorlib</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
