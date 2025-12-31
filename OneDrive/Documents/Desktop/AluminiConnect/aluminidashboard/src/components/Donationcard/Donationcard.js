import React from 'react';
import './Donationcard.css';

function Donationcard() {
  return (
    <div className="donation-card-container">
      <h2 className="donation-heading">Support the Alumni Network </h2>
      <p className="donation-subtext">
        Your contribution helps us create more opportunities for alumni and students.
      </p>

      <div className="donation-card">
        <img
          src="./abf.png"
          alt="Donation Banner"
          className="donation-image"
        />
        <div className="donation-info">
          <p className="donation-message">
            Every small donation makes a big difference! 
          </p>
          <button className="donate-button">Donate Now</button>
        </div>
      </div>
    </div>
  );
}

export default Donationcard;

