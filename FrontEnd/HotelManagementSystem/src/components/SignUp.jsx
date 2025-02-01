import React, { useState } from 'react';
import './Styles/SignUp.css';
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Handle signup logic here
    console.log('Form Data Submitted:', formData);
    // You can add your API call or further logic here
  };

  return (
    <div><nav className="navbar">
        <div className="container">
        <Link to="/" className="logo">LuxStay</Link>
          </div>
          </nav>
    <div className='auth-wrapper'>
        <div className='auth-inner'>
        <h2 className="text-center mb-4">Register</h2>
        
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            className="form-control"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password" // Changed to "password" type
            id="password"
            className="form-control"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
      </form>
    </div>
    </div>
    </div>
  );
}