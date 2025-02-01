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



    </div>
    
  );
 }


export default LandingPage;