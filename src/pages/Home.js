import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const portfolios = [
  {
    initials: "KP",
    name: "Keya Parvin",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "MongoDB"],
    skillColors: ["#d4edda", "#d1ecf1", "#fff3cd"],
    rating: 4,
  },
  {
    initials: "SP",
    name: "Shaima Parvin",
    role: "UI/UX Designer",
    skills: ["Figma", "Adobe XD", "CSS"],
    skillColors: ["#fce4ec", "#e8eaf6", "#e0f7fa"],
    rating: 4,
  },
  {
    initials: "JP",
    name: "Jara Parvin",
    role: "Frontend Developer",
    skills: ["JavaScript", "HTML/CSS", "Tailwind"],
    skillColors: ["#fff9c4", "#fce4ec", "#e8f5e9"],
    rating: 4,
  },
];

function StarRating({ count }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} style={{ color: s <= count ? "#f5c518" : "#ddd", fontSize: "18px" }}>
          ★
        </span>
      ))}
    </div>
  );
}

function Home() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch {
      alert("Logout failed.");
    }
  }

  const userEmail = currentUser?.email || "";
  const userInitials = userEmail.slice(0, 2).toUpperCase();

  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="nav-logo">PortfolioHub</div>
        <div className="nav-links">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#browser" className="nav-link">Browser</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <div className="nav-user" onClick={handleLogout} title="Click to logout">
          <div className="user-avatar">{userInitials}</div>
          <span className="user-name">AnnaSweety</span>
        </div>
      </nav>

      <section className="hero-section">
        <h1 className="hero-title">Find The Perfect Portfolio</h1>
        <p className="hero-sub">Search thousands of talented professionals by their skills</p>
        <div className="search-bar-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Search by skills (e.g., React, UI/UX Design, Python)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
        <div className="filter-row">
          <select className="filter-select">
            <option>All Skills ▼</option>
            <option>React</option>
            <option>UI/UX Design</option>
            <option>Python</option>
          </select>
          <select className="filter-select">
            <option>Experience Level ▼</option>
            <option>Junior</option>
            <option>Mid-level</option>
            <option>Senior</option>
          </select>
          <select className="filter-select">
            <option>Project Type ▼</option>
            <option>Web Development</option>
            <option>Mobile App</option>
            <option>UI/UX Design</option>
          </select>
        </div>
        <button className="search-btn">Search Now</button>
      </section>

      <section className="featured-section">
        <h2 className="featured-title">Featured Portfolios</h2>
        <div className="portfolio-grid">
          {portfolios.map((p, i) => (
            <div className="portfolio-card" key={i}>
              <div className="card-avatar">{p.initials}</div>
              <h3 className="card-name">{p.name}</h3>
              <p className="card-role">{p.role}</p>
              <div className="card-skills">
                {p.skills.map((skill, j) => (
                  <span key={j} className="skill-tag"
                    style={{ background: p.skillColors[j] }}>
                    {skill}
                  </span>
                ))}
              </div>
              <StarRating count={p.rating} />
              <button className="view-btn">View Portfolio</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;