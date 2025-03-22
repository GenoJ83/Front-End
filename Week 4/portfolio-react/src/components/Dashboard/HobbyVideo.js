import React from 'react';

function HobbyVideo() {
  return (
    <section>
      <h2>My Hobby - Gaming</h2>
      <div className="video-container">
        <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/oYlsmbxTVM4/" //video from youtube
          title="Fitness Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <p className="video-description">
          I'm passionate about gaming. 
          This video showcases a gameplay of one of my favourite games.
        </p>
      </div>
    </section>
  );
}

export default HobbyVideo; 