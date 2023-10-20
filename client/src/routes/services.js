import React, { useState, useEffect }from 'react';
import './services.css';
import auth from "../utils/auth";
import {useNavigate} from "react-router-dom";


function Services() {
  const navigate = useNavigate()
  const [isLoggedin, setIsLoggedin] = useState(false);

    useEffect(() => {
        // Check if the user is logged in when the component mounts
        setIsLoggedin(auth.loggedIn());
    }, []);

  const handleBookNow = () => {
    if (isLoggedin) {
      navigate("/appointmentCalendar")
    } else {
      navigate("/login")
    }
  }
  return (
    <>
    <div className='row'>
      <div className="card col-2">
        <h1>Free Initial Consultation</h1>
        <p className="price">$0</p>
        <ul>
          <li>Discovery Call</li>
          <li>Zoom Venue</li>
          <li>60 minutes</li>
          <li>Easy Online Booking</li>
        </ul>
          <button onClick={handleBookNow}>Book now</button>
        </div>
        <div className="card col-2">
        <h1>New Agent Plan</h1>
        <p className="price">$149/month</p>
        <ul>
          <li>90 day Plan</li>
          <li>Bi-weekly Coaching</li>
          <li>Free Scripts</li>
          <li>Free Buyer & Seller Presentations</li>
        </ul>
        <button onClick={handleBookNow}>Book now</button>
        </div>
        <div className="card col-2">
        <h1>Monthly Accountability Plan</h1>
        <p className="price">$399/month</p>
        <ul>
          <li>Bi-weekly Coaching</li>
          <li>Financial Plan</li>
          <li>Marketing Plan</li>
          <li>Business Growth Plan</li>
          <li>Increase Revenue Plan</li>
        </ul>
        <button onClick={handleBookNow}>Book now</button>
        </div>
        <div className="card col-2">
        <h1>Team or Brokerage Start-Up</h1>
        <p className="price">$499/month</p>
        <ul>
          <li>Team Planning</li>
          <li>Bi-weekly Coaching</li>
          <li>Team Coaching</li>
          <li>Administrative Structuring & Planning</li>
          <li>Financial & Marketing Plan</li>
        </ul>
        <button onClick={handleBookNow}>Book now</button>
      </div>
      </div>
    </>
  );
}
export default Services;