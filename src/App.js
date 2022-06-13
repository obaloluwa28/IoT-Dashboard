import React,{useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Pages/Dashboard/dashboard';
import Device from './Pages/Managedevice/managedevice';
import Signin from './Pages/Signin/Signin';
import Statistics from './Pages/Statistics/Statistics';

const App = () => {
  const [signinState, setSigninState] = useState(false)


  return (
    <Router>
      <div className="appcontainer">
        {signinState && <div className="sbrcontainer">
          <Sidebar />  
        </div>}
        <div className="rightContainer">
          <Routes>
            <Route exact path="/" element={<Signin setsiginState={() => {setSigninState(false)}}/>} /> 
            <Route path="/dashboard" element={<Dashboard setsiginState={() => {setSigninState(true)}}/>} />
            <Route path="/dashboard/device" element={<Device setsiginState={() => {setSigninState(true)}}/>} />
            <Route path="/dashboard/statistics" element={<Statistics setsiginState={() => {setSigninState(true)}}/>} />            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
