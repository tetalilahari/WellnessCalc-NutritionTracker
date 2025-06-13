import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <p>Have questions or feedback? We'd love to hear from you!</p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your full name" />
          </label>

          <label>
            Email:
            <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="your.email@example.com" />
          </label>

          <label>
            Message:
            <textarea name="message" required value={formData.message} onChange={handleChange} placeholder="Write your message here..." rows={5} />
          </label>

          <button type="submit">Send Message</button>
        </form>
      ) : (
        <p className="thank-you-message">Thank you for reaching out! We'll get back to you soon.</p>
      )}

      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Contact;
