import { AiFillSchedule } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import Header from '../Header'
import './index.css'

const Home = () => {

    return (
        <>
            <Header />
            <div className='home-container'>
                <h1>Welcome User</h1>
                <div className='buttons-container'>
                    <button className='big-button cyan'>
                        <AiFillSchedule size="50px"/>
                        <p className="btn-text">Schedule an Appointment!</p>
                    </button>
                    <button className='big-button magenta'>
                        <MdDashboard size="50px"/>
                        <p className="btn-text">View your Dashboard!</p>
                    </button>
                    <button className='big-button orange'>
                        <TbReportSearch size="50px"/>
                        <p className="btn-text">View Reports!</p>
                    </button>
                    <button className='big-button lime'>
                        <FaUserDoctor size="50px"/>
                        <p className="btn-text">View our Doctors!</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home