import React from 'react';
import './Donate.css';

const Donate = () => {
  return (
    <section className="donate">
      <div className="donate-image">
        <img src="Donate.jpg" alt="Donate" />
      </div>

      <div className="donate-content">
        <h2>Support the Next Generation</h2>
        <p>
          Your contribution helps provide scholarships, resources, and
          opportunities for students.
        </p>
        <button>Donate Now</button>
      </div>
    </section>
  );
};

export default Donate;
