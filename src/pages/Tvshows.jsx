import React from "react";
import "./Tvshows.css";

const Tvshows = () => {
  const videos = [
    {
      id: 1,
      title: "Interview with MIGHTY POPO",
      youtubeId: "8mKbESyq5FY",
   
      
    },
    {
      id: 2,
      title: "Interview with ABDOUL MUJYAMBERE",
      youtubeId: "cAlkVzNJS2Q",
     
    },
    {
      id: 3,
      title: "Interview with LEANDRE MUNYORORO",
      youtubeId: "RMDpkvZ1Kqw",
    
    },
    {
      id: 4,
      title: "Interview with WILLY NDAHIRO",
      youtubeId: "3xe6PO6Pqb4",
      
    },
    {
      id: 5,
      title: "Interview with JABO JEAN MARIE",
      youtubeId: "45v7WSsoSvc",
     
    }
  ];

  const openYouTube = (youtubeId) => {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
  };

  return (
    <div className="tvshows-page">
      <div className="tvshows-container">
        <p className="intro">MUKAMA NTARE, also known as MUKAMA WANJYE or SOULJAH, is a charismatic TV personality and the host of The MUKAMA Show. With his lively presence and authentic style, he brings together practitioners from film, theatre, music, culture, sports, and entrepreneurship to share their journeys and inspire audiences. His show isn’t just about conversation, it’s about celebrating talent, ideas, and stories that connect people from all walks of life.</p>
        
        <div className="videos-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail" onClick={() => openYouTube(video.youtubeId)}>
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                  alt={video.title}
                  className="thumbnail-img"
                />
                <div className="play-overlay">
                  <div className="play-button">▶</div>
                </div>
              </div>
              <div className="video-content">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
                <button 
                  className="watch-btn"
                  onClick={() => openYouTube(video.youtubeId)}
                >
                  Watch on YouTube
                </button>
              </div>
            </div>
          ))}
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
};

export default Tvshows;