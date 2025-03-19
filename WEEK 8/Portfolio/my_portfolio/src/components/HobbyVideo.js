// HobbyVideo.js
import React from "react";

const HobbyVideo = () => {
  return (
    <section>
      <h2>Hobby Video</h2>
      <video controls width="100%">
        <source src="Fitness.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default HobbyVideo;
