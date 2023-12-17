import React from 'react';
import Header from '../Header'
import './index.css'; // Make sure to import your CSS file

const Dashboard = () => {
  return (
    <>
        <Header />
        <div>
      <h1>Dashboard</h1>    
      <h2 className="appointment-status">Appointment Status</h2>
      <div className="container">
        <div className="report-card">
          <div className="appointment-status appointment-status-scheduled">Scheduled</div>
          <h2>Appointment Number 1</h2>
          <p className="report-date">Appointment Date: 2022-01-01</p>
          <p className="report-details">Time: 10:00 AM</p>
          <p className="report-date">Doctor Name: Doctor A</p>
        </div>

        <div className="report-card">
          <div className="appointment-status appointment-status-cancelled">Cancelled</div>
          <h2>Appointment Number 2</h2>
          <p className="report-date">Appointment Date: 2022-01-02</p>
          <p className="report-details">Time: 2:00 PM</p>
          <p className="report-date">Doctor Name: Doctor B</p>
        </div>
        
        {/* Add more appointment status examples here */}
      </div>

      <h2 className="report-status">Reports Status</h2>
      <div className="container">
        <div className="report-card">
          <div className="report-status report-status-completed">Completed</div>
          <h2>Report Title 1</h2>
          <p className="report-date">Report Date: 2022-01-01</p>
          <p className="report-details">Details about the report 1</p>
        </div>
        <div className="report-card">
          <div className="report-status report-status-pending">Pending</div>
          <h2>Report Title 2</h2>
          <p className="report-date">Report Date: 2022-01-02</p>
          <p className="report-details">Details about the report 2</p>
        </div>
        <div className="report-card">
          <div className="report-status report-status-completed">Completed</div>
          <h2>Report Title 3</h2>
          <p className="report-date">Report Date: 2022-01-03</p>
          <p className="report-details">Details about the report 3</p>
        </div>
        {/* Add more report status examples here */}
      </div>
    </div>
    </>

  );
};

export default Dashboard;
