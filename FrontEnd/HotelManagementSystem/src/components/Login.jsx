import React, { useState } from 'react';
import './Styles/Login.css';
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '', role: 'user', });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Handle login logic here
    console.log('Form Data Submitted:', formData);
    // You can add your API call or further logic here
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <a href="#" className="logo">LuxStay</a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

        </div>
      </nav>

      <div className="Login-Container">
        <div className="Login-box">
          <h2>Login Page</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Enter your password"
                required
              />
            </div>
             {/* Role Selection Radio Buttons */}
             <div className="form-group">
  <label>Role</label>
  <div className="radio-group">
    <label>
      <input
        type="radio"
        name="role"
        value="user"
        checked={formData.role === 'user'}
        onChange={(e) =>
          setFormData({ ...formData, role: e.target.value })
        }
      />
      User
    </label>
    <label>
      <input
        type="radio"
        name="role"
        value="admin"
        checked={formData.role === 'admin'}
        onChange={(e) =>
          setFormData({ ...formData, role: e.target.value })
        }
      />
      Admin
    </label>
  </div>
</div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
    
  );
}