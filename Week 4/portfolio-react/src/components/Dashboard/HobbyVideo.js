import React from 'react';

function HobbyVideo() {
  return (
    <section>
      <h2>My Hobby - Fitness</h2>
      <div className="video-container">
        <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/oYlsmbxTVM4/"
          title="Fitness Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
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