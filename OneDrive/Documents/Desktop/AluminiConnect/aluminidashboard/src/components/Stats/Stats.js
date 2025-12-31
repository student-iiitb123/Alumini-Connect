import React from "react";
import "./Stats.css";

const Stats = () => {
  const data = [
    { label: "Total Alumni", value: 1240 },
    { label: "Active Members", value: 980 },
    { label: "Jobs Posted", value: 87 },
    { label: "Events Attended", value: 214 },
  ];

  return (
    <div className="stats-container">
      {data.map((item, index) => (
        <div className="stat-card" key={index}>
          <h3>{item.value}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
