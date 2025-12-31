import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      {/* Heading and intro */}
      <div className="about-intro">
        <h2>About Our Alumni Network</h2>
        <p>
          Our Alumni Portal is designed to bring graduates, students, and the institution
          closer together. Alumni can give back by offering mentorship, posting jobs, and
          supporting scholarships, while students benefit through guidance, opportunities,
          and networking.
        </p>
      </div>

      {/* Features */}
      <div className="about-features">
        <div className="feature">
          <img src="Intership.jpeg" alt="Internship" />
          <p>Alumni share career opportunities for students</p>
        </div>

        <div className="feature">
          <img src="mentorship.png" alt="Mentorship" />
          <p>Guidance and support from experienced professionals</p>
        </div>

        <div className="feature">
          <img src="Scholar.jpeg" alt="Scholarship" />
          <p>Alumni donations empowering the next generation</p>
        </div>
      </div>
    </section>
  );
};

export default About;
