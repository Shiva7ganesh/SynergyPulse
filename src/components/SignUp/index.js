import { auth, googleProvider } from '../../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Google from '../../res/Google.png';
import Logo from '../../res/Synergy_Pulse.png';
import './index.css';

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // State to store the error message

    const onSuccessfullLogin = () => {
        navigate('/loginform');
    };

    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('signed up ' + auth.currentUser.email);
            onSuccessfullLogin();
        } catch (e) {
            setError(e.message); // Set the error message in case of failure
            console.log(e);
        }
    };

    const signUpWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            onSuccessfullLogin();
        } catch (e) {
            setError(e.message); // Set the error message in case of failure
            console.log(e);
        }
    };

    return (
        <div className='login-container'>
            <div className='img-container'></div>
            <div className="container">
                <div className="form-section">
                    <div className="form-wrapper">
                        <div className="logo-container">
                            <a href="#" className="logo-container">
                                <img src={Logo} alt="Logo" className="Logoimg" />
                            </a>
                        </div>
                        <div className="content">
                            <h1>Sign up into SynergyPulse</h1>

                            <div className="action-buttons">
                                <button className="primary-button sign-in-button" onClick={signUpWithGoogle}>
                                    <img src={Google} className='google' />
                                    <span>Sign up with Google</span>
                                </button>
                            </div>

                            <div className="divider">
                                <p>or</p>
                            </div>

                            <div className="email-log-in">
                                <input type="text" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="email-log-in">
                                <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label htmlFor="password">Password</label>
                            </div>

                            {error && <p className="error-message">{error}</p>}

                            <div className="action-buttons">
                                <button className="primary-button" onClick={signUp}>Next</button>
                            </div>
                        </div>
                        <div className="sign-up">
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
