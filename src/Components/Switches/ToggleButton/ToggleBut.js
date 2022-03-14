import React,{useState} from 'react'
import TogglebutOff from '../ToggleButtonOff/TogglebutOff'
import TogglebutOn from '../ToggleButtonOn/TogglebutOn'
import '../Togglebut.css'

const Togglebut = () => {
  const [toggleSwitch, setToggleSwitch] = useState(false)
  const handleTogSwitch = () =>{
    setToggleSwitch(!toggleSwitch)
  }
  return (
    <div className="sub-box-contain">
      {toggleSwitch ?
        <span onClick={handleTogSwitch}>
          <TogglebutOn />
        </span>:
        <span onClick={handleTogSwitch}>
          <TogglebutOff />
        </span>}
    </div>
  )
}

export default Togglebut