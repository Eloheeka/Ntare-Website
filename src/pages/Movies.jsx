import React from "react";
import "./Movies.css";
import moviePoster from "../assets/movie.jpg"; // Example movie poster image

const Movies = () => (
  <div className="movies-page">
    <div className="movies-container">
      
      <h1 className="page-title">Our Movies</h1>

      {/* Categories Section */}
      <div className="movie-categories">
        <button className="category-btn">Feature Films</button>
        <button className="category-btn">Short Films</button>
        <button className="category-btn">Series</button>
        <button className="category-btn">Cartonns</button>
        
      </div>

      <div className="movie-card">
        <div className="movie-image">
          <img
            src={moviePoster}
            alt="Movie Poster"
            className="movie-poster"
          />
        </div>
        <div className="movie-content">
          <div className="movie-description">
            <p>
              Rwanda, 1973: high up in the mountains, at the source of the Nile, a black statue of the Virgin Mary watches over a Catholic boarding school for girls. Here, during days filled with classes, mass and practical work, the daughters of politicians, officers and businessmen are educated to one day become productive members of the country's elite. Whether Hutu or Tutsi, the girls share their curiosity, dreams and joie de vivre. However, the social dynamics and increasing conflicts that characterise the school microcosm mirror the ravages wrought by the colonial order. Deeply symbolic images hint at the genocidal violence that would later engulf the entire country in 1994.
            </p>
            
            <p>
              Our Lady of Nile was adapted from the Book with the same title written by the Rwandese Famous Author SCHOLASTIQUE MUKASONGA. The movie was directed by the Afgan-French ATIK RAHIMI and MUKAMA NTARE acted in it as Père (Father) Hermenegilde.
            </p>
          </div>
          <a href="https://dai.ly/x8k3sfp" target= "_blank">
            <button className="watch-btn">Watch Now</button>
          </a>
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

export default Movies;
