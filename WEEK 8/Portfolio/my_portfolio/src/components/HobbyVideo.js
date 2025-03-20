// HobbyVideo.js
import React from "react";

const HobbyVideo = () => {
  return (
    <section className="hobby-section card">
      <h2>My Hobbies</h2>
      <div className="hobby-container">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/your-video-id"
            title="Hobby Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="hobby-video"
          ></iframe>
        </div>
        <div className="hobby-description">
          <h3>Video Title</h3>
          <p>
            This video showcases one of my favorite hobbies. I enjoy creating and sharing
            content that reflects my interests and passions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HobbyVideo;
