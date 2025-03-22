import React from 'react';

function Profile() {
  return (
    <section className="profile-section">
      <img 
        src="/Pic 2.jpeg" 
        alt="Profile Picture" 
        className="profile-picture"
      />
      <div className="profile-info">
        <div className="about-me">
          <h3>About Me</h3>
          <p>
            I'm passionate about technology and its applications in everyday life. 
            My interests include gaming, fitness, and web development. I enjoy 
            exploring new gaming worlds, staying active through regular workouts, 
            and building innovative web solutions. 
            <span className="highlight">
              Currently, I am in my second year of study pursuing a Bachelor's of 
              Science in Computer Science
            </span>, where I'm deepening my knowledge in programming and software 
            development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile; 