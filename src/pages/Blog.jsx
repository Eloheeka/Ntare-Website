import React, { useState } from 'react'
import './Blog.css'

export const Blog = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="blog-page">
      <div className="blog-container">
        <h1 className="page-title">Blog</h1>

        <div className="blog-post">
          <div className="post-header" onClick={() => setIsOpen(!isOpen)}>
            <h2 className="post-title">Welcome to the Stage</h2>
            <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
          </div>

          {isOpen && (
            <div className="post-content">
              <p><em>"My art is my voice, and my voice is my revolution."</em></p>
              <p>The lights are on, the cameras are rolling, and the pages are turning.</p>
              <p>This is the crossroads where art meets action, where stories aren’t just told — they’re lived.</p>
              <p>I am an author, filmmaker, playwright, TV host, social activist, and entrepreneur. Each role is a chapter, each project a scene, each moment an opportunity to shape the world we share.</p>
              <p>Here, you’ll step behind the curtain into the heartbeat of my work — the late-night writing sessions, the fire of activism, the thrill of a live broadcast, the quiet power of a story well told.</p>
              <p>This is more than a blog. It’s a journey through ideas, struggles, triumphs, and dreams — all stitched together by a relentless belief in creativity’s power to change lives.</p>
            </div>
          )}
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
  )
}

export default Blog