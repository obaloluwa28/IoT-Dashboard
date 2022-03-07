import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';

const App = () => {
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<Sidebar />} />            
    </Routes>
  </Router>
  );
}

export default App;
