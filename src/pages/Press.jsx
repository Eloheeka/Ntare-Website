import React from "react";
import "./Press.css";

function Press() {
  const openYouTube = (youtubeId) => {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
  };

  return(
    <div className="press-page">
      <div className="press-container">
        <h1 className="page-title">Press & Media</h1>
        <div className="press-content">
          <h2 className="section-title">Official media hub for the stories, projects, and impact of Mukama Ntare — accurate, authoritative, and ready for the press.</h2>
          <p>
            This is the official resource for journalists, collaborators, and media professionals seeking information on my work as an author, filmmaker, playwright, TV host, social activist, and entrepreneur.
          </p>
          <p>
            Here you'll find press releases, high-resolution images, interviews, media coverage, and the latest updates on my projects and initiatives. Our goal is to provide accurate, timely, and comprehensive resources to make reporting and collaboration seamless.
          </p>
          <p>
            For interview requests, media kits, or further information, everything you need is right here. Thank you for helping share the stories and causes that matter most.
          </p>
        </div>

        <div className="press-layout">
          <div className="video-section">
            <h3 className="video-title">Featured Media</h3>
            <div className="video-card">
              <div className="video-thumbnail" onClick={() => openYouTube('rmqGBxzO5ZU')}>
                <img
                  src="https://img.youtube.com/vi/rmqGBxzO5ZU/maxresdefault.jpg"
                  alt="Featured Video"
                  className="thumbnail-img"
                />
                <div className="play-overlay">
                  <div className="play-button">▶</div>
                </div>
              </div>
              <div className="video-content">
                <h4 className="video-title">Press Interview</h4>
                <button 
                  className="watch-btn"
                  onClick={() => openYouTube('rmqGBxzO5ZU')}
                >
                  Watch on YouTube
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="footer">
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
}

export default Press;