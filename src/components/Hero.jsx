import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-video-container">
        {/* Placeholder for video - using a dark overlay for now */}
        <div className="video-overlay"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video"
          poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-concert-lights-flashing-in-the-dark-41859-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="hero-content">
        <h2 className="hero-title">
          <span>LEADER IN</span><br />
          <span>ENTERTAINMENT</span>
        </h2>
        <p className="hero-subtitle">Decide Entertainment</p>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL</span>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default Hero;
