import React from 'react'
import './Navbar.css'
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="search-container">
            <input placeholder="Search" className="dash-search"/>
            <AiOutlineSearch id="search-icon"/>
        </div>
    </div>
  )
}

export default Navbar