import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Login} exact path="/login"/>
        <Route Component={Home} exact path="/" />
        <Route Component={SignUp} exact path="/signup" />
      </Routes>
    </BrowserRouter>
  );
}

export default App
