import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import Logo from '../../res/Synergy_Pulse.png';
import './index.css'; 

const Header = () => {
    const navigate = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if (!user) {
            navigate('/login');
        }
    });

    const logout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} className="logoimg" alt="Synergy Pulse Logo" />
            </div>
            <div className="menu">
                <div className="menu-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <button className="log-in" onClick={logout}>
                    Log Out
                </button>
            </div>
            <div className="menu-btn">
                <i className="fa-solid fa-bars"></i>
            </div>
        </nav>
    );
};

export default Header;
