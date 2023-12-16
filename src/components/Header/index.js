import React from 'react';
import Logo from '../../res/Synergy_Pulse.png'
import './index.css'; // Make sure to import your CSS file

const Header = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} className="logoimg" alt="Synergy Pulse Logo" />
            </div>
            <div className="menu">
                <div className="menu-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
                <button className="log-in">Log Out</button>
            </div>
            <div className="menu-btn">
                <i className="fa-solid fa-bars"></i>
            </div>
        </nav>
    );
};

export default Header;
