import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeftPanel from '../components/LeftPanel';
import '../index.css';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!formData.agree) {
      alert('Please agree to Terms & Conditions.');
      return;
    }
    alert(`Account created for: ${formData.fullName}`);
  };

  return (
    <div className="auth-layout">
      <LeftPanel />

      <div className="auth-right">
        <div className="auth-header">
          <h2>Get Started</h2>
          <p>Join thousands of professionals</p>
        </div>

        {/* Tab Switcher */}
        <div className="tab-switcher">
          <Link to="/login" className="tab-btn">Login</Link>
          <span className="tab-btn active">Sign Up</span>
        </div>

        {/* Form */}
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <div className="input-wrapper">
              <input
                type="text"
                name="fullName"
                placeholder="Anna Parvin Sweety"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="Anna.Parvin.Sweety@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <div className="input-wrapper">
              <input
                type={showConfirm ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="eye-icon"
                onClick={() => setShowConfirm(!showConfirm)}
                aria-label="Toggle confirm password"
              >
                {showConfirm ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <div className="checkbox-row">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label htmlFor="agree">
              I agree to <a href="#terms">Terms & Conditions</a>
            </label>
          </div>

          <button type="submit" className="btn-primary">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
