// Feedback.js
import React from "react";

const Feedback = () => {
  return (
    <section>
      <h2>Feedback</h2>
      <form>
        <input type="text" name="name" placeholder="Your Name" required />
        <textarea name="question" rows="4" placeholder="Ask me something" required></textarea>
        <div className="button-container">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </section>
  );
};

export default Feedback;