import { auth, googleProvider } from '../../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useState } from 'react'
import Google from '../../res/Google.png'
import Logo from '../../res/Synergy_Pulse.png'
import './index.css'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log('signup')
    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            console.log('signed up ' + auth.currentUser.email)
        } catch (e) {
            console.log(e)
        }
       
    }

    const signUpWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (e) {
            console.log(e)
        }
       
    }

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
                            <input type="text" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="email-log-in">
                            <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <label htmlFor="password">Password</label>
                        </div>

                        <div className="action-buttons">
                            <button className="primary-button" onClick={signUp}>Next</button>
                        </div>
                    </div>
                    <div className="sign-up">
                        <p>Aready have an account? <a href="#">Login</a></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SignUp