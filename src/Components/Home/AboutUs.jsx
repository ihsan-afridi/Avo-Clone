// src/components/AboutUs.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPencilRuler, FaCode, FaMobileAlt, FaProductHunt, FaSearch } from 'react-icons/fa';

const cardData = [
  {
    icon: <FaPencilRuler size={50} />,
    title: 'UI/UX Design',
    description: 'Delivering high-quality, user-centered designs for your products.',
  },
  {
    icon: <FaCode size={50} />,
    title: 'Web Development',
    description: 'Building responsive and high-performance websites.',
  },
  {
    icon: <FaProductHunt size={50} />,
    title: 'Product Design',
    description: 'Creating products that solve problems and engage users.',
  },
  {
    icon: <FaMobileAlt size={50} />,
    title: 'Mobile Apps',
    description: 'Designing intuitive and feature-rich mobile applications.',
  },
  {
    icon: <FaSearch size={50} />,
    title: 'SEO',
    description: 'Optimizing for search engines to improve online visibility.',
  },
];

const AboutUs = () => {
  return (
    <div
      className="d-flex flex-column align-items-center text-center"
      style={{
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        padding: '40px 20px',
      }}
    >
      {/* Title Section */}
      <h1
        style={{
          fontSize: '50px',
          fontWeight: 'bold',
          color: '#343a40',
          marginBottom: '40px',
        }}
      >
        About Us
      </h1>

      {/* Services Section */}
      <div className="container">
        <div className="row justify-content-center">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="col-md-4 mb-4"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div
                className="card p-4"
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  textAlign: 'center',
                  border: 'none',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  color: 'red',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{ color: 'red' }}>{card.icon}</div>
                <h3 className="mt-3" style={{ fontSize: '24px', color: '#343a40' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '16px', color: '#6c757d' }}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
