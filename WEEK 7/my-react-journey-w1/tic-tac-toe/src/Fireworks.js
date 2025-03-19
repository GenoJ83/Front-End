import React, { useEffect, useState } from "react";
import "./App.css"; // Ensure the CSS is imported

function Fireworks() {
  const [fireworks, setFireworks] = useState([]);

  useEffect(() => {
    // Generate fireworks particles
    const particles = [];
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const size = Math.random() * 5 + 2; // Random size between 2px and 7px
      const color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random bright color
      const duration = Math.random() * 1 + 0.5; // Random duration between 0.5s and 1.5s

      particles.push(
        <div
          key={i}
          className="firework"
          style={{
            left: `${x}px`,
            top: `${y}px`,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            animationDuration: `${duration}s`,
          }}
        />
      );
    }
    setFireworks(particles);

    // Remove fireworks after the animation ends
    const timeout = setTimeout(() => {
      setFireworks([]);
    }, 1500); // Match the longest animation duration

    return () => clearTimeout(timeout);
  }, []);

  return <div className="fireworks">{fireworks}</div>;
}

export default Fireworks;