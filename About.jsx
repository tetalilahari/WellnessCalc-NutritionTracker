import React from "react";
import "../styles/pages.css";

const About = () => {
  return (
    <div className="page-container">
      <h1>About WellnessCalc</h1>
      <p>
        Welcome to <strong>WellnessCalc</strong>, your trusted companion for
        understanding and improving your health through science-based
        calculators. Our tools help you track important health metrics and
        provide personalized recommendations.
      </p>
      <p>
        Our mission is to empower you with simple yet effective tools for a
        healthier lifestyle.
      </p>
      <h3>Why Use WellnessCalc?</h3>
      <ul>
        <li>Easy to use and understand</li>
        <li>Scientifically accurate formulas</li>
        <li>Personalized health recommendations</li>
        <li>Free and accessible anywhere</li>
      </ul>
    </div>
  );
};

export default About;
