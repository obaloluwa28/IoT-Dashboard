import React from 'react'
import '../../Components/Devicebox/Devicebox.css'
import { FaPlus } from "react-icons/fa";

const AddNewdevice = ({addnewclicked})=> {

  const handleClick = () =>{
    addnewclicked()
  }

  return (
      <div className="col1-add-container">
        <span id="device-title">Add New</span>
        <div className="sub-box-contain" onClick={handleClick}>
            <FaPlus id='add-new-plus'/>
        </div>
      </div>
  )
}

export default AddNewdevice