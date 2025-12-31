import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <img src="collage.png" alt="college" className="hero-bg" />

      <div className="hero-content">
        <h2>Stay Connected. Give Back. Grow Together</h2>
        <p>
          Connect with alumni, explore opportunities, and inspire the next generation.
        </p>
        <div className="hero-buttons">
          <button>Join Alumni Network</button>
          <button>Explore Events</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

