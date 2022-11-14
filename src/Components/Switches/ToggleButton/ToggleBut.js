import React,{useState, useEffect} from 'react'
import TogglebutOff from '../ToggleButtonOff/TogglebutOff'
import TogglebutOn from '../ToggleButtonOn/TogglebutOn'
import '../Togglebut.css'

const Togglebut = ({valState, itemkey, changeState}) => {
  // console.log(`key value 2: ${itemkey}`)
  // console.log(`Button State: ${valState}`)
  const [toggleSwitch, setToggleSwitch] = useState()

  useEffect(() =>{
    ValueSatate()
  }, [valState])
  
  const ValueSatate = () =>{
    setToggleSwitch(valState === "on" ? true : false )
  }

  const handleTogSwitchOn = () =>{
    setToggleSwitch(false)
    let obj = {
      state: 'off',
      keypair: itemkey
    }
    changeState(obj)
  }

  const handleTogSwitchOff = () =>{
    setToggleSwitch(true)
    let obj = {
      state: 'on',
      keypair: itemkey
    }
    changeState(obj)
  }

  return (
    <div className="sub-box-contain">
      {toggleSwitch ?
        <span onClick={handleTogSwitchOn}>
          <TogglebutOn />
        </span>:
        <span onClick={handleTogSwitchOff}>
          <TogglebutOff />
        </span>}
    </div>
  )
}

export default Togglebut