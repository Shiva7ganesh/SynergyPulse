import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Appointment from './components/Appointment'
import AppointmentForm from './components/AppointmentForm'
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm'
import Login from './components/Login'
import SignUp from './components/SignUp'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Login} exact path="/login"/>
        <Route Component={LoginForm} exact path="/loginform"/>
        <Route Component={Home} exact path="/" />
        <Route Component={SignUp} exact path="/signup" />
        <Route Component={Appointment} exact path="/appointment" />
        <Route Component={AppointmentForm} exact path="/appointmentform" />
        <Route Component={Dashboard} exact path="/dashboard" />
      </Routes>
    </BrowserRouter>
  );
}

export default App
