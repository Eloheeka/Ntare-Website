import React from "react";
import "./Events.css";

function Events() {
  return (
    <div className="events-page">
      <div className="events-container">
 
        <div className="events-content">
          <h2 className="section-title">Welcome to Our Events!</h2>
          <p>
            Stay up to date with all the exciting happenings, appearances, and opportunities to
            connect. Whether it's a book launch, film production or screening, live performance, or
            livestream, this is where you'll find the details on everything coming up — and highlights
            from past events.
          </p>
          <p>
            We look forward to seeing you there!
          </p>
        </div>

        {/* Upcoming Events Section */}
        <div className="events-section">
          <h3 className="section-subtitle">Upcoming Events</h3>
          <p>
            We will keep you updated of all future events. Stay tuned for exciting announcements!
          </p>
        </div>

        {/* Past Events Section */}
        <div className="events-section">
          <h3 className="section-subtitle">Past Events</h3>
          
          <div className="event-item">
            <h4 className="event-title">Romeo & Juliet — A Performance of Shakespeare's Classic</h4>
            <p className="event-date-location">November 1, 2019 — Kigali Serena Hotel</p>
            <p className="event-description">
              This captivating production of Romeo and Juliet was directed and produced by Mukama Ntare (also known as Mukama Wanjye) and performed by the talented Mamaland Performing Arts. Audiences were transported into Shakespeare's timeless tale of love and tragedy, brought to life with powerful performances and stunning staging at the Kigali Serena Hotel.
            </p>
            <p className="event-thanks">
              We're grateful to everyone who attended and supported this unforgettable theatrical experience.
            </p>
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

export default Events;
