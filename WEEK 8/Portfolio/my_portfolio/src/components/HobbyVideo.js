// HobbyVideo.js
import React from "react";
import hobbyVideo from "./Hobby.mp4";

const HobbyVideo = () => {
  return (
    <div className="card">
      <h2>Hobby Video</h2>
      <div className="video-container">
        <video 
          controls 
          className="hobby-video"
          poster="video-poster.jpg"
        >
          <source src={hobbyVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HobbyVideo;
