import {useState} from 'react'
import './index.css'

const LoginForm = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('male');
  const [address, setAddress] = useState('');
  const [homePhone, setHomePhone] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [emergencyName, setEmergencyName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to your backend or perform any desired actions
    console.log({
      firstName,
      lastName,
      dob,
      gender,
      address,
      homePhone,
      mobilePhone,
      aadhar,
      emergencyName,
      relationship,
      emergencyPhone,
    });
  };

  const nextStep = (event) => {
    event.preventDefault()
    console.log("Current Step:", step);
    switch (step) {
      case 1:
        if (firstName !== '' && lastName !== '') {
          setStep((prevStep) => prevStep + 1);
        } else {
          alert("Please fill all the details");
        }
        break;
      case 2:
        if (dob !== '') {
          setStep((prevStep) => prevStep + 1);
        } else {
          alert("Please fill all the details");
        }
        break;
      case 3:
        if (gender !== '') {
          setStep((prevStep) => prevStep + 1);
        } else {
          alert("Please fill all the details");
        }
        break;
      case 4:
        if (address !== '') {
          setStep((prevStep) => prevStep + 1);
        } else {
          alert("Please fill all the details");
        }
        break;
      case 5:
        if (homePhone !== '' && mobilePhone !== '' && aadhar !== '') {
          setStep((prevStep) => prevStep + 1);
        } else {
          alert("Please fill all the details");
        }
        break;
      case 6:
        if (emergencyName !== '' && relationship !== '' && emergencyPhone !== '') {
          setStep((prevStep) => prevStep + 1);
        } else {
          alert("Please fill all the details");
        }
        break;
      default:
        break;
    }
  };
  
  

  const prevStep = (event) => {
    event.preventDefault()
    setStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <form>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <label htmlFor="lastName">Last Name:</label>
            <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            />
            <button onClick={nextStep}>Next</button>
          </form>
        );
      case 2:
        return (
          <form>
            <label htmlFor="dob">Date of Birth:</label>
            <input
            type="date"
            id="dob"
            name="dob"
            required
            value={dob}
            onChange={(event) => setDob(event.target.value)}
            />
           <div className='btn-container'>
                <button onClick={prevStep}>Previous</button>
                <button onClick={nextStep}>Next</button>
            </div>
          </form>
        );
      case 3:
        return (
          <form>
            <label htmlFor="gender">Gender:</label>
            <select
            id="gender"
            name="gender"
            required
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            </select>
            <div className='btn-container'>
                <button onClick={prevStep}>Previous</button>
                <button onClick={nextStep}>Next</button>
            </div>
          </form>
        );
      case 4:
        return (
          <form>
            <label htmlFor="address">Address:</label>
            <input
            type="text"
            id="address"
            name="address"
            required
            value={address}
            onChange={(event) => setAddress(event.target.value)}
             />
            <div className='btn-container'>
                <button onClick={prevStep}>Previous</button>
                <button onClick={nextStep}>Next</button>
            </div>
          </form>
        );
      case 5:
        return (
          <form>
            <label htmlFor="homePhone">Home Phone:</label>
            <input
            type="tel"
            id="homePhone"
            name="homePhone"
            required
            value={homePhone}
            onChange={(event) => setHomePhone(event.target.value)}
            />
            <label htmlFor="mobilePhone">Mobile Phone:</label>
            <input
            type="tel"
            id="mobilePhone"
            name="mobilePhone"
            required
            value={mobilePhone}
            onChange={(event) => setMobilePhone(event.target.value)}
            />
            <label htmlFor="aadhar">Government-issued ID (Aadhar):</label>
            <input
            type="text"
            id="aadhar"
            name="aadhar"
            required
            value={aadhar}
            onChange={(event) => setAadhar(event.target.value)}
            />
            <div className='btn-container'>
                <button onClick={prevStep}>Previous</button>
                <button onClick={nextStep}>Next</button>
            </div>
          </form>
        );
        case 6:
        return (
          <form onSubmit={handleSubmit}>
            <h2>Emergency Contact</h2>

            <label htmlFor="emergencyName">Name:</label>
            <input
            type="text"
            id="emergencyName"
            name="emergencyName"
            required
            value={emergencyName}
            onChange={(event) => setEmergencyName(event.target.value)}
            />
            <label htmlFor="relationship">Relationship:</label>
            <input
            type="text"
            id="relationship"
            name="relationship"
            required
            value={relationship}
            onChange={(event) => setRelationship(event.target.value)}
            />
            <label htmlFor="emergencyPhone">Phone Number:</label>
            <input
            type="tel"
            id="emergencyPhone"
            name="emergencyPhone"
            required
            value={emergencyPhone}
            onChange={(event) => setEmergencyPhone(event.target.value)}
            />
            <div className='btn-container'>
                <button onClick={prevStep}>Previous</button>
                <button type="submit">Submit</button>
            </div>
          </form>
        );
      default:
        return null;
    }
  };

  return (
  <div className="container">
      <h1>Patient Information</h1>
        {renderStep()}
    </div>
  )
}

export default LoginForm