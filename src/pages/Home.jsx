// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import "./Home.css";
import homeImage from "../assets/home1.png";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png"; 
 // Single home image


const Home = () => {
  const slides = [
    image2,
    image1,
    homeImage
   
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500);
    
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
            {/* <p className="hero-subtitle">Author | Film director | Journalist</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;