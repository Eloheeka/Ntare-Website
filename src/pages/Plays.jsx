import React from "react";
import "./Plays.css";
import playPoster from "../assets/play.jpg"; // Example play poster image

const Plays = () => (
  <div className="plays-page">
    <div className="plays-container">
      
      <div className="play-card">
        <div className="play-image">
          <img
            src={playPoster}
            alt="Play Poster"
            className="play-poster"
          />
        </div>
        <div className="play-content">
          <p className="play-description">
            This captivating production of Romeo and Juliet was directed and produced by Mukama
            Ntare (also known as Mukama Wanjye) and performed by the talented Mamaland
            Performing Arts. Audiences were transported into Shakespeare’s timeless tale of love
            and tragedy, brought to life with powerful performances and stunning staging at the
            Kigali Serena Hotel. Mukama Ntare also acted in the play as Prince of Verona.
         </p>
         <p className="play-description">
          We’re grateful to everyone who attended and supported this unforgettable theatrical
          experience.
         </p>
          <a href="https://youtu.be/ggZVTg1-K-A?si=_Rwqxz6ATK70Kq9h" target = "_blank"><button className="watch-btn">Watch Now</button></a>
          
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

export default Plays;