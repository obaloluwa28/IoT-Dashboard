import React,{useState, useEffect} from 'react'
import TogglebutOff from '../ToggleButtonOff/TogglebutOff'
import TogglebutOn from '../ToggleButtonOn/TogglebutOn'
import '../Togglebut.css'

const Togglebut = ({valState}) => {
  console.log(`Button State: ${valState}`)
  let received_state;
  const [toggleSwitch, setToggleSwitch] = useState()

  useEffect(() =>{
    setToggleSwitch(valState === "on" ? true : false )
  }, [])

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