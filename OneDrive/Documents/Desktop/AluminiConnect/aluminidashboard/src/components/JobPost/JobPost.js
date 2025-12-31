import React from "react";
import "./JobPost.css";

const JobPost = ({ title, company, location, type, link }) => {
  return (
    <div className="job-card">
      <div className="job-info">
        <h3 className="job-title">{title}</h3>
        <p className="job-company">{company}</p>
        <p className="job-details">{location} • {type}</p>
      </div>
      <a href={link} className="job-btn" target="_blank" rel="noopener noreferrer">
        Apply Now
      </a>
    </div>
  );
};

export default JobPost;
