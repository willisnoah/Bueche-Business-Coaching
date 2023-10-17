import React from 'react';
import './services.css';

function Services() {
  return (
    <>
      <div className="card">
        <h1>Free Initial Consultation</h1>
        <p className="price">$0</p>
        <ul>
          <li>Discovery Call</li>
          <li>Zoom Venue</li>
          <li>60 minutes</li>
          <li>Easy Online Booking</li>
        </ul>
        {/* Use a regular anchor tag to navigate to the "AppointmentCalendar" component */}
        <a href="/appointmentCalendar">
          <button>Book now</button>
        </a>
      </div>
      {/* ... (other cards) */}
    </>
  );
}
export default Services;