import { AiFillSchedule } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Header from '../Header'
import Basic from '../../res/Basic.jpg'
import Budget from '../../res/Budget.jpg'
import Comprehensive from '../../res/Comprehensive.jpg'
import Premium from '../../res/Premium.jpg'
import './index.css'

const Home = () => {
    const navigate = useNavigate()

    const navAppointment = () => {
        navigate('/appointment')
    }

    const navDashboard = () => {
        navigate('/dashboard')
    }

    const navReport = () => {
        navigate('/reportdashboard')
    }

    const navDoctors = () => {
        navigate('/doctors')
    }

    return (
        <>
            <Header />
            <div className='home-container'>
                <h1>Welcome User</h1>
                <div className='buttons-container'>
                    <button className='big-button cyan' onClick={navAppointment}>
                        <AiFillSchedule size="50px"/>
                        <p className="btn-text">Schedule an Appointment!</p>
                    </button>
                    <button className='big-button magenta' onClick={navDashboard}>
                        <MdDashboard size="50px"/>
                        <p className="btn-text">View your Dashboard!</p>
                    </button>
                    <button className='big-button orange' onClick={navReport}>
                        <TbReportSearch size="50px"/>
                        <p className="btn-text">View Reports!</p>
                    </button>
                    <button className='big-button lime' onClick={navDoctors}>
                        <FaUserDoctor size="50px"/>
                        <p className="btn-text">View our Doctors!</p>
                    </button>
                </div>
                <br />
                <hr className='white' />
                <br />
                <div className="insurance">
                <h1>Explore Your Health Insurance Options</h1>
            <div className="container-insurance">
                <div className="card cyan">
                    <img src={Basic} alt="Insurance 1" />
                    <h3>Plan A: Basic Coverage</h3>
                    <p>Ideal for individuals with low healthcare needs, offering essential coverage at an affordable price.</p>
                    <a href="#">Learn More</a>
                </div>
                <div className="card magenta">
                    <img src={Comprehensive} alt="Insurance 2" />
                    <h3>Plan B: Comprehensive Care</h3>
                    <p>Provides broader coverage for a wider range of medical services, suitable for families or individuals with higher needs.</p>
                    <a href="#">Get a Quote</a>
                </div>
                <div className="card orange">
                    <img src={Premium} alt="Insurance 3" />
                    <h3>Plan C: Premium Protection</h3>
                    <p>Offers the most extensive coverage, including specialized treatments and additional benefits for optimal peace of mind.</p>
                    <a href="#">Compare Plans</a>
                </div>
                <div className="card lime">
                    <img src={Budget} alt="Insurance 4" />
                    <h3>Plan D: Custom Choice</h3>
                    <p>Tailor your coverage to your specific needs and budget with flexible options and add-ons.</p>
                    <a href="#">Contact Us</a>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Home