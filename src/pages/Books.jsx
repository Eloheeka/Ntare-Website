import React from "react";
import "./Books.css";
import bookCover from "../assets/book.jpg"; // Example book cover image'
import bookCover2 from "../assets/book2.jpg"; // Example book cover image

const Books = () => (
  <div className="books-page">
    <div className="books-container">
    
      
      <div className="book-card">
        <div className="book-image">
          <img
            src={bookCover}
            alt="Book Cover"
            className="book-cover"
          />
        </div>
        <div className="book-content">
          <div className="book-description">
            <p>
              Black Freedom Fighters: The Lives and Words of Africa's Greatest Heroes is not just a book — it is a weapon of remembrance, a declaration of war against amnesia, and a rallying cry for liberation and freedom.
            </p>
            
            <p>
              Within these pages live the uncompromising spirits of those who rose against empire, broke the chains of domination, and dared to define Africa on her own terms. Kwame Nkrumah, Patrice Lumumba, Thomas Sankara, Amílcar Cabral, Muammar Gaddafi, and others didn't ask for freedom — they fought for it. They bled, they burned, and they battled colonialism, neo-colonial puppets, and global imperialism with fire in their hearts and unity in their visions.
            </p>
            
            <p>
              Their biographies are not softened by time — they are sharpened by truth. Their speeches are unedited. Their quotes are battle cries. Their legacies are not relics of the past — they are blueprints for a liberated future.
            </p>
            
            <p>
              This book is for those who will not kneel. It is for the Pan-African warrior, the radical thinker, the youth who refuses silence, and the elder who never forgot.
            </p>
            
            <p>
              The time for remembering has passed — this is the time for rising.
            </p>
          </div>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </div>

     <div className="books-container">
    
      
      <div className="book-card">
        <div className="book-image">
          <img
            src={bookCover2}
            alt="Book Cover"
            className="book-cover"
          />
        </div>
        <div className="book-content">
          <div className="book-description">
            <p>
Black Mighty Women: The Lives and Words of Africa’s Greatest Heroines is a sweeping celebration of twenty extraordinary women who have shaped the course of African and global history.            </p>
            
            <p>
From legendary queens and fearless warriors to revolutionary activists, cultural icons, and modern leaders, their stories illuminate a shared legacy of resistance, resilience, and triumph.            </p>
            
            <p>
Drawing from historical records, oral traditions, speeches, and personal testimonies, this book presents richly detailed biographies, inspiring quotes, and powerful images that bring each woman’s journey to life.            </p>
            
            <p>
These women did not just witness history—they made it.            </p>
            
            <p>
This book is both a tribute and a call to action: a reminder that the fight for justice, equality, and dignity is ongoing, and that we, too, can rise to meet it.            </p>
          </div>
          <button className="buy-btn">Buy Now</button>
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

export default Books;