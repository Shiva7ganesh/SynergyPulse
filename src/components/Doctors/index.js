import React, { useState } from 'react';
import './index.css'; // Make sure to update the path to your CSS file
import Header from '../Header'
import Doctor1 from '../../res/Doctor_1.jpg'; 
import Doctor2 from '../../res/Doctor_2.jpg';
import Doctor3 from '../../res/Doctor_3.jpg';
import Doctor4 from '../../res/Doctor_4.jpg';

const DoctorInfo = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const handlePrev = () => {
    setCurrentCard((prevCard) => (prevCard > 0 ? prevCard - 1 : 3));
  };

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard < 3 ? prevCard + 1 : 0));
  };

  return (
    <>
        <Header />
        <div>
      <h1>Our Doctors Information</h1>
      <div className="wrapper">
        <i id="left" className="fa-solid fa-angle-left" onClick={handlePrev}></i>
        <ul className="carousel">
          {Array.from({ length: 4 }).map((_, index) => (
            <li key={index} className={`card ${index === currentCard ? 'active' : ''}`}>
              <div className="img"><img src={`Doctor_${index + 1}.jpg`} alt={`img ${index + 1}`} draggable="false" /></div>
              <h2>{`Dr. Doctor ${index + 1}`}</h2>
              <span>{`MBBS, Specialty ${index + 1}`}</span>
            </li>
          ))}
        </ul>
        <i id="right" className="fa-solid fa-angle-right" onClick={handleNext}></i>
      </div>
    </div>
    </>
  );
};

export default DoctorInfo;
