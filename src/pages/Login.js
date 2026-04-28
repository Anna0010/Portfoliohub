import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LeftPanel from '../components/LeftPanel';
import '../index.css';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', remember: false });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in with: ${formData.email}`);
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
          <span className="tab-btn active">Login</span>
          <Link to="/signup" className="tab-btn">Sign Up</Link>
        </div>

        {/* Form */}
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
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
                placeholder="Enter your Password"
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

          <div className="checkbox-row">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              checked={formData.remember}
              onChange={handleChange}
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="btn-primary">
            Login to Dashboard
          </button>

          <div className="divider">or continue with</div>

          <div className="social-buttons">
            <button type="button" className="btn-social">Google</button>
            <button type="button" className="btn-social">GitHub</button>
          </div>

          <div className="forgot-row">
            Forgot password?{' '}
            <a href="#reset">Reset here</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
