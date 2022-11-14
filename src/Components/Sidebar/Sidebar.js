import React, {useState, useEffect} from 'react'
import './Sidebar.css'
import { AiOutlineDashboard } from "react-icons/ai";
import Togglemenu from '../Togglemenu/Togglemenu';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Sidebar = ({currentTab}) => {
  console.log(currentTab)
  useEffect(() =>{
    handleOnClick1(currentTab)
  })

    const [link1, setLink1] = useState(true)
    const [link2, setLink2] = useState(false)
    const [link3, setLink3] = useState(false)
    const [link4, setLink4] = useState(false)
    const [link5, setLink5] = useState(false)
    const [link7, setLink7] = useState(false)
    const [toggle, setToggle] = useState(true)
    const API = 'http://localhost:5000'
    const navigate = useNavigate();

    const handleOnClick1 = () =>{
      if(currentTab === 1){
        if(link1 === false){
          setLink1(true)
          setLink2(false)
          setLink3(false)
          setLink4(false)
          setLink5(false)
          setLink7(false)
        }
      }
  
      if(currentTab === 2){
        if(link2 === false){
          setLink1(false)
          setLink2(true)
          setLink3(false)
          setLink4(false)
          setLink5(false)
          setLink7(false)
        }
      }
  
      if(currentTab === 3){
        if(link3 === false){
          setLink1(false)
          setLink2(false)
          setLink3(true)
          setLink4(false)
          setLink5(false)
          setLink7(false)
        }
      }
  
      if(currentTab === 4){
        if(link4 === false){
          setLink1(false)
          setLink2(false)
          setLink3(false)
          setLink4(true)
          setLink5(false)
          setLink7(false)
        }
      }
  
      if(currentTab === 5){
        if(link5 === false){
          setLink1(false)
          setLink2(false)
          setLink3(false)
          setLink4(false)
          setLink5(true)
          setLink7(false)
        }
      }
  
      if(currentTab === 7){
        if(link7 === false){
          setLink1(false)
          setLink2(false)
          setLink3(false)
          setLink4(false)
          setLink5(false)
          setLink7(true)
        }
      }
    }
  
    const handleOnClick = async (e) =>{
      if(e.target.name === "list1"){
        if(link1 === false){
          setLink1(true)
          setLink2(false)
          setLink3(false)
          setLink4(false)
          setLink5(false)
          setLink7(false)
        }
      }
  
      if(e.target.name === "list2"){
        if(link2 === false){
          setLink1(false)
          setLink2(true)
          setLink3(false)
          setLink4(false)
          setLink5(false)
          setLink7(false)
        }
      }
  
      if(e.target.name === "list3"){
        if(link3 === false){
          setLink1(false)
          setLink2(false)
          setLink3(true)
          setLink4(false)
          setLink5(false)
          setLink7(false)
        }
      }
  
      if(e.target.name === "list4"){
        if(link4 === false){
          setLink1(false)
          setLink2(false)
          setLink3(false)
          setLink4(true)
          setLink5(false)
          setLink7(false)
        }
      }
  
      if(e.target.name === "list5"){
        if(link5 === false){
          setLink1(false)
          setLink2(false)
          setLink3(false)
          setLink4(false)
          setLink5(true)
          setLink7(false)
        }
      }
  
      if(e.target.name === "list7"){
        if(link7 === false){
          setLink1(false)
          setLink2(false)
          setLink3(false)
          setLink4(false)
          setLink5(false)
          setLink7(true)
        }
          try {
            await axios.delete(`${API}/logout`);
            navigate('/',{state:global.objct});
          } catch (error) {
            console.log(error);
          }
      }
    }

    const toogleBar = () =>{
      setToggle(!toggle)
    }
  
    return (
        <div className={toggle ? "navigation" : "navigation-active"}>
            <div className="toggle-contain" onClick={toogleBar}>
                <Togglemenu />
            </div>
            <ul>
              <li className={link1 ? "list active" : "list" } name="list1" onClick={handleOnClick}>
                <Link to="/dashboard" className='a' onClick={handleOnClick} name="list1">
                  <span className="icon"><AiOutlineDashboard id='icoons'/></span>
                  <span className="title">Dashboard</span>
                </Link>
              </li>
  
              <li name="list2" className={link2 ? "list active" : "list"} onClick={handleOnClick}>
                <Link to="/dashboard/device"  state={{from: {id:1}}} className='a' onClick={handleOnClick} name="list2">
                  <span className="icon"><ion-icon name="desktop-outline"></ion-icon></span>
                  <span className="title">Devices</span>
                </Link>
              </li>
  
              <li className={link3 ? "list active" : "list"} name="list3" onClick={handleOnClick}>
                <Link to="/dashboard/device" className='a' onClick={handleOnClick} name="list3">
                  <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                  <span className="title">Security</span>
                </Link>
              </li>

              <li className={link5 ? "list active" : "list"} onClick={handleOnClick}>
                <Link to="/dashboard/statistics" className='a' onClick={handleOnClick} name="list5">
                  <span className="icon"><ion-icon name="stats-chart-outline"></ion-icon></span>
                  <span className="title">Statistics</span>
                </Link>
              </li>
  
              <li className={link4 ? "list active" : "list"} onClick={handleOnClick}>
                <Link to="/dashboard/statistics" className='a' onClick={handleOnClick} name="list4">
                  <span className="icon"><ion-icon name="settings-outline"></ion-icon></span>
                  <span className="title">Settings</span>
                </Link>
              </li>
  
              <li className={link7 ? "list active" : "list"} onClick={handleOnClick}>
                <Link to="/" className='a' onClick={handleOnClick} name="list7">
                  <span className="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                  <span className="title">Sign Out</span>
                </Link>
              </li>
            </ul>
          </div>
    );
}

export default Sidebar