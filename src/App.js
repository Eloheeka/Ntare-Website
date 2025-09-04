import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Movies from './pages/Movies';
import Plays from './pages/Plays';
import Tvshows from './pages/Tvshows';
import News from './pages/News';
import Press from './pages/Press';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Blog from './pages/Blog';


 
function App() {
  return (
    <Router>                   
      <Navbar />                
      <Routes>                  
        <Route path="/" element={<Home />} />         
        <Route path="/about" element={<About />} />   
        <Route path="/books" element={<Books />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/plays" element={<Plays />} />
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/news" element={<News />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        
    </Routes>
    </Router>
  );
}

export default App;