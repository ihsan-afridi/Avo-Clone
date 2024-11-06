// src/components/Portfolio.jsx

import 'bootstrap/dist/css/bootstrap.min.css';
import portfolioImage from '../../assets/laptop.jpg'; // Replace with your actual image path

const Portfolio = () => {
  return (
    <div className="container my-5">
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#343a40', fontSize:'50px' }}>Avo Portfolio Agency</h1>
      <div className="row">
        <div className="col-md-6 d-flex align-items-center"> {/* Image column */}
          <img 
            src={portfolioImage} 
            alt="Avo Portfolio Agency" 
            style={{ width: '80%', height: 'auto', borderRadius: '8px', margin: '0 auto' }} // Decreased size and centered
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start"> {/* Text column */}
          <h4 style={{ fontSize: '20px', color: '#6c757d', textAlign: 'left', marginBottom: '10px' }}>UI/UX Design</h4>
          <h1 style={{ fontSize: '24px', color: '#343a40', textAlign: 'left', marginTop: '10px', marginBottom: '10px' }}>Avo Portfolio Agency</h1>
          <h4 style={{ fontSize: '16px', color: '#6c757d', textAlign: 'left', marginTop: '10px', marginBottom: '20px' }}>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
            the blind texts.
          </h4>
          <div className="d-flex align-items-center mb-3 mt-4">
            <i className="fas fa-user" style={{ fontSize: '40px', marginRight: '10px', color: '#343a40' }}></i>
            <h5 style={{ margin: 0 }}>Jamie Jonson</h5>
          </div>
          <a href="https://avo.com" style={{ textDecoration: 'none', color: '#343a40', marginBottom: '10px' }}>avo.com</a>
          <button
            className="btn btn-danger mt-3"
            style={{ border: 'none', color: '#fff' }}
          >
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
