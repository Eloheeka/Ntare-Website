import React from "react";
import "./News.css";

function News() {
  return(
    <div className="news-page">
      <div className="news-container">
        <h1 className="page-title">Latest News</h1>

        {/* Welcome Section */}
        <div className="news-content">
          <h2 className="section-title">📰 Welcome to Our News Section</h2>
          <p>
            We're excited to have you here! This is where you'll find the latest updates, announcements, behind-the-scenes insights, and everything new happening with us.
          </p>
          <p>
            Stay tuned for fresh content, important news, and exclusive features—delivered right here, just for you.
          </p>
          <p>
            Thanks for being part of the journey!
          </p>
        </div>

        {/* Posts */}
        <div className="news-section">
          <h3 className="section-subtitle">Post 1: Website Launch Announcement</h3>
          <div className="news-item">
            <h4 className="news-title">🎉 Big News – My Website Is Live!</h4>
            <p className="news-date">Date: [Insert Launch Date]</p>
            <div className="news-content">
              <p>I'm excited to officially launch my personal website!</p>
              <p>
                It's a space where I’ll be sharing my latest work, thoughts, updates, and everything I’m passionate about—all in one place.
              </p>
              <p>
                Feel free to explore, connect, and stay tuned for more content.
              </p>
              <p>
                I’d love to hear your thoughts and appreciate your support as this new chapter begins!
              </p>
              <p>
                👉 Visit the website at <a href="https://www.mukamantare.com" target="_blank" rel="noopener noreferrer">www.mukamantare.com</a>
              </p>
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

export default News;