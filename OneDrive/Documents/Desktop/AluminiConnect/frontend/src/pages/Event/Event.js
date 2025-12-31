import React from "react";
import "./Event.css";

const Event = () => {
  return (
    <section className="events">
      <div className="events-header">
        <h2>Upcoming Events</h2>
        <p>
          Stay updated with reunions, workshops, and guest lectures
          organized by our alumni and institution.
        </p>
      </div>

      <div className="event-list">
        {/* Event 1 */}
        <div className="event-card">
          <img src="387.jpg" alt="Hackathon" />
          <div className="event-info">
            <h3>Hackathon 2025</h3>
            <p className="date">Sept 10, 2025</p>
            <p>24-hour coding challenge powered by alumni.</p>
            <a href="#">Apply Now</a>
          </div>
        </div>

        {/* Event 2 */}
        <div className="event-card">
          <img src="alumini.jpeg" alt="Annual Meet" />
          <div className="event-info">
            <h3>Annual Alumni Meet 2025</h3>
            <p className="date">Aug 20, 2025</p>
            <p>A grand reunion of alumni and students.</p>
            <a href="#">Register Now</a>
          </div>
        </div>

        {/* Event 3 */}
        <div className="event-card">
          <img src="download.jpeg" alt="AI Talk" />
          <div className="event-info">
            <h3>Tech Talk: Future of AI</h3>
            <p className="date">Aug 28, 2025</p>
            <p>Guest lecture by Priya, Batch 2025.</p>
            <a href="#">Join Event</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
