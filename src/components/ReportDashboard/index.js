import React from 'react';
import Header from '../Header'
import './index.css'; 

const ReportDashboard = () => {
  return (
    <>
     <Header />
     <div className="bg-container">
      <h1>Report Dashboard</h1>
      <div className="container">
        <div className="report-card">
          <h2>Report 1</h2>
          <p>Report Date: 2023-03-10</p>
          <p>Report Time: 10:00</p>
          <p>
            Download Report: <a href="#" className="report-link" data-url="{{ report_url }}">Download Report</a>
          </p>
        </div>
        <div className="report-card">
          <h2>Report 2</h2>
          <p>Report Date: 2023-02-15</p>
          <p>Report Time: 14:30</p>
          <p>
            Download Report: <a href="#" className="report-link">Download Report</a>
          </p>
        </div>

        <div className="report-card">
          <h2>Report 3</h2>
          <p>Report Date: 2023-03-10</p>
          <p>Report Time: 10:00</p>
          <p>
            Download Report: <a href="#" className="report-link">Download Report</a>
          </p>
        </div>
      </div>
      {/* End of report card examples */}
    </div>
    </>
  );
};

export default ReportDashboard;
