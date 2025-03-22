import React from 'react';

function HobbyVideo() {
  return (
    <section>
      <h2>My Hobby - Fitness</h2>
      <div className="video-container">
        <video 
          className="youtube-video"
          controls
          poster="/Pic 3.jpeg"
        >
          <source src="/Fitness.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="video-description">
          I'm passionate about fitness and maintaining a healthy lifestyle. 
          This video showcases some of my favorite workout routines and 
          demonstrates my commitment to physical well-being.
        </p>
      </div>
    </section>
  );
}

export default HobbyVideo; 