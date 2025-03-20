// ProfilePicture.js
import React from "react";

const ProfilePicture = () => {
  return (
    <section className="profile-section card">
      <div className="profile-container">
        <div className="profile-image-wrapper">
          <img 
            src="/path-to-your-image.jpg" 
            alt="Profile Picture" 
            className="profile-image"
          />
          <div className="profile-overlay">
            <div className="profile-overlay-content">
              <h3>Geno Joshua</h3>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>
        <div className="profile-info">
          <h2>About Me</h2>
          <p>
            I am a passionate frontend developer with a keen eye for design and a love for creating
            beautiful, responsive web applications. I specialize in React and modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfilePicture;