// Contact.js
import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:genojoshua83@gmail.com">genojoshua83@gmail.com</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/genojoshua"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/genojoshua
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/GenoJ83"
            target="_blank"
            rel="noreferrer"
          >
            github.com/GenoJ83
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
