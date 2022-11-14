import React,{useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Error from './Components/Errorchecker/Error';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Pages/Dashboard/dashboard';
import Device from './Pages/Managedevice/managedevice';
import Signin from './Pages/Signin/Signin';
import Statistics from './Pages/Statistics/Statistics';
import PrivateRoute from './Protected';

const App = () => {
  const [signinState, setSigninState] = useState(false)
  const [tab, setTab] = useState(0)
  const [modal, setModal] = useState(0)

  const handleTab2 = () =>{
    setTab(2)
  }

  const handleTab1 = () =>{
    setTab(1)
  }

  const handleTab3 = () =>{
    setTab(3)
  }

  const handledeviceConfirm = (incoming) =>{
    if(incoming === 1){
      setModal(1)
    } else if(incoming === 2){
      setModal(2)
    }
  }

  const handleOverlay = () =>{
    setModal(0)
  }

  const handleNameX = (incoming) =>{
    console.log(`tosin: ${incoming}`)
    if(incoming === 3){
      setModal(3)
    } else{
      setModal(2)
    }
  }

  return (
    <Router>
        <div className="appcontainer">
        {modal === 1 ? <Error closeOverlay={handleOverlay} message="Device Added Successfully" icon={1}/> : modal === 2 ? <Error closeOverlay={handleOverlay} message="Incomplete Field" icon={2}/> : modal === 3 ? <Error closeOverlay={handleOverlay} message="Change Successful" icon={1}/> : <></>}
          {signinState && <div className="sbrcontainer">
            <Sidebar currentTab={tab}/>  
          </div>}
          <div className="rightContainer">
            <Routes>
              <Route exact path="/" element={<Signin setsiginState={() => {setSigninState(false)}}/>} /> 
              <Route path="/dashboard" element={<Dashboard edited={handleNameX} currentTab={handleTab1} setsiginState={() => {setSigninState(true)}}/>} />
              <Route path="/dashboard/device" element={<Device addednewdevice={handledeviceConfirm} currentTab={handleTab2} setsiginState={() => {setSigninState(true)}}/>} />
              <Route path="/dashboard/statistics" element={<Statistics currentTab={handleTab3} setsiginState={() => {setSigninState(true)}}/>} />            
              {/* <Route path="/" element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard/>}/>
              </Route> */}
            </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;
