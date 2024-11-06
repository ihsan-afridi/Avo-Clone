// src/components/ExpertTeam.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle } from 'react-icons/fa';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';

const teamMembers = [
  { name: 'John Wilson', role: 'Web Designer', image: img1 },
  { name: 'Robert Wills', role: 'Web Developer', image: img2 },
  { name: 'Mike Smith', role: 'Graphic Designer', image: img3 },
  { name: 'Adrian Henderson', role: 'System Analyst', image: img4 },
  { name: 'John Wilson', role: 'Web Designer', image: img1 },
  { name: 'Robert Wills', role: 'Web Developer', image: img2 },
  { name: 'Mike Smith', role: 'Graphic Designer', image: img3 },
  { name: 'Adrian Henderson', role: 'System Analyst', image: img4 },
];

const ExpertTeam = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [iconColors, setIconColors] = useState(Array(teamMembers.length).fill(false));

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setIconColors(prev => {
      const newColors = [...prev];
      newColors[index] = true; // Set color to true when hovered
      return newColors;
    });
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    setIconColors(prev => {
      const newColors = [...prev];
      newColors[index] = false; // Reset color when not hovered
      return newColors;
    });
  };

  return (
    <div className="container my-5">
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#343a40', fontSize: '40px' }}>Expert Team</h2>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex flex-column align-items-center"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
              }}
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: '100%',
                  height: '350px', // Adjusted height for larger image
                  objectFit: 'cover',
                  borderRadius: '8px 8px 0 0',
                }}
              />
              {/* Icons overlay positioned top-right, vertically aligned */}
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  display: 'flex',
                  flexDirection: 'column', // Align icons vertically
                  gap: '10px',
                  opacity: iconColors[index] ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '5px',
                  borderRadius: '8px',
                }}
              >
                {[FaFacebookF, FaInstagram, FaTwitter, FaGoogle].map((Icon, idx) => (
                  <Icon
                    key={idx}
                    style={{
                      fontSize: '20px',
                      color: iconColors[index] ? 'red' : '#ffffff', // Change color to red if hovered
                      cursor: 'pointer',
                      transition: 'color 0.3s',
                    }}
                  />
                ))}
              </div>
            </div>
            {/* Name and Role below the image */}
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <h5 style={{ fontSize: '18px', fontWeight: 'bold', color: '#343a40' }}>{member.name}</h5>
              <p style={{ fontSize: '14px', color: '#6c757d' }}>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertTeam;
