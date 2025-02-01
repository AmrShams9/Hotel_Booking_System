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
    </div>
  );
 }


export default LandingPage;