import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; // Make sure you create this CSS file

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-green">Well</span>
          <span className="logo-blue">nessCalc</span>
        </div>
        <div className="nav-buttons">
          <button onClick={() => navigate("/login")} className="btn-link">
            Login
          </button>
          <button onClick={() => navigate("/register")} className="btn-primary">
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <h1>
          <span className="logo-green">Well</span>
          <span className="logo-blue">nessCalc</span>
        </h1>
        <p>
          Your personal health companion for calculating BMI, BMR, and TDEE
          with personalized recommendations.
        </p>
      </header>

      {/* Features Section */}
      <div className="features">
        <div className="feature-card">
          <div className="icon green">📈</div>
          <h3>Calculate BMI</h3>
          <p>Understand your weight status and health category.</p>
        </div>
        <div className="feature-card">
          <div className="icon blue">🎯</div>
          <h3>Find Your BMR</h3>
          <p>Know how many calories your body burns at rest.</p>
        </div>
        <div className="feature-card">
          <div className="icon teal">📊</div>
          <h3>Get TDEE</h3>
          <p>Get personalized daily calorie recommendations.</p>
        </div>
      </div>

      {/* Health Journey Section */}
      <section className="journey-section">
        <h2>Your Health Journey</h2>
        <div className="journey-steps">
          <div className="step">
            <div className="icon green">👤</div>
            <p>Join Us</p>
            <small>Create your account</small>
          </div>
          <div className="step">
            <div className="icon blue">⚙️</div>
            <p>Calculate</p>
            <small>Use our health tools</small>
          </div>
          <div className="step">
            <div className="icon teal">🏆</div>
            <p>Achieve</p>
            <small>Reach your health goals</small>
          </div>
        </div>
      </section>
    </div>
  );
}
