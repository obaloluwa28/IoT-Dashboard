import React from 'react'
import './editcom.css' 
import { IoCloseCircle } from "react-icons/io5";

const EditCom = ({closeOverlay}) => {

  const changeState = () =>{
    closeOverlay(false)
  }

  return (
    <div className='editcom-container'>
        <div className='nameChangeCont'>
            <IoCloseCircle id='closeIcons' onClick={changeState} />
            <p id="tagTitle">Change Title</p>
            <input type="text" placeholder="Enter New Title" className='inputfield' />
            <button className='change-but'>Change</button>
        </div>
    </div>
  )
}

export default EditCom