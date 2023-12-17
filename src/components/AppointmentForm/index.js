import React from 'react';
import Header from '../Header'
import './index.css'; 

const AppointmentForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <Header />
    <div>
      <h1>Book Your Appointment</h1>
      <form id="appointmentForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" required />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="weight">Weight:</label>
        <input type="number" id="weight" name="weight" required />

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" required />

        <label htmlFor="doctor">Doctor:</label>
        <select id="doctor" name="doctor">
          <option value="doctor2">Dr. Shiva Ganesh Reddy</option>
          <option value="doctor3">Dr. Anvesh</option>
          <option value="doctor4">Dr. Rishik Reddy</option>
          <option value="doctor1">Dr. Sai Karthikeya</option>
        </select>

        <label htmlFor="reason">Reason:</label>
        <textarea id="reason" name="reason" rows="4" cols="50"></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
    </>
  );
};

export default AppointmentForm;
