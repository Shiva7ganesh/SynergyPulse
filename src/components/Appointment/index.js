import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header'
import './index.css'; // Make sure to import your CSS file

const AppointmentBooking = () => {
    const navigate = useNavigate()
    const toAppointmentForm = () => {
        navigate('/appointmentform')
    }

  return (
    <>
        <Header />
        <div className="container">
      <h1>Appointment Booking</h1>
      <div className="book-opt">
        <div className="booking-option">
          <h2>Book Appointment via Call</h2>
          <button className="call-button">Call Now</button>
          <p>Call us at <span className="phone-number">123-456-7890</span></p>
        </div>
        <div className="booking-option">
          <h2>Book Appointment Online</h2>
          <p>Select a date and time from the available options below</p>
          <button className="book-button" onClick={toAppointmentForm}>Book Now</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default AppointmentBooking;
