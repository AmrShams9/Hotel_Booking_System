import React from "react";
import './Styles/LandingPage.css';
import { FaHotel, FaMapMarkedAlt, FaHandHoldingUsd } from 'react-icons/fa'; // Icons for features

const LandingPage = () => { 
  return(
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container">
          <a href="#" className="logo">LuxStay</a>
          <ul className="nav-links">
          <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#" className="btn btn-primary">Book Now</a>
        </div>
      </nav>
       {/* Hero Section */}
       <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Your Luxury Stay Awaits</h1>
            <p>Discover the finest hotels and resorts tailored to your needs. Book your dream stay today!</p>
            <a href="#" className="btn btn-primary">Explore Hotels</a>
          </div>
        </div>
      </section>
       {/* Features Section */}
       <section id="features" className="features">
        <div className="container">
          <h2>Why Choose LuxStay?</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <FaHotel className="feature-icon" />
              <h3>Luxurious Hotels</h3>
              <p>Experience world-class accommodations with top-notch amenities.</p>
            </div>
            <div className="feature-item">
              <FaMapMarkedAlt className="feature-icon" />
              <h3>Best Locations</h3>
              <p>Find hotels in the most sought-after destinations worldwide.</p>
            </div>
            <div className="feature-item">
              <FaHandHoldingUsd className="feature-icon" />
              <h3>Affordable Prices</h3>
              <p>Get the best deals and discounts on luxury stays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>What Our guests Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-item">
            <img src="https://fakeimg.pl/300x300" alt="Guest 1" />
            <p>"LuxStay made my vacation unforgettable. The service was impeccable!"</p>
              <h4>- John Doe</h4>
        </div>
        <div className="testimonial-item">
              <img src="https://fakeimg.pl/300x300" alt="Guest 2" />
              <p>"The best hotel booking experience I've ever had. Highly recommended!"</p>
              <h4>- Jane Smith</h4>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 LuxStay. All rights reserved.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>




    
    
  );
 }


export default LandingPage;