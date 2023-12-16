import Google from '../../res/Google.png'
import Logo from '../../res/Synergy_Pulse.png'
import './index.css'

const Login = () => {

    return (
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
                            <button className="primary-button sign-in-button">
                                <img src={Google} className='google' />
                                <span>Sign in with Google</span>
                            </button>
                        </div>

                        <div className="divider">
                            <p>or</p>
                        </div>

                        <div className="email-log-in">
                            <input type="text" id="log-in" placeholder="Email" />
                            <label htmlFor="log-in">Phone, email, or username</label>
                        </div>

                        <div className="action-buttons">
                            <button className="primary-button">Next</button>
                            <button className="secondary-button">Forgot Password?</button>
                        </div>
                    </div>
                    <div className="sign-up">
                        <p>Don't have an account? <a href="#">Sign up</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login