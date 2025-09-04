import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">Contact Information</h2>
            
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-content">
                <h3>Email</h3>
                <p>ntaretheauthor@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📱</div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+250 785 752 244</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Location</h3>
                <p>East Africa</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">⏰</div>
              <div className="info-content">
                <h3>Working Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h2 className="section-title">Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
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
};

export default Contact;