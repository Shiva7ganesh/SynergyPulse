import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../config/firebase'
import Google from '../../res/Google.png'
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../../res/Synergy_Pulse.png'
import './index.css'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSuccessfullLogin = () => {
        navigate('/');
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
            onSuccessfullLogin()
        } catch (e) {
            console.log(e)
        }
    }

    const handleSignIn = async () => {
        const auth = getAuth();

        try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // Handle successful login, you may redirect or perform additional actions.
        console.log('Logged in successfully', user);
        onSuccessfullLogin()
        } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle error, you may show an error message to the user.
        console.error('Error signing in', errorCode, errorMessage);
        }
    };

    return (
        <div className='login-container'>
            <div className='img-container'>
                    
            </div>
            <div className="container">
            <div className="form-section">
                <div className="form-wrapper">
                    <div className="logo-container">
                        <a href="#" className="logo-container">
                            <img src={Logo} alt="Logo" className="Logoimg" />
                        </a>
                    </div>
                    <div className="content">
                        <h1>Log in to SynergyPulse</h1>

                        <div className="action-buttons">
                            <button className="primary-button sign-in-button" onClick={signInWithGoogle}>
                                <img src={Google} className='google' />
                                <span>Sign in with Google</span>
                            </button>
                        </div>

                        <div className="divider">
                            <p>or</p>
                        </div>

                        <div className="email-log-in">
                            <input type="text" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="email-log-in">  
                            <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="action-buttons">
                            <button className="primary-button" onClick={handleSignIn}>Next</button>
                        </div>
                    </div>
                    <div className="sign-up">
                        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login