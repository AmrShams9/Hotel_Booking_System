import React from "react";
import "./Footer.css"; // Importing the CSS file

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Hotel Branding */}
                <div className="footer-section">
                    <h2 className="footer-title">LuxuryStay Hotel</h2>
                    <p>Experience comfort & elegance at its best.</p>
                </div>

                {/* Navigation Links */}
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Rooms & Suites</a></li>
                        <li><a href="#">Dining & Bar</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>123 Ocean Drive, Miami, FL 33139</p>
                    <p>Phone: +1 (305) 123-4567</p>
                    <p>Email: info@luxurystay.com</p>
                </div>

                {/* Newsletter Subscription */}
                <div className="footer-section">
                    <h3>Newsletter</h3>
                    <p>Subscribe for exclusive offers & updates.</p>
                    <div className="newsletter">
                        <input type="email" placeholder="Enter your email" />
                        <button>Join</button>
                    </div>
                </div>
            </div>

            {/* Social Media & Copyright */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} LuxuryStay Hotel. All rights reserved.</p>
                <div className="social-icons">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                    <a href="#">Tripadvisor</a>
                </div>
            </div>
        </footer>
    );
}
