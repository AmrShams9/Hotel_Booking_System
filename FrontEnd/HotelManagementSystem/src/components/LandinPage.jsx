import './Styles/LandingPage.css';
import { FaHotel, FaMapMarkedAlt, FaHandHoldingUsd } from 'react-icons/fa'; // Icons for features
import { Link } from "react-router-dom";
import PoolImage from '../assets/pool.jpg';
import Testi1 from '../assets/hotel.png';
import Testi2 from '../assets/hotel2.png';
import Testi3 from '../assets/hotel1.png';
import grid1 from '../assets/2.jpg';
import grid2 from '../assets/3.jpg';
import grid3 from '../assets/4.jpg';
import SiteLogo from '../assets/hotel-logo.png';
import HotelFooter from './parts/Footer';




const LandingPage = () => {
  return (
    <div>
      <div className="globalContainer">

        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="container">
            <div className="logo-container">
              <img className="logo-hotel" src={SiteLogo} alt="" />
            </div>

            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="auth-buttons">
              <Link to="/login" className="btn btn-primary">Login</Link>
              <Link to="/SignUp" className="btn btn-primary">Register</Link>
            </div>
          </div>
        </nav>
        {/* Hero Section */}

        <div className="grid-container">
          <div className="grid-item large">
            <img src={PoolImage} alt="Large Image" />
            <div className="overlay">
              <h2>Luxury Experience</h2>
              <p>Enjoy the finest accommodations with top-tier services.</p>
              <a href="#" className="btn">Book Now</a>
            </div>
          </div>

          <div className="grid-item small">
            <img src={grid1} alt="Small Image 1" />
          </div>
          <div className="grid-item small">
            <img src={grid2} alt="Small Image 2" />
          </div>
          <div className="grid-item small">
            <img src={grid3} alt="Small Image 3" />
          </div>
        </div>


        {/* <section id="home" className="hero ">
          <img className="heroImage" src={PoolImage} alt="pool-image" />
          <div className="container">
            <div className="hero-content scroll">
              <h1>Your Luxury Stay Awaits</h1>
              <p>Discover the finest hotels and resorts tailored to your needs. Book your dream stay today!</p>
              <a href="#" className="btn btn-primary">Explore Hotels</a>
            </div>
          </div>

          <div class="grid-item small">
            <img src="https://fakeimg.pl/300/" alt="Small Image 1" />
          </div>
          <div class="grid-item small">
            <img src="https://fakeimg.pl/300/" alt="Small Image 2" />
            /    </div>
          <div class="grid-item small">
            <img src="https://fakeimg.pl/300/" alt="Small Image 3" />
          </div>
        </section> */}

        {/* Features Section */}
        <section id="features" className="features scroll">
          <div className="container scroll ">
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

        <section id="testimonials" className="testimonials">
          <div className="container">
            <h2>What Our Guests Say</h2>
            <div className="testimonial-grid">
              <div className="testimonal-item">
                <img src={Testi1} alt="Guest at the Spa" />
                <p>
                  The spa at LuxuryStay Hotel is absolutely phenomenal!
                </p>
                <h3>Lucas Thompson</h3>
              </div>

              <div className="testimonal-item">
                <img src={Testi2} alt="Newlywed Couple" />
                <p>
                  Our honeymoon at LuxuryStay Hotel was magical!
                </p>
                <h3>Emily & James Carter</h3>
              </div>

              <div className="testimonal-item">
                <img src={Testi3} alt="Guest at the Restaurant" />
                <p>
                  Dining at the hotel’s gourmet restaurant was a true delight!
                </p>
                <h3>Sophia Martinez</h3>
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

        <HotelFooter />



      </div>
    </div>



  );
}


export default LandingPage;