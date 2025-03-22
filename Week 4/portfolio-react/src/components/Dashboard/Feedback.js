import React, { useState } from 'react';

function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the feedback to a server
    console.log('Feedback submitted:', formData);
    setSuccess(true);
    setFormData({ name: '', message: '' });
  };

  return (
    <section>
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit} className="auth-card">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <button type="submit">Submit Feedback</button>
        {success && <div className="success-message">Thank you for your feedback!</div>}
      </form>
    </section>
  );
}

export default Feedback; 