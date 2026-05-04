import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LeftPanel from "../components/LeftPanel";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/home");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
    setLoading(false);
  }

  return (
    <div className="auth-layout">
      <LeftPanel />
      <div className="auth-right">
        <div className="auth-header">
          <h2>Get Started</h2>
          <p>Join thousands of professionals</p>
        </div>
        <div className="tab-switcher">
          <span className="tab-btn active">Login</span>
          <Link to="/signup" className="tab-btn">Sign Up</Link>
        </div>
        {error && <div className="error-box">{error}</div>}
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="button" className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
          <div className="checkbox-row">
            <input type="checkbox" id="remember"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)} />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Logging in..." : "Login to Dashboard"}
          </button>
          <div className="divider">or continue with</div>
          <div className="social-buttons">
            <button type="button" className="btn-social">Google</button>
            <button type="button" className="btn-social">GitHub</button>
          </div>
          <div className="forgot-row">
            Forgot password? <a href="#reset">Reset here</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;