import React from 'react';
import Header from '../Header'
import './index.css';


const About = () => {
  return (
    <>
        <Header />
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are a dedicated team passionate about creating
        innovative solutions. Our mission is to deliver high-quality products
        and services to meet the needs of our users.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
        urna ac magna scelerisque, ut venenatis sem venenatis.
      </p>
      <p>
        Feel free to explore our website and learn more about our team and
        projects.
      </p>
    </div>
    </>
  );
};

export default About;