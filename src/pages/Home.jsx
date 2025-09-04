// src/pages/Home.jsx
import React from "react";
import "./Home.css";
import homeImage from "../assets/home1.jpg";
 // Single home image


const Home = () => {
  return (
    <div className="home">
      <div className="slider">
        <img
          src={homeImage}
          alt="Portrait"
          className="active"
          style={{ display: "block" }}
        />
        
        <div className="slider-content">
          <div className="hero-text">
            
            <div className="hero-line"></div>
            <p className="hero-subtitle">Author | Film director | Journalist</p>
          </div>
        </div>
      </div>
      
      <footer className="home-footer">
        <div className="social-icons">
          <a href="https://www.instagram.com/mukamawanjye" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/Mukama%20Souljah%20Wanjye" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.youtube.com/@mamalandt.v1810" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <p className="copyright">© 2025 Mukama Ntare</p>
      </footer>
    </div>
  );
};

export default Home;