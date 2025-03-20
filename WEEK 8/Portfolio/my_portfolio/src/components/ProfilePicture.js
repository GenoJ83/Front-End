// ProfilePicture.js
import React from "react";
import profilePic from "./Profile.jpeg";

const ProfilePicture = () => {
  return (
    <div className="card">
      <h2>Profile Picture</h2>
      <div className="profile-image-container">
        <img 
          src={profilePic} 
          alt="Geno Joshua" 
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;