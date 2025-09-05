

// src/pages/About.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import aboutImage from "../assets/about.jpg"; // Example image import 
import homeImage from "../assets/about1.jpg"; // Example image import

const About = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="about-page">
      {/* Top Section - Profile Introduction */}
      <section className="profile-section">
        <div className="profile-content">
          <div className="profile-image">
            <img
              src={aboutImage}
              alt="Profile Picture"
              className="profile-pic"
            />
          </div>
          <div className="profile-info">
            
            <p className="profile-bio">
MUKAMA NTARE a.k.a MUKAMA WANJYE or SOULJAH is a devoted Pan-Africanist, writer, filmmaker, and activist known for using art and storytelling to inspire Black consciousness and unity. As founder of the Black Awakening Movement (BAM), he blends creativity with advocacy—challenging injustice and honoring the legacy of Black freedom fighters worldwide          </p>
            <button className="contact-btn" onClick={handleContactClick}>Contact</button>
          </div>
        </div>
      </section>

      {/* Bottom Section - About Me */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            
            <div className="about-description">
              <p>

A former banker turned revolutionary thinker, he brings a unique blend of professional insight and grassroots passion to his work as a writer, filmmaker, playwright, entrepreneur, and social activist            </p>
              <p>
 His personal journey reflects a deep shift from the corporate world to a life dedicated to the cultural, political, spiritual, and social awakening of Black people globally.

Deeply patriotic and purpose-driven, Mukama Ntare uses the power of story, art, and activism to confront the historical injustices that have shaped Black identity.</p>
            </div>
          </div>
          <div className="about-image">
            <img
              src={homeImage}
              alt="About Image"
              className="about-pic"
            />
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section">
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
      </section>
    </div>
  );
};

export default About;
