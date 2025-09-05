import React, { useState } from "react";
import "./Movies.css";
import moviePoster from "../assets/movie.jpg";

const moviesData = [
  {
    id: 1,
    title: "Our Lady of the Nile",
    description: `Rwanda, 1973: high up in the mountains, at the source of the Nile, a black statue of the Virgin Mary watches over a Catholic boarding school for girls. Here, during days filled with classes, mass and practical work, the daughters of politicians, officers and businessmen are educated to one day become productive members of the country's elite. Whether Hutu or Tutsi, the girls share their curiosity, dreams and joie de vivre. However, the social dynamics and increasing conflicts that characterise the school microcosm mirror the ravages wrought by the colonial order. Deeply symbolic images hint at the genocidal violence that would later engulf the entire country in 1994.

Our Lady of Nile was adapted from the Book with the same title written by the Rwandese Famous Author SCHOLASTIQUE MUKASONGA. The movie was directed by the Afgan-French ATIK RAHIMI and MUKAMA NTARE acted in it as Père (Father) Hermenegilde.`,
    category: "Feature Films",
    poster: moviePoster,
    link: "https://dai.ly/x8k3sfp",
  },
  {
    id: 2,
    title: "Cartoon Video",
    category: "Cartoons",
    videoLink: "https://www.youtube.com/embed/gCdNdXCTm_k?si=JHX133ANgnwoxQ2l",
    watchLink: "https://youtu.be/gCdNdXCTm_k?si=JHX133ANgnwoxQ2l",
  },
  {
    id: 3,
    title: "Series Playlist",
    category: "Series",
    videoLink:
      "https://www.youtube.com/embed/videoseries?list=PLhmYaXru06pTwxR-dw9EBaAQXZpcG0VvA",
    watchLink:
      "https://www.youtube.com/playlist?list=PLhmYaXru06pTwxR-dw9EBaAQXZpcG0VvA",
  },
];

const categories = ["Feature Films", "Short Films", "Series", "Cartoons"];

const Movies = () => {
  const [selectedCategory, setSelectedCategory] = useState("Feature Films");

  const filteredMovies = moviesData.filter(
    (movie) => movie.category === selectedCategory
  );

  return (
    <div className="movies-page">
      <div className="movies-container">
        <h1 className="page-title">Our Movies</h1>

        {/* Categories Section */}
        <div className="movie-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${
                selectedCategory === cat ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Movies Listing */}
        {filteredMovies.length === 0 ? (
          <p className="no-movies">Coming Soon</p>
        ) : (
          filteredMovies.map((movie) =>
            movie.poster ? (
              // Feature Films use movie-card
              <div className="movie-card" key={movie.id}>
                <div className="movie-image">
                  <img
                    src={movie.poster}
                    alt={`${movie.title} Poster`}
                    className="movie-poster"
                  />
                </div>
                <div className="movie-content">
                  <div className="movie-description">
                    <p>{movie.description}</p>
                  </div>
                  {movie.link && (
                    <a
                      href={movie.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="watch-btn">Watch Now</button>
                    </a>
                  )}
                </div>
              </div>
            ) : (
              // Cartoons & Series use movie-video-card only
              <div className="movie-video-card" key={movie.id}>
                <iframe
                  src={movie.videoLink}
                  title={movie.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {movie.watchLink && (
                  <a
                    href={movie.watchLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="watch-btn">Watch Now</button>
                  </a>
                )}
              </div>
            )
          )
        )}
      </div>

      <footer className="footer">
        <div className="social-icons">
          <a
            href="https://www.instagram.com/mukamawanjye"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/MukamaSouljahWanjye"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.youtube.com/@mamalandt.v1810"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <p className="copyright">© 2025 Mukama Ntare</p>
      </footer>
    </div>
  );
};

export default Movies;
