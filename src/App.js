import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Pages/Dashboard/dashboard';

const App = () => {
  return (
    <Router>
      <div className="appcontainer">
        <div className="sbrcontainer">
          <Sidebar />  
        </div>
        <div className="rightContainer">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
