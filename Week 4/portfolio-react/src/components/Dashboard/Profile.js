import React from 'react';

function Profile() {
  return (
    <section className="profile-section">
      <img 
        src="/images/Pic 2.jpeg" 
        alt="Geno Joshua" 
        className="profile-picture"
      />
      <div className="profile-info">
        <h2 className="profile-name">Geno Joshua</h2>
        <p className="profile-id">Student ID: B20233</p>
        <div className="about-me">
          <h3>About Me</h3>
          <p>
            I am a passionate <span className="highlight">technology enthusiast</span> with a keen interest in 
            <span className="highlight"> gaming</span>, <span className="highlight">fitness</span>, and 
            <span className="highlight"> web development</span>. Currently pursuing my Bachelor's of Science in 
            Computer Science, I combine my academic knowledge with practical skills to create engaging digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile; 