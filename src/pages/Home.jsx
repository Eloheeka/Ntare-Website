// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import "./Home.css";
import homeImage from "../assets/home1.jpg";
import image1 from "../assets/home2.jpg";
import image2 from "../assets/home3.jpg"; 
 // Single home image


const Home = () => {
  const slides = [
    homeImage,
    image1,
    image2,
   
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="home">
      <div className="slider">
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={index === current ? "active" : ""}
            style={{ display: index === current ? "block" : "block" }}
          />
        ))}
        
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