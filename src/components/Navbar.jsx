// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-container">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/books" className="nav-link">Books</Link>
      <Link to="/plays" className="nav-link">Plays</Link>
      <Link to="/movies" className="nav-link">Movies</Link>
      <Link to="/" className="nav-link brand">MUKAMA</Link>
      <Link to="/tvshows" className="nav-link">TV Shows</Link>
     
      <Link to="/news" className="nav-link">News</Link>
      <Link to="/press" className="nav-link">Press</Link>
      <Link to="/events" className="nav-link">Events</Link>
      <Link to="/contact" className="nav-link">Contacts</Link>
    </div>
  </nav>
);

export default Navbar;