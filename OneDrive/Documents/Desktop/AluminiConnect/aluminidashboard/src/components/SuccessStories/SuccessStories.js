import React from 'react';
import './SuccessStories.css';

const stories = [
  {
    name: "Riya Sharma",
    job: "Software Engineer at Google",
    image: "./abc.jpeg",
    story: "AlumniConnect helped me reconnect with mentors who guided me through my job switch!"
  },
  {
    name: "Aditya Mehta",
    job: "Product Manager at Amazon",
    image: "./asd.jpg",
    story: "The community support here is amazing. I got my dream job with the help of referrals."
  },
  {
    name: "Neha Kapoor",
    job: "UX Designer at Microsoft",
    image: "./adb.jpg",
    story: "Loved the mentorship sessions! Real alumni with real advice."
  }
];

function SuccessStories() {
  return (
    <section className="success-stories">
      <h2 className="success-title">✨ Success Stories</h2>
      <div className="story-cards">
        {stories.map((story, index) => (
          <div className="story-card" key={index}>
            <img src={story.image} alt={story.name} className="story-img" />
            <h3 className="story-name">{story.name}</h3>
            <p className="story-job">{story.job}</p>
            <p className="story-text">"{story.story}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SuccessStories;

