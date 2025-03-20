// Feedback.js
import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission here
    console.log('Feedback submitted:', feedback);
    // Reset form
    setFeedback({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="feedback-section card">
      <h2>Leave Feedback</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={feedback.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={feedback.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={feedback.message}
            onChange={handleChange}
            placeholder="Your feedback"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Feedback
        </button>
      </form>
    </section>
  );
};

export default Feedback;