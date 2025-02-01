import React from "react";
import './Styles/LandingPage.css';

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

    </div>
    
  );
 }


export default LandingPage;