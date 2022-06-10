import React, {useState, useEffect} from 'react'
import './Devicebox.css'
import { FiMoreVertical } from "react-icons/fi";
import Togglebut from '../Switches/ToggleButton/ToggleBut';
import EditCom from '../EiditCom/EditCom';

const Devicebox = ({title, swtype, newState, butnState}) => {
  console.log(`Obalo: ${butnState}`)
  const [more, setMore] = useState(false)
  const [incomingSwitch, setIncomingSwitch] = useState("")
  const [editover, setEditover] = useState(false)

  useEffect(() =>{
    setIncomingSwitch(swtype)
  })

  // Object Various Hold Types of Control
  let switches = {
    toggle : <Togglebut valState={butnState}/>,
    pushBut : <Togglebut />,
    dimmer : <Togglebut />
  }

  const Reset = () =>{
    if(more === true){
      setMore(false)
    }
  }

  const EditFunc = () =>{
    newState(setEditover(!editover))
  }

  return (
      <div className="col1" onClick={Reset}>
        <FiMoreVertical id="more-Icon" onClick={() => {setMore(!more)}}/>
        <ul  className={more ? "more-list" : "more-list-2"}>
          <li onClick={EditFunc}>Edit</li>
          <li>Remove</li>
        </ul>
        <span id="device-title">{title}</span>
        <div className="sub-box-contain">
          { incomingSwitch === "toggle" ?  switches.toggle : incomingSwitch === "push" ? switches.pushBut : switches.dimmer }
        </div>
      </div>
  )
}

export default Devicebox