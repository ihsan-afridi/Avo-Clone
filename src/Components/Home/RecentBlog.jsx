import React from 'react';
import roomImage from '../../assets/room.jpg';
import cupsImage from '../../assets/cups.jpg';
import keyMouseImage from '../../assets/keyMouse.jpg';
import pageImage from '../../assets/page.jpg';

const blogData = [
  {
    title: "Amplify your blockchain team",
    dateInfo: "June 01, 2020 Admin 3",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    image: roomImage,
  },
  {
    title: "Amplify your blockchain team",
    dateInfo: "June 01, 2020 Admin 3",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    image: cupsImage,
  },
  {
    title: "Amplify your blockchain team",
    dateInfo: "June 01, 2020 Admin 3",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    image: keyMouseImage,
  },
  {
    title: "Amplify your blockchain team",
    dateInfo: "June 01, 2020 Admin 3",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    image: pageImage,
  },
];

const RecentBlog = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '50px', marginBottom: '20px' }}>Recent Blog</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {blogData.map((blog, index) => (
          <div key={index} style={{ textAlign: 'left', width: '250px' }}>
            <div
              style={{
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
              }}
            >
              {/* Title outside the image */}
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px', textAlign: 'center' }}>
                {blog.title}
              </h3>
              <img
                src={blog.image}
                alt="Blog"
                style={{
                  width: '100%',
                  height: '200px', // Increased height
                  objectFit: 'cover',
                }}
              />
              <p style={{ color: '#888', fontSize: '14px', margin: '10px 0', textAlign: 'center' }}>
                {blog.dateInfo}
              </p>
              <p style={{ fontSize: '14px', lineHeight: '1.6', textAlign: 'center' }}>{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
