import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase'
import Logo from '../../res/Synergy_Pulse.png'
import './index.css'; // Make sure to import your CSS file

const Header = () => {

    const logout = async () => {
        try {
            await signOut(auth)
        } catch (e) {
            console.log(e)
        }
    }

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
                <button className="log-in" onClick={logout}>Log Out</button>
            </div>
            <div className="menu-btn">
                <i className="fa-solid fa-bars"></i>
            </div>
        </nav>
    );
};

export default Header;
